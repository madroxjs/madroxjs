import ts from 'typescript';
import { join } from 'path'

export async function getComponentPropsAndVariants(componentFolderPath) {
    const componentsFilePath = join(...(componentFolderPath.split('/')), 'component.tsx');
    const variantsFilePath = join(...(componentFolderPath.split('/')), 'variants.tsx');

    const program = ts.createProgram([componentsFilePath, variantsFilePath], {});
    const componentsSourceFile = program.getSourceFile(componentsFilePath);
    const variantsSourceFile = program.getSourceFile(variantsFilePath);

    if (!componentsSourceFile || !variantsSourceFile) {
        throw new Error("One of the source files was not found.");
    }

    const props = extractPropsFromSourceFile(componentsSourceFile, program);
    const {variants, defaultVariants} = extractVariantsFromSourceFile(variantsSourceFile, program);
    return ({ props, variants, defaultVariants })
}

function extractPropsFromSourceFile(sourceFile, program) {
    const checker = program.getTypeChecker();
    const props = {};

    ts.forEachChild(sourceFile, node => {
        if (ts.isInterfaceDeclaration(node)) {
            node.members.forEach(member => {
                if (ts.isPropertySignature(member)) {
                    const propName = member.name.getText();
                    const type = checker.typeToString(checker.getTypeAtLocation(member));
                    const isOptional = !!member.questionToken;

                    // Handle special case for 'iconPlacement' with specific options
                    if (propName === 'iconPlacement') {
                        props[propName] = {
                            required: !isOptional,
                            options: ['left', 'right'],
                            type: 'string'
                        };
                    } else {
                        // Handle the case of 'Icon', which can be a union type
                        if (propName === 'Icon') {
                            const resolvedType = resolveUnionType(member, checker);
                            props[propName] = {
                                required: !isOptional,
                                type: resolvedType
                            };
                        } else {
                            props[propName] = {
                                required: !isOptional,
                                type: type
                            };
                        }
                    }
                }
            });
        }
    });
    return props;
}

// Helper function to resolve union types like 'Icon'
function resolveUnionType(member, checker) {
    const type = checker.getTypeAtLocation(member);
    const unionTypes = type.types || [];

    for (const unionType of unionTypes) {
        const typeName = checker.typeToString(unionType);
        if (typeName !== 'never') {
            return typeName;
        }
    }
    return 'never';
}

function extractVariantsFromSourceFile(sourceFile, program) {
    const checker = program.getTypeChecker();
    const variants = {}; // This will hold 'variant' and 'size'
    let defaultVariants = {}; // This will hold the 'defaultVariants'

    ts.forEachChild(sourceFile, node => {
        if (ts.isVariableStatement(node)) {
            const declaration = node.declarationList.declarations[0];
            if (ts.isVariableDeclaration(declaration) && declaration.initializer) {
                const initializer = declaration.initializer;

                if (ts.isCallExpression(initializer) && initializer.expression.getText() === 'cva') {
                    const cvaArgs = initializer.arguments;

                    // Check that the second argument is the variants object
                    if (cvaArgs.length > 1 && ts.isObjectLiteralExpression(cvaArgs[1])) {
                        const variantObject = cvaArgs[1];

                        // Loop through the properties to extract actual variants and defaultVariants
                        variantObject.properties.forEach(prop => {
                            const propName = prop.name.getText();

                            // If this is the 'defaultVariants', handle it separately
                            if (propName === 'defaultVariants') {
                                if (ts.isObjectLiteralExpression(prop.initializer)) {
                                    prop.initializer.properties.forEach(defaultProp => {
                                        const variantName = defaultProp.name.getText();
                                        defaultVariants[variantName] = defaultProp.initializer.getText().replace(/['"]/g, ''); // Remove quotes
                                    });
                                }
                            } else if (propName === 'variants') {
                                // Now process the actual variants object
                                if (ts.isObjectLiteralExpression(prop.initializer)) {
                                    prop.initializer.properties.forEach(variantProp => {
                                        const variantName = variantProp.name.getText();
                                        const variantOptions = [];

                                        if (ts.isObjectLiteralExpression(variantProp.initializer)) {
                                            variantProp.initializer.properties.forEach(optionProp => {
                                                if (ts.isPropertyAssignment(optionProp)) {
                                                    variantOptions.push(optionProp.name.getText());
                                                }
                                            });
                                        }

                                        // Add each variant (e.g., 'variant', 'size') to the variants object
                                        variants[variantName] = {
                                            options: variantOptions,
                                            type: 'string'
                                        };
                                    });
                                }
                            }
                        });
                    }
                }
            }
        }
    });

    return { variants, defaultVariants };
}

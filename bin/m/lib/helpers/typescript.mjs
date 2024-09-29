import ts from 'typescript';
import { join } from 'path'
import { camelCase } from 'change-case';
import process from 'process';

export async function getComponentPropsAndVariants(componentFolderPath) {
    const componentsFilePath = join(...(componentFolderPath.split('/')), 'component.tsx');
    const variantsFilePath = join(...(componentFolderPath.split('/')), 'variants.tsx');
    const program = ts.createProgram([componentsFilePath, variantsFilePath], {});
  
    const componentsSourceFile = program.getSourceFile(componentsFilePath);
    const variantsSourceFile = program.getSourceFile(variantsFilePath);
  
    if (!componentsSourceFile || !variantsSourceFile) {
      throw new Error("One of the source files was not found.");
    }
  
    const checker = program.getTypeChecker();
  
    // Step 1: Extract components and props from `components.tsx`
    const components = extractComponentsAndProps(componentsSourceFile, checker);
  
    // Step 2: Extract variants from `variants.tsx` and match them with components
    extractVariants(variantsSourceFile, checker, components);
  
    // console.log(JSON.stringify(components, null, 2));
  
    return components;
  }

// Step 1: Extract component names and their props from `components.tsx`
function extractComponentsAndProps(sourceFile, checker) {
  const components = {};

  const moduleSymbol = checker.getSymbolAtLocation(sourceFile);
  if (moduleSymbol) {
    const exports = checker.getExportsOfModule(moduleSymbol);

    // Extract component names and initialize the structure
    exports.forEach(exp => {
      components[exp.name] = {
        props: {},   // Props will be added here later
        variants: {} // Variants will be added from `variants.tsx`
      };
    });
  }

  return components;
}

// Step 2: Extract variants from `variants.tsx` and match them to components
function extractVariants(variantsSourceFile, checker, components) {
  const moduleSymbol = checker.getSymbolAtLocation(variantsSourceFile);

  if (moduleSymbol) {
    const exports = checker.getExportsOfModule(moduleSymbol);

    // Iterate over exported variant objects
    exports.forEach(exp => {
      const variantName = exp.name;

      // Find the corresponding component by matching the `componentNameVariants` pattern
      const componentName = Object.keys(components).find(c => `${camelCase(c)}Variants` === variantName);


      if (componentName) {
        const variantSymbol = exp;
        const type = checker.getTypeOfSymbolAtLocation(variantSymbol, variantSymbol.valueDeclaration);

        const variants = omitClassPropProperties(type, checker)

        console.log({variants})

        // // Add the extracted variants to the matching component
        // components[componentName].variants = variantProperties;
      }
    });
  }
}

function omitClassPropProperties(type, checker) {
  const variantProperties = {};

  // If it's a function type, get the call signatures
  const callSignatures = type.getCallSignatures();

  callSignatures.forEach((signature) => {
    console.log(`Inspecting signature: ${checker.signatureToString(signature)}`);

    // Loop through each argument of the function signature
    signature.parameters.forEach((param) => {
      const paramType = checker.getTypeOfSymbolAtLocation(param, param.valueDeclaration);
      console.log(`Param type to string: ${checker.typeToString(paramType)}`);

      // Handle intersection types (ConfigVariants & ClassProp)
      if (paramType.isUnionOrIntersection()) {
        
        const defaultInersection = paramType.types[0];

        if (defaultInersection.isUnionOrIntersection()) {
          const leftHandType = defaultInersection.types[0];

          collectProperties(leftHandType, checker, variantProperties)
        }

      } else {
        console.log("here")
        // collectProperties(paramType, checker, variantProperties);
      }
    });
  });

  return variantProperties;
}

// Helper to collect properties from `ConfigVariants`
function collectProperties(type, checker, variantProperties) {

  
  const props = type.getProperties();

  props.forEach((prop) => {
    // console.log(Object.keys(Object.fromEntries(Object.entries(prop).filter(prop => !!prop[1]))))
    const propName = prop.getName(); // Get the property name (e.g., 'foo')
    const propType = checker.getTypeOfSymbolAtLocation(prop, prop.valueDeclaration); // Get the type of the property
    const typeString = checker.typeToString(prop); // Convert the type to a string representation

    console.log(`Property: ${propName}, Type: ${typeString}`);
    // // If the property is an object, recurse into its properties
    // if (prop.getProperties().length > 0) {
    //   const nestedProperties = {};
    //   collectProperties(prop, checker, nestedProperties); // Recursively collect nested properties
    //   variantProperties[propName] = {
    //     type: typeString,
    //     nested: nestedProperties // Store the nested properties
    //   };
    // } else {
    //   variantProperties[propName] = {
    //     type: typeString
    //   };
    // }
});
}

// Helper to find variant values (e.g., for `variant: { default: string, destructive: string }`)
function findVariantValues(type, checker) {
  if (!type.types) return [];
  // Check if the type contains literal values (e.g., union of string literals)
  return type.types
      .filter(t => t.isLiteral())
      .map(t => t.value);
}

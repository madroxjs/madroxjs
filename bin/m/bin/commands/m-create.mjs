import { Command } from 'commander';
// import { colors } from '../../lib/utils.mjs';
import { __projectroot } from '../../lib/utils.mjs'
import { join } from 'path';
import fs from 'fs-extra';
import * as changeCase from "change-case";
import { componentTemplate, indexTemplate, variantsTemplate, storyTemplate } from '../../templates/components/index.mjs'

const program = new Command();

program
    .name('create')
    .description('CLI command to generate something for a madrox project.')
    .argument('type', 'type of component or w/e.')
    .argument('nameOfThing', 'Name of thing.')
    .version('0.9.0')
    .action(createCommand);

export default program;

export async function createCommand(type, nameOfThing) {

    let typeFolder;
    switch (type) {
        case "atom":
            typeFolder = "Atoms"
            break;
        case "molecule":
            typeFolder = "Molecules"
            break;
        case "organism":
            typeFolder = "Organisms"
            break;
        case "template":
            typeFolder = "Templates"
            break;
        case "page":
            typeFolder = "Pages"
            break;
    }

    const targetPath = join(__projectroot, 'src', 'components', typeFolder, changeCase.pascalCase(nameOfThing))
    await fs.ensureDir(targetPath)

    ;[
        ['component.tsx', componentTemplate(nameOfThing)],
        ['index.ts', indexTemplate()],
        ['story.tsx', storyTemplate(nameOfThing)],
        ['variants.tsx', variantsTemplate(nameOfThing)]
    ].forEach(async ([fileName, fileContents]) => {
        await fs.writeFile(join(targetPath, fileName), fileContents, 'utf-8')
        console.log(`${fileName} created!`)
    })

}

program.parse();

createCommand.docs =  `# Init command documentation

The init command is used to initialize a new madrox project.

### Source Code

~~~javascript
${createCommand.toString()}
~~~
`;

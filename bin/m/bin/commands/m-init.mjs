import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import { colors } from '../../lib/utils.mjs';
import { Octokit, App } from "octokit";

const { red } = colors;

const program = new Command();

program
    .name('init')
    .description('CLI command to initialize a new madrox project')
    .argument('nameOfProject', 'Name of the project.')
    .option('-w, --with <type>', 'includes local options lib, gql')
    .version('0.8.0')
    .action(initCommand);

export default program;

export function initCommand(appName, optionss) {

    const projectPath = path.join(process.cwd(), appName);
    if (!fs.existsSync(projectPath)) {
        fs.mkdirSync(projectPath);
        console.log(`Project ${red(appName)} has been initialized.`);
    } else {
        console.log(`A directory with the name ${appName} already exists.`);
    }

    return { appName, projectPath };
}

program.parse();

initCommand.docs =  `# Init command documentation

The init command is used to initialize a new madrox project.

### Source Code

~~~javascript
${initCommand.toString()}
~~~
`;

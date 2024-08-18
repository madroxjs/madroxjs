import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import { colors } from '../../lib/utils.mjs';
import process from 'process';

const { red } = colors;

const program = new Command();

program
    .name('create')
    .description('CLI command to generate something for a madrox project.')
    .argument('nameOfProject', 'Name of the project.')
    .option('-w, --with <type>', 'includes local options lib, gql')
    .version('0.8.0')
    .action(createCommand);

export default program;

export function createCommand(appName) {

    return { appName };
}

program.parse();

createCommand.docs =  `# Init command documentation

The init command is used to initialize a new madrox project.

### Source Code

~~~javascript
${createCommand.toString()}
~~~
`;

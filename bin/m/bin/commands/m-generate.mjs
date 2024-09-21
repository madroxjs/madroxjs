#!/usr/bin/env node

import { Command } from 'commander';
import { join } from 'path'
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
// import faker from '@faker-js/faker';
import { __projectroot } from '../../lib/utils.mjs'
import { unitTestTemplate } from '../../templates/index.mjs'
import { getComponentPropsAndVariants } from '../../lib/helpers/typescript.mjs'



const program = new Command();

const generateUnitTestCommand = async (type, relativeComponentPath) => {
    const pascalComponentPath = relativeComponentPath
    const componentName = relativeComponentPath.split('/').pop()
    const componentFolderPath = join(__projectroot, 'src', 'components', pascalComponentPath)
    const fullUnitTestPath = path.resolve(`${componentFolderPath}/unit.tsx`);
    const { props, variants } = await getComponentPropsAndVariants(componentFolderPath)
    const sourceCodeForUnitTest = unitTestTemplate({componentName, props, variants})
    fs.writeFile(fullUnitTestPath, sourceCodeForUnitTest, () => {
      console.log(`Wrote ${fullUnitTestPath}`)
    })

};



// Main command
program
  .name('generate')
  .argument('type', 'type of thing to generate.')
  .argument('componentPath', 'Path to the component folder from src/components/.')
  .description('Generate unit tests for component props and variants')
  .action(generateUnitTestCommand);

program.parse();

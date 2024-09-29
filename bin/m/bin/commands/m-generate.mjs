#!/usr/bin/env node

import { Command } from 'commander';
import { join } from 'path'
import fs from 'fs-extra';
import * as path from 'path';
// import faker from '@faker-js/faker';
import { __projectroot } from '../../lib/utils.mjs'
import { unitTestTemplate } from '../../templates/index.mjs'
import {
  getComponentPropsAndVariants
} from '../../lib/helpers/typescript.mjs'



const program = new Command();

const generateUnitTestCommand = async (type, relativeComponentPath) => {
  const pascalComponentPath = relativeComponentPath
  const componentFolderPath = join(__projectroot, 'src', 'components', pascalComponentPath)
  await fs.ensureDir(path.resolve(`${componentFolderPath}/tests`))

  const components = await getComponentPropsAndVariants(componentFolderPath);


  // const components = await getComponentPropsAndVariants(componentFolderPath)
  // const sourceCodeForUnitTest = unitTestTemplate({componentName, props, variants})
  // await fs.writeFile(fullUnitTestPath, sourceCodeForUnitTest, 'utf-8')
  // console.log(`Wrote ${fullUnitTestPath}`)
};



// Main command
program
  .name('generate')
  .argument('type', 'type of thing to generate.')
  .argument('componentPath', 'Path to the component folder from src/components/.')
  .description('Generate unit tests for component props and variants')
  .action(generateUnitTestCommand);

program.parse();

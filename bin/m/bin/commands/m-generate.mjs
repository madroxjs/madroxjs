#!/usr/bin/env node

import { Command } from 'commander';
import { join } from 'path'
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
// import faker from '@faker-js/faker';
import { __projectroot } from '../../lib/utils.mjs'
import { getComponentPropsAndVariants } from '../../lib/helpers/typescript.mjs'



const program = new Command();

const generateUnitTestCommand = async (type, relativeComponentPath) => {
    const componentFolderPath = join(__projectroot, 'src', 'components', relativeComponentPath)
    const fullComponentPath = path.resolve(`${componentFolderPath}/component.tsx`);
    const fullVariantsPath = path.resolve(`${componentFolderPath}/variants.tsx`);
    const fullUnitTestPath = path.resolve(`${componentFolderPath}/unit.tsx`);
    const result = await getComponentPropsAndVariants(componentFolderPath)
    console.log(result.variants)
};


// Main command
program
  .name('generate')
  .argument('type', 'type of thing to generate.')
  .argument('componentPath', 'Path to the component folder from src/components/.')
  .description('Generate unit tests for component props and variants')
  .action(generateUnitTestCommand);

program.parse();

import { PlopGenerator } from 'plop';
import prettierTransform from './utils/prettier-tranform';

const repositoryGenerator: PlopGenerator = {
  description: 'Creates a new repository',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'The name of this repository',
    },
  ],
  actions: [
    {
      type: 'add',
      templateFile: 'generators/templates/repository/repository.ts.hbs',
      path: 'src/repositories/{{kebabCase name}}.ts',
      transform: prettierTransform,
    },
    {
      type: 'add',
      templateFile: 'generators/templates/repository/repository.test.ts.hbs',
      path: 'test/repositories/{{kebabCase name}}.test.ts',
      transform: prettierTransform,
    },
    {
      type: 'append',
      pattern: "/* PLOP_INJECT_EXPORT */",
      path: 'src/repositories/index.ts',
      template: `export { default as {{camelCase name}}Repository } from './{{kebabCase name}}'`,
      transform: prettierTransform,
    }
  ],
};

export default repositoryGenerator;

import {PlopGenerator} from 'plop';
import prettierTransform from './utils/prettier-tranform';

const serviceGenerator: PlopGenerator = {
  description: 'Creates a new service',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'The name of this service',
    },
  ],
  actions: [
    {
      type: 'add',
      templateFile: 'generators/templates/service/service.ts.hbs',
      path: 'src/services/{{kebabCase name}}.ts',
      transform: prettierTransform,
    },
    {
      type: 'add',
      templateFile: 'generators/templates/service/service.test.ts.hbs',
      path: 'test/services/{{kebabCase name}}.test.ts',
      transform: prettierTransform,
    },
    {
      type: 'append',
      pattern: '/* PLOP_INJECT_EXPORT */',
      path: 'src/services/index.ts',
      template: `export { default as {{camelCase name}}Service } from './{{kebabCase name}}'`,
      transform: prettierTransform,
    },
  ],
};

export default serviceGenerator;

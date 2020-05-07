import { PlopGenerator } from 'plop';
import { extractModelAttributes } from './utils/model-attributes';
import prettierTransform from './utils/prettier-tranform';

const modelGenerator: PlopGenerator = {
  description: 'Generate a MST model',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of this model?",
    },
    {
      type: 'input',
      name: 'attributes',
      message: 'Models attributes e.g. name:string username:string',
      default: '',
    },
  ],
  actions: (data) => {
    const { attributes, types } = extractModelAttributes(data.attributes);
    return [
      {
        type: 'add',
        path: 'src/models/{{kebabCase name}}.ts',
        templateFile: 'generators/templates/model/model.ts.hbs',
        data: { fields: attributes, types },
        transform: prettierTransform,
      },
      {
        type: 'add',
        path: 'test/models/{{kebabCase name}}.ts',
        templateFile: 'generators/templates/model/model.test.ts.hbs',
        transform: prettierTransform,
      },
      {
        type: 'append',
        pattern: "/* PLOP_INJECT_EXPORT */",
        path: 'src/models/index.ts',
        template: `export { default as {{pascalCase name}} } from './{{kebabCase name}}'`,
      }
    ];
  },
};

export default modelGenerator;

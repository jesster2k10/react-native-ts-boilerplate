import { PlopGenerator } from 'plop';
import prettierTransform from './utils/prettier-tranform';

const viewGenerator: PlopGenerator = {
  description: 'Creates a new view (screen)',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the screen?",
    },
  ],
  actions: () => {
    return [
      {
        type: 'add',
        templateFile: 'generators/templates/view/view.tsx.hbs',
        transform: prettierTransform,
        path: 'src/views/{{kebabCase name}}/{{kebabCase name}}.tsx',
      },
      {
        type: 'add',
        templateFile: 'generators/templates/view/view.styled.ts.hbs',
        transform: prettierTransform,
        path: 'src/views/{{kebabCase name}}/{{kebabCase name}}.styled.ts',
      },
      {
        type: 'add',
        templateFile: 'generators/templates/view/view.test.ts.hbs',
        transform: prettierTransform,
        path: 'test/views/{{kebabCase name}}.test.tsx'
      }
    ];
  },
};

export default viewGenerator;

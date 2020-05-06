import { PlopGenerator } from 'plop';
import prettierTransform from './utils/prettier-tranform';

const componentGenerator: PlopGenerator = {
  description: 'Creates a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the component?",
    },
    {
      type: 'confirm',
      name: 'generate_story',
      message: 'Do you want to generate a story?',
      default: true,
    },
    {
      type: 'input',
      name: 'sub_directory',
      message: 'What sub folder should this component stay in?',
    },
  ],
  actions: (data) => {
    const path = (ending: string) => {
      const sub_path = data.sub_directory ? `/${data.sub_directory}/` : '/';
      return `src/components${sub_path}{{kebabCase name}}/{{kebabCase name}}${ending}`;
    };

    const actions = [
      {
        type: 'add',
        path: path('.tsx'),
        templateFile:
          'generators/templates/functional-component/component.tsx.hbs',
        transform: prettierTransform,
      },
      {
        type: 'add',
        path: path('.props.ts'),
        templateFile:
          'generators/templates/functional-component/component.props.ts.hbs',
        transform: prettierTransform,
      },
      {
        type: 'add',
        path: path('.styled.ts'),
        templateFile:
          'generators/templates/functional-component/component.styled.ts.hbs',
        transform: prettierTransform,
      },
    ];

    if (data.generate_story) {
      actions.push({
        type: 'add',
        path: path('.story.tsx'),
        templateFile:
          'generators/templates/functional-component/component.story.tsx.hbs',
        transform: prettierTransform,
      });
      actions.push({
        type: 'append',
        path: 'storybook/stories.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: `require('../${path('.story.tsx')}')`,
        transform: prettierTransform,
      });
    }

    return actions;
  },
};

export default componentGenerator;

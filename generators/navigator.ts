import {PlopGenerator} from 'plop';
import prettierTransform from './utils/prettier-tranform';

const navigatorGenerator: PlopGenerator = {
  description: 'Creates a new navigator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the navigator?",
    },
    {
      type: 'list',
      name: 'type',
      choices: ['stack', 'drawer', 'tab'],
    },
  ],
  actions: (data) => {
    const templateFile = `generators/templates/navigator/${data.type}-navigator.tsx.hbs`;
    return [
      {
        type: 'add',
        templateFile: templateFile,
        path: 'src/navigation/navigators/{{kebabCase name}}.tsx',
        transform: prettierTransform,
      },
    ];
  },
};

export default navigatorGenerator;

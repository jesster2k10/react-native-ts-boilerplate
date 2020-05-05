import prettier from 'prettier';
import { Linter } from 'eslint'
import config from '../../.prettierrc.js';
import eslintConfig from '../../.eslintrc.js';

const linter = new Linter()

export default function prettierTransform(text: string) {
  const prettierFormatted = prettier.format(text, {
    ...(config as any),
    parser: 'babel-ts',
  });

  const { output } = linter.verifyAndFix(prettierFormatted, eslintConfig)
  return output
}

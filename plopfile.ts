import {NodePlopAPI} from 'plop';
import componentGenerator from './generators/component';
import modelGenerator from './generators/model';
import navigatorGenerator from './generators/navigator';
import viewGenerator from './generators/view';
import repositoryGenerator from './generators/repository';

export default function main(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('model', modelGenerator);
  plop.setGenerator('navigator', navigatorGenerator);
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('repository', repositoryGenerator);
}

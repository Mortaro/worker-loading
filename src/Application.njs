import Nullstack from 'nullstack';
import WorkerLoadingExample from './WorkerLoadingExample';

import './Application.scss';

class Application extends Nullstack {

  static async start(context) {
    await this.startProject(context);
  }

  static async startProject({project}) {
    project.name = 'Worker Loading';
    project.domain = 'nullstack.app';
    project.color = '#D22365';
  }

  prepare({project, page}) {
    page.title = `${project.name} - Welcome to Nullstack!`;
    page.locale = 'pt-BR';
  }

  render({worker}) {
    return (
      <main>
        <WorkerLoadingExample />
        {worker.fetching && <p> Loading a server function... </p>}
      </main>
    )
  }

}

export default Application;
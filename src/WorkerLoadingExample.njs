import Nullstack from 'nullstack';

class WorkerLoadingExample extends Nullstack {

  static async delayedServerFunction({delay}) {
    const pretendItsRuby = (ms) => new Promise(resolve => setTimeout(resolve, 2000 + ms))
    await pretendItsRuby(delay)
    console.log("this is running on the server side")
  }

  async requestDelayedFunction({data}) {
    await this.delayedServerFunction(data);
  }

  renderDelayButton({worker, milliseconds}) {
    const isLoading = !!worker.queues.delayedServerFunction
      .find(({delay}) => delay === milliseconds);
    return (
      <button onclick={this.requestDelayedFunction} data-delay={milliseconds} disabled={isLoading}>
        Delay for {milliseconds}
      </button>
    )
  }
  
  render() {
    return (
      <>
        <DelayButton milliseconds={1000} />
        <DelayButton milliseconds={3000} />
      </>
    )
  }

}

export default WorkerLoadingExample;
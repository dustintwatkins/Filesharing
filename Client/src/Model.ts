import ClientCommunicator from './ClientCommunicator/ClientCommunicator'
import RequestObjectFactory from './ClientCommunicator/RequestObjectFactory'


class Model {
  private static _instance: Model

  public static get_instance (): Model {
    if (!this._instance) {
      this._instance = new Model()
      this.get_instance().results = []
    }
    return this._instance
  }

  private results: any

  public addResults (results: any) {
    this.results = results
  }

  public getResults (): any {
    return this.results
  }

  public async fetchAllFiles (): Promise<any> {
    this.results = await ClientCommunicator.post(RequestObjectFactory.buildRequestObject({}, '/getFiles'))
  }

  public getFiles (): any {
    return this.results
  }
}

export default Model

class Model {
  private static _instance: Model

  public static get_instance (): Model {
    if (!this._instance) {
      this._instance = new Model()
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
}

export default Model

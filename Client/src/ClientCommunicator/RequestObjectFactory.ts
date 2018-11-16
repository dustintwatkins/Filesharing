import IRequestObject from './IRequestObject'

class RequestObjectFactory {
  public static buildRequestObject (params: object, route: string): IRequestObject {
    return { params, route }
  }
}

export default RequestObjectFactory

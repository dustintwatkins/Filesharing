import IRequestObject from './IRequestObject'


class ClientCommunicator {
  private static serverURL = 'http://localhost:8082'

  public static async post (requestInfo: IRequestObject): Promise<JSON> {
    const url: string = `${ClientCommunicator.serverURL}${requestInfo.route}`

    let params = {string: 'hi'}
    console.log(requestInfo.params)
    let request = {
      body: JSON.stringify(requestInfo.params),
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    }
    console.log('here', request.body)
    return fetch(url, request)
      .then(async (response) => {
        return response.json()
      })
      .catch((error) => {
        console.log('Fetch error:', error)
        return null
      })
  }
}

export default ClientCommunicator

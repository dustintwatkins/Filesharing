import IRequestObject from './IRequestObject'


class ClientCommunicator {
  private static serverURL = 'http://localhost:8082'

  public static async post (requestInfo: IRequestObject): Promise<JSON> {
    const url: string = `${ClientCommunicator.serverURL}${requestInfo.route}`

    let request = {
      body: JSON.stringify(requestInfo),
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    }

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

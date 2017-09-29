import rp from 'request-promise-native'

export class Client {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  render(params = {}) {
    return rp({
      method: 'POST',
      url: `https://api.sendable.io/v1/render`,
      body: params,
      auth: {
        user: this.apiKey,
        pass: '',
      },
      json: true,
    })
  }

  email(params = {}) {
    return rp({
      method: 'POST',
      url: `https://api.sendable.io/v1/email`,
      body: params,
      auth: {
        user: this.apiKey,
        pass: '',
      },
      json: true,
    })
  }
}

export const Sendable = new Client(
  process.env.SENDABLE_API_KEY
)

export default Sendable

import rp from 'request-promise-native'

export class Client {
  constructor(projectId, apiKey) {
    this.projectId = projectId
    this.apiKey = apiKey
  }

  render(templateId, params = {}) {
    return rp({
      method: 'POST',
      url: `https://api.sendable.io/v1/project/${this.projectId}/template/${templateId}/render`,
      body: params,
      headers: {
        'Authorization': `ApiKey ${this.apiKey}`
      },
      json: true,
    })
  }

  email(templateId, params = {}) {
    return rp({
      method: 'POST',
      url: `https://api.sendable.io/v1/project/${this.projectId}/template/${templateId}/email`,
      body: params,
      headers: {
        'Authorization': `ApiKey ${this.apiKey}`
      },
      json: true,
    })
  }
}

export const Sendable = new Client(
  process.env.SENDABLE_PROJECT_ID,
  process.env.SENDABLE_API_KEY
)

export default Sendable

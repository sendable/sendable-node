import request from 'request'

export default class {
  constructor(projectId, apiKey) {
    this.projectId = projectId
    this.apiKey = apiKey
  }

  render(templateId, params = {}) {
    return request({
      method: 'POST',
      url: `https://api.sendable.io/v1/project/${this.projectId}/template/${templateId}/render`,
      form: params,
      headers: {
        'Authorization': `ApiKey ${this.apiKey}`
      },
      json: true,
    })
  }

  email(templateId, params = {}) {
    return request({
      method: 'POST',
      url: `https://api.sendable.io/v1/project/${this.projectId}/template/${templateId}/email`,
      form: params,
      headers: {
        'Authorization': `ApiKey ${this.apiKey}`
      },
      json: true,
    })
  }
}

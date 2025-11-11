import app from '../../dist/server.js'

export const handler = async (event) => {
  const url = new URL(event.rawUrl || event.url || `https://${event.headers.host}${event.path}`)
  const request = new Request(url, {
    method: event.httpMethod || event.method || 'GET',
    headers: event.headers || {},
    body: event.body ? (typeof event.body === 'string' ? event.body : JSON.stringify(event.body)) : undefined
  })

  const response = await app.fetch(request)
  const body = await response.text()

  return {
    statusCode: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body
  }
}

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
type TOptions = {
  method?: METHODS
  headers?: { [key: string]: string }
  timeout?: number
  body?: any
}

export async function makeRequest(url: string | URL, options?: TOptions) {
  let headers: HeadersInit = {}

  if (options?.method === METHODS.POST || options?.body)
    headers = { 'Content-Type': 'application/json' }

  return fetch(url, {
    method: options?.body ? METHODS.POST : METHODS.GET,
    redirect: 'follow',
    ...options,
    body: options?.body && JSON.stringify(options?.body),
    headers: { ...headers, ...(options?.headers || {}) },
  })
}

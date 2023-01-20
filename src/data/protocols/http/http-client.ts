export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
  params?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get'

export enum HttpStatusCode {
  ok = 200,
  noContent = 201,
  unauthorized = 401,
  notFound = 404,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export namespace Http {
  export type Method = 'post' | 'get' | 'delete'

  export type Request = {
    url: string
    method: Method
    body?: any
    headers?: any
    params?: any
  }

  export enum StatusCode {
    ok = 200,
    created = 201,
    unauthorized = 401,
    notFound = 404,
  }

  export type Response<T = any> = {
    statusCode: StatusCode
    body?: T
  }
}

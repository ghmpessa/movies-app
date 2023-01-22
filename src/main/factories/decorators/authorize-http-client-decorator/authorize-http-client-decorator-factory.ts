import { makeAxiosHttpClient } from '@/main/factories/http'
import { HttpClient } from '@/data/protocols'
import { AuthorizeHttpClientDecorator } from '@/main/decorators/'

export const makeAuthorizeHttpClientDecorator = (): HttpClient =>
  new AuthorizeHttpClientDecorator(makeAxiosHttpClient())

import { HttpClient } from '@/data/protocols'
import { AxiosHttpClient } from '@/infra/protocols/http'

export const makeAxiosHttpClient = (): HttpClient => new AxiosHttpClient()

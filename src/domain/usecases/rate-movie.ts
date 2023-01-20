export interface RateMovie {
  rate(params: RateMovie.Params): Promise<void>
}

export namespace RateMovie {
  export type Params = {
    value: number
  }
}

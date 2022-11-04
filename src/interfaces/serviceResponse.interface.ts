interface MessageObject {
  message: string
}

export interface IServiceResp<T> {
  statusCode: number
  data: MessageObject | T[] | T
}
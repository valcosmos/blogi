export interface PageInfo {
  current: number
  sort: number
  pageSize: number
}


export interface HttpResponse {
  code: number
  data: any
  msg?: string
  total?: number
  isLiked?: Boolean
}

interface BaseInfo {
  _id: string
  created?: string
  updated?: string
}

export interface PostInfo extends BaseInfo {
  catalog?: string
  comment?: number
  content: string
  isTop?: string
  like?: number
  read?: number
  tag?: string[]
  title?: string
}

export interface LinkInfo extends BaseInfo {
  avatar: string
  nickname: string
  desc: string
  url: string
}

export interface LogInfo extends BaseInfo {
  log: string
}

export interface MsgInfo extends BaseInfo {
  nickname: string
  content: string
  pid: string
  children: any
  avatar: string
}

export interface TagInfo extends BaseInfo {
  tagName: string
}

import { HttpResponse } from './../common/interface'
import { PageInfo } from '@/common/interface'
import request from '@/utils/axios'
import { stringify } from 'qs'
import { AxiosResponse } from 'axios'

export const getPosts = (pageInfo: PageInfo) =>
  request.get('/public/get-posts?' + stringify(pageInfo))

export const getTags = () => request.get('/public/get-tags')

export const getHotPosts = () => request.get('/public/get-hot-posts')

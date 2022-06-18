import { PageInfo } from '@/common/interface'
import request from '@/utils/axios'
import { stringify } from 'qs'

export const getPosts = (pageInfo: PageInfo) =>
  request.get('/public/get-posts?' + stringify(pageInfo))

export const getHotPosts = () => request.get('/public/get-hot-posts')

export const getPostDetail = (id: { id: string }) =>
  request.get('/public/get-post-detail?' + stringify(id))

export const getComments = (postId: { postId: string }) =>
  request.get('/public/get-comments?' + stringify(postId))

export const setLike = (id: { id: string }) =>
  request.post('/public/set-like', id)

export const setComment = (data: any) =>
  request.post('/public/set-comment', data)

export const getTags = () => request.get('/public/get-tags')

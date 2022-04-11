import request from '@/utils/axios'

export const getLinks = () => request.get('/public/get-links')

export const getLogs = () => request.get('/public/get-logs')

export const getMsgs = () => request.get('/public/get-msgs')

export const setMsgs = (data: { nickname: string; content: string }) =>
  request.post('/public/set-msg', data)

export const getAbout = () => request.get('/public/get-user-msg')

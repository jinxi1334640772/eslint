import api from './index'
posts = (params) => api.get('/posts', params);
export const comments = (params) => api.get('/comments', params);
export const albums = (params) => api.get('/albums', params);
export const photos = (params) => api.get('/photos', params);
export const todos = (params) => api.get('/todos', params);
export const users = (params) => api.get('/users', params);
export const post_posts = (params) => api.post('/posts', params);

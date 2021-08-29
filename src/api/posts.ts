import { Api, toFormData } from './base'
import { IPost } from '../types'

export const Posts = {
	getPosts: (): Promise<[any, any]> => new Promise(resolve => {
		Api.get('/posts')
			.then(res => resolve([null, res.data]))
			.catch(error => resolve([error.response, null]))
	}),
	createPost: (post: IPost): Promise<[any, any]> => new Promise(resolve => {
		Api.post('/posts', toFormData(post))
			.then(res => resolve([null, res.data]))
			.catch(error => resolve([error.response, null]))
	})
}
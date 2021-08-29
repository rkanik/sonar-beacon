export interface IUser {
	id: number | string,
	name?: string
	avatar: string
	username?: string
	createdAt?: Date
}

export interface IPost {
	likes: number
	author: string
	avatar: string
	content: string
	timestamp: Date
	id: number | string
	media: string | File
}
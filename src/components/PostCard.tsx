import React from 'react'
import moment from 'moment'
import { IPost } from '../types'
import UAvatar from './utils/UAvatar'

type PostCardProps = {
	post: IPost
}
const PostCard: React.FC<PostCardProps> = ({ post }) => {
	return (
		<div className="p-5 rounded bg-white shadow">
			<div className='flex space-x-4'>
				<UAvatar src={post.avatar} className='flex-none'></UAvatar>
				<div className='flex-1'>
					<h2 className='text-lg font-medium'>
						{post.author}
						<span className='font-normal text-gray-400 ml-2 text-sm'>{moment(post.timestamp).format('HH:mm')}</span>
					</h2>
					{post.content && <div className='mt-2 text-gray-700'>
						{post.content}
					</div>}
					{post.media && <div className='mt-3 rounded-md overflow-hidden'>
						<img src={post.media as string} alt="Post media" />
					</div>}

					<div className='mt-4 flex space-x-2 items-center'>
						<button className=' text-gray-500 hover:text-red-500'>
							<i className='fal fa-heart'></i>
						</button>
						<div className='text-base text-gray-500'>{post.likes}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PostCard

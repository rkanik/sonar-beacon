import React, { useState } from 'react'
import cns from 'classnames'
import { IPost, IUser } from '../types'
import UAvatar from './utils/UAvatar'
import UButton from './utils/UButton'

const emptyPost = (user: IUser) => ({
	id: Date.now(),
	likes: 30,
	media: '',
	content: '',
	avatar: user.avatar,
	author: user.name || user.username || '',
	timestamp: new Date(),
})

type CreatePostProps = {
	user: IUser
	className?: string,
	onCreatePost: (post: IPost) => Promise<any>
}
const CreatePost: React.FC<CreatePostProps> = ({ user, className, onCreatePost }) => {

	const [focused, setFocused] = useState(false)
	const [mediaFile, setMediaFile] = useState<File>()
	const [post, setPost] = useState<IPost>(emptyPost(user))

	const disablePost = !post.media && !post.content.trim()

	const toggleFocus = () => {
		setFocused(focused => !focused)
	}

	const onChooseMedia = () => {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/x-png,image/gif,image/jpeg';
		input.addEventListener('change', (event: any) => {
			const file = event.target.files[0];
			setMediaFile(file);
			setPost(post => ({
				...post, media: URL.createObjectURL(file)
			}))
		});
		input.click();
	};

	const onClearMedia = () => {
		setMediaFile(undefined)
		setPost(post => ({
			...post, media: ''
		}))
	}

	const onChangeContent = (e: any) => {
		setPost(post => ({
			...post, content: e.target.value
		}))
	}

	const onSubmitPost = async () => {
		let res = await onCreatePost({
			...post,
			// @TODO while sending on acutal api send the actual file
			// media: mediaFile
		})
		if (!res.error) {
			setPost(emptyPost(user))
		}
	}

	return (
		<div className={cns(className, 'bg-white shadow rounded p-5 border-2 transition-colors duration-300', [
			focused ? 'border-green-500' : 'border-transparent'
		])}>
			<div className='flex space-x-4'>
				<UAvatar src={user.avatar} className='flex-none'></UAvatar>
				<div className='flex-1'>
					<input
						value={post.content}
						onBlur={toggleFocus}
						onFocus={toggleFocus}
						onChange={onChangeContent}
						placeholder="What's up?"
						className='w-full text-lg text-gray-900 focus:outline-none'
					></input>
					<div className='mt-8'>
						{post.media && <div className='relative h-24 w-24 mb-4 rounded bg-cover bg-center' style={{ backgroundImage: `url(${post.media})` }}>
							<button onClick={onClearMedia} className='absolute top-1 right-1 text-white bg-gray-900 bg-opacity-20 hover:bg-opacity-50 text-sm h-5 w-5 grid place-items-center rounded-full transition-colors duration-300'>
								<i className='fal fa-times'></i>
							</button>
						</div>}
						<div className='flex justify-between'>
							<UButton onClick={onChooseMedia} className='hidden sm:block'>Add Media</UButton>
							<UButton onClick={onSubmitPost} disabled={disablePost} className='ml-auto'>Post</UButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePost

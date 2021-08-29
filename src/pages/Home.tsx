import React, { useEffect, useState } from 'react'
import { Posts } from '../api/posts'
import CreatePost from '../components/CreatePost'
import PostCard from '../components/PostCard'
import { IPost, IUser } from '../types'

const Home: React.FC = () => {

	// const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [posts, setPosts] = useState<IPost[]>([
		{
			id: 1630261191494,
			likes: 30,
			media: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
			content: "Hello world!",
			avatar: "https://avatars.githubusercontent.com/u/30260735?v=4",
			author: "RK Anik",
			timestamp: new Date('2021-08-29T18:19:51.494Z')
		}
	]);
	const [loggedInUser] = useState<IUser>({
		id: 1, name: 'RK Anik',
		avatar: 'https://avatars.githubusercontent.com/u/30260735?v=4'
	})

	const onCreatePost = async (post: IPost) => {
		console.log('post', JSON.stringify(post, null, 3))
		let [err, res] = await Posts.createPost(post)
		if (!err) setPosts(posts => [post, ...posts])
		return [err, res]
	}

	const onMounted = async () => {
		let [err,/* res */] = await Posts.getPosts()
		if (!err) {
			// TODO set the posts in state
			// setPosts(res.posts)
		}
	}

	useEffect(() => {
		onMounted()
	}, [])

	return (
		<div className='flex flex-col overflow-y-auto bg-green-50 min-h-screen'>
			<div className='container mx-auto px-5 sm:px-0 py-5 sm:py-6 md:py-7 lg:py-8 xl:py-9 2xl:py-10'>
				<div>
					<h1 className='text-4xl'>beacon</h1>
				</div>
				<div className='max-w-3xl mx-auto '>
					<div className='text-3xl'>Home</div>
					<CreatePost className='mt-5' onCreatePost={onCreatePost} user={loggedInUser}></CreatePost>

					<div className='pt-5 grid grid-cols-1 gap-5'>
						{posts.map((post: IPost) => (
							<PostCard key={post.id} post={post}></PostCard>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home

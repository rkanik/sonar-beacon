import React from 'react'
import CreatePost from '../components/CreatePost'
import PostCard from '../components/PostCard'

const Home: React.FC = () => {
	return (
		<div>
			<CreatePost></CreatePost>
			<PostCard></PostCard>
		</div>
	)
}

export default Home

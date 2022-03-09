import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
	return (
		<div className={s.posts}>
			My Posts
			<div>New Post</div>
			<div className={s.item}>Post 1</div>
			<div className={s.item}>Post 1</div>
		</div>
	);
};

export default MyPosts;

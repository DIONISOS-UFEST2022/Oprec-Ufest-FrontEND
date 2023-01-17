import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostError, getPostStatus, fetchPosts } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostStatus);
    const error = useSelector(getPostError);

    
    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postsStatus, dispatch]);


    let content;
    if (postsStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (postsStatus === 'succeeded') {
        content = posts.map((post) => (
            <PostsExcerpt key={post.id} post={post} />
        ))
    } else if (postsStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
   <Box >
    {content}
   </Box>
    )
}

export default PostList;
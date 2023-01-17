import React from 'react'
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';
import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';

const PostsExcerpt = ({ post }) => {
    return (
        <Box>
            <h2>Posts</h2>
            <Card border={"2px solid black"} >
                <CardHeader>
                    <h3>
                        <PostAuthor userId={post.user} />
                        <TimeAgo timestamp={post.date} />
                    </h3>
                    <h3>{post.title}</h3>
                </CardHeader>
                <CardBody>
                    <p>
                        {post.content}
                    </p>
                    <ReactionButtons post={post} />
                </CardBody>
            </Card>

        </Box>
    )
}

export default PostsExcerpt
import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';


const PostAuthor = ({ userId }) => {
    const Users = useSelector(selectAllUsers);
    const author = Users.find((user) => user.id === userId);
    return (
        <div>By {author ? author.name : 'Unknown author'}
        </div>
    )
}
export default PostAuthor;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';

import { postAdded } from "./postsSlice";
import PostList from "./PostList";
import { selectAllUsers } from "../users/usersSlice";
import { addNewPost } from "./postsSlice";

const AddPost = () => {
    const dispatch = useDispatch();

    const [title, Settitle] = useState('');
    const [content, Setcontent] = useState('');
    const [userId, SetuserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => Settitle(e.target.value);
    const onContentChanged = (e) => Setcontent(e.target.value);
    const onAuthorChanged = (e) => SetuserId(e.target.value);


    // const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try{
                setAddRequestStatus('pending');
                dispatch(addNewPost({ title, body: content, userId })).unwrap();
                
                Settitle('');
                Setcontent('');
                SetuserId('');
            }
            catch (err) {
                console.error('Failed to save the post: ', err);
            }
            finally {
                setAddRequestStatus('idle');
            }
        }
    }


    return (
        <div>
            <div>AddPost</div>
            <form action="">
                <label htmlFor="postAuthor">Author: </label>
                <select name="postAuthor" id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
                <label htmlFor="postContent">Content: </label>
                <input type="text" id="postContent" name="postContent" value={content} onChange={onContentChanged} />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>


            </form>
            <PostList />
        </div>
    )
}

export default AddPost;
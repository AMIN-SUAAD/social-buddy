import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './PostDetail.css'
import DisplayComments from './DisplayComments';

const PostDetail = () => {
    const {id} = useParams();
    const [postDetail, setPostDetail] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPostDetail(data))

    }, [])
    
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))

    }, [])
    
    return (
        <div class = 'post-body'>
            <div id='body'>
            <h3>Post title: {postDetail.title}</h3>
            <p>Body: {postDetail.body}</p>
            </div>
            <h2 id='head'>Comments</h2>

{
                comments.map( comment => <DisplayComments comment={ comment }></DisplayComments>)
            }

        </div>
    );
};

export default PostDetail;
import React from 'react';
import './DisplayComment.css'
import photo from './1.jpg'

const DisplayComments = (props) => {
    return (
        <div class= 'comment'>

            <img id = 'img' src={photo} alt=""/>
            <h3>Commenter: {props.comment.name} </h3>
    <p>Comment: {props.comment.body}</p>
        </div>
    );
};

export default DisplayComments;
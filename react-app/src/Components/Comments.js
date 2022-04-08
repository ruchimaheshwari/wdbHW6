import React, { useState, useEffect } from 'react';
import axios from "axios";

const Comments = ({existingComments, postId}) => {
    const [comment, setComment] = useState();
    
  
    const onSubmit = () => {
        const url = 'http://localhost:3002/post/' + postId + '/comment';
        const data = {"newComment": comment};

        axios
        .post(url, data) // `url` is the url to post to, `data` is the data to send in the body of the HTTP request
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    };

    return (
        <div>
            {/* {commentsList} */}
            {existingComments.map((item) => {
                return (
                    <p>{item}</p>
                )
            })}
            <div>            
                <input type="text" placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)}/>
            </div>
            <button style={{ marginTop: '4px'}} onClick={onSubmit}>
                Submit
            </button>
        </div>
    );

}


export default Comments;

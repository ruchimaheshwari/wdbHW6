import React, { useState, useEffect } from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import Comments from "./Comments";
import axios from "axios";

const Feed = () => {
  const [data, setData] = useState();

  const getPostsData = () => {
    axios
      .get('http://localhost:3002/posts') //THIS IS YOUR URL OF YOUR API
      .then((data) => setData(data.data)) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
      .catch((error) => console.log(error)); //ERROR CATCHING IN CASE WE RECEIVE AN ERROR
  };

  useEffect(() => {
    getPostsData();
  }, []);
  

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data?.map(d =>
          [<Post title={d.title} body={d.body} key={d.id} />,
          <Comments existingComments={d.comments} postId={d.id}/>]
        )
        
      }
      <br/>
      <br/>
      <br/>
      <h3>Make a New Post</h3>
      <p>After submitting, refresh to see your post on your feed!</p>
      <NewPost/>
    </div>
  )

}


export default Feed;

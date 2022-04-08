import {useState} from "react";
import axios from "axios";

const NewPost = () => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  
  const data = {"title": title, "id": id, "body": body};
  const url = 'http://localhost:3002/post';

  const onSubmit = () => {
    console.log({
      id,
      title,
      body
    })

    axios
    .post(url, data) // `url` is the url to post to, `data` is the data to send in the body of the HTTP request
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  }

  return <div>
    <div>
      <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button>
  </div>
}

export default NewPost;

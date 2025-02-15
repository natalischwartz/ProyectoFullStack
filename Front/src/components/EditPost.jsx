import axios from "axios";
import { useState, useEffect } from "react";
// console.log(useEffect)
import { useNavigate, useParams } from "react-router-dom";

const url = "http://localhost:8000/posts/";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  //procedimiento para editar un post

  const update = async (e) => {
    e.preventDefault();
    console.log("titulo editado", title)
    console.log("contenido editado", content)
    await axios.put(url + id, {
      title: title,
      content: content,
    });
    navigate("/");
  };

  //utilizo useEffect para traer el post cuando se renderiza el componente.
  useEffect(()=>{
    getPostById()
  },[])

  //procedimiento para traer un post por su id

  const getPostById = async () =>{
    const res = await axios.get(url+id)
    // console.log(res.data)

    // console.log(res.data.title) 
    // console.log(res.data.content)
    setTitle(res.data.title)
    setContent(res.data.content)
  }

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={update} className="container">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPost;

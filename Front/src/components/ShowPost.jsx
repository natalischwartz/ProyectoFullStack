import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Usar la variable de entorno para la URL del backend
const url = import.meta.env.VITE_API_BASE_URL + "/posts";
console.log(url)

const ShowPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get(url);// llamada al backend
    setPosts(res.data);
  };

  const deletePost = async (id) => {
    await axios.delete(`${url}/${id}`);
    getPosts()
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
            <div className="header-container d-flex justify-content-center align-items-center gap-2">
                <small>CREATE POST</small>
                <Link to="/create" className="btn btn-primary mt-2 mb-2">
                <i className="fas fa-plus"></i>
                </Link>
            </div>
          
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr className="data-content" key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.content}</td>
                  <td className="actions-content">
                    <Link to={`/edit/${post.id}`} className="btn btn-info">
                    <i className="fas fa-edit"></i>
                    </Link>
                    <button onClick={()=>{deletePost(post.id)}} className="btn btn-danger">
                        <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;

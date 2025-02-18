import axios from 'axios'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';

const url = "http://localhost:8000/posts";

const CreatePost = () =>{

    const [title, setTitle] = useState("");
    const [content, setContent] =useState("")

    const navigate = useNavigate()

    //procedimiento para crear un registro

    const create = async (e) =>{
        e.preventDefault()
        console.log("titulo ingresado",title)
        console.log("contenido ingresado", content)
        await axios.post(url,{
            title: title,
            content: content
        })
        navigate("/")
        
    }

    return(
        <div>
            <h1>Crear Post</h1>
            <form onSubmit={create} className='container'>
                <div className="mb-3">
                    <label className='form-label'>Title</label>
                    <input type="text" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className='form-control'
                    
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Content</label>
                    <input type="text" 
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    className='form-control'
                    
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Create</button>

            </form>
        </div>
    )

}

export default CreatePost;
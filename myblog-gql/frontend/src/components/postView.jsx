import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../api'
import '../assets/stylesheets/styles.css'
import CommentBox from './commentbox';

export default function PostView() {
    const [data,setData]=useState({ tags:[]});
    const {id}= useParams();
    useEffect(()=>{
        const fetchPost = async () => {
            try {
              console.log('id',id)
              const response = await api.get(`/posts/${id}`); 
              console.log(response.data)
              setData(response.data[0]);
              
            } catch (err) {
             console.log('error',err);
            }
          };
          fetchPost();
    },[id])
  return (
    <><div className='blogpost'>
          <h3>{data.title}</h3>
          <p>By {data.author} | {new Date(data.createdAt).toLocaleDateString()}</p>
          <p>
            tags:
          {data.tags && data.tags.map((tag, index) => (
            <span key={index}>
              {tag}{index < data.tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
          <img className='post-view' src={'http://localhost:3001/'+data.imageUrl} alt='image about ' />
          <p style={{ whiteSpace: "pre-line", textAlign:'justify'}}>{data.content}</p>


      </div><div>
              <CommentBox postId={id}/>
          </div></>
  )
}

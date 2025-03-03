import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../api'
import '../assets/stylesheets/styles.css'
import CommentBox from './commentbox';

export default function PostView() {
    const [data,setData]=useState({});
    const {id}= useParams();
    useEffect(()=>{
        const fetchPost = async () => {
            try {
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
          <p>{data.tags}</p>
          <img src={'http://localhost:3000/'+data.imageUrl} alt='image about ' />
          <p>{data.content}</p>


      </div><div>
              <CommentBox postId={id}/>
          </div></>
  )
}

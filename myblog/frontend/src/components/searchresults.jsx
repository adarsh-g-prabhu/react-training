import { useState, useEffect } from "react";
import { useSearchParams ,Link} from "react-router-dom";
import api from "../api";
import SearchPosts from "./searchPosts";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            console.log(query);
            try{
            if (query)
            {
                const response = await api.get(`/search?query=${query}`)
                setPosts(response.data);
            }
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        fetchResults();
    }, [query]);
    console.log(posts)
    return (
        <div>
            <SearchPosts/>

            <h2>Search Results for  {query} ....</h2>
            {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>
              By {post.author} | {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <p>{post.content.substring(0, 150)}...</p>
            <Link to={`/posts/${post._id}`}>Read More</Link>
          </div>
        ))
                
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResults;

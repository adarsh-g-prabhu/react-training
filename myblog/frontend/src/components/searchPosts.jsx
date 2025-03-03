import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPosts = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?query=${query}`);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search Posts"  value={query} 
            onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchPosts;

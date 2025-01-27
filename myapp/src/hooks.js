import useFetch from "./custom";

export default function Hooks()
{
const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/users");

if (error) return <h1>Fetch Errror </h1>
if(loading) return <h1>Loading</h1>
if (!data || !Array.isArray(data)) return <div>No data available</div>;
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {console.log(user.name)}
          </li>
        ))}
      </ul>
    </div>
  );
};


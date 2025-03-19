
import { Link} from 'react-router-dom'


export default function Admindashboard() {
  return (
    <div>
        <h1>
            Admin Dashboard
        </h1>
        <Link to='/admin/viewUsers'>View Users</Link>
    </div>
  )
}

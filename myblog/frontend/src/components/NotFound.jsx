import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-message">
        Oops! We can`t seem to find the page you`re looking for.
      </p>
      <Link to="/" className="notfound-home-btn">
        Go Home
      </Link>
    </div>
  );
}

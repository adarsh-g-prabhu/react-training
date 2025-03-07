
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesnt exist or has been moved.</p>
      <Link href="/">
        Go back home
      </Link>
    </div>
  );
}
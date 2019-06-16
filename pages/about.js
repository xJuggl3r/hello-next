// This is the Link API
import Link from 'next/link';

export default function About() {
    return (
      <div>
        <Link href="/index">
        <a title="Home Page">Home Page</a>
        </Link>
        <h1 >Once upon a time</h1>
        <p>There was an app...</p>
      </div>
    );
  }
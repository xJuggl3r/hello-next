// This is the Link API
import Link from 'next/link';

const Index = () => (
    <div>
      <Link href="/about">
      <a title="About Page">About Page</a>
      </Link>
      <p>Hello Next.js</p>
      <p> My first Next app... we'll keep on editing it 😉</p>
    </div>
  );
  
  export default Index;
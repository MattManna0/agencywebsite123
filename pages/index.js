import Link from 'next/link'

function HomePage() {
   return (
      <>
         <div>Welcome to Next.js!</div>
         <Link href="/first"><a>First Post</a></Link>
      </>	    
   )
}

export default HomePage


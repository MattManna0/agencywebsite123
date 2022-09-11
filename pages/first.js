import Link from 'next/link'

export default function FirstPost() {
   return (
      <>
         <h1>My First Post</h1>
         <h2>
            <Link href="/">
               <a className="link">Home</a>
            </Link>
            <div>
                <img src="https://cdn.discordapp.com/attachments/1007356130638442577/1007356237333147648/unknown.png" sizes={100px}/>
            </div>
            <div>div 2</div>
         </h2>
         <br/>
      </>	  
   )
}
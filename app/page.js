
import { redirect } from "next/navigation"
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import Link from "next/link"


export default async function PageApp() {
    const session = await getServerSession(options)
    console.log('session main', session);
    {session ? redirect('/pokemon') : redirect('/api/auth/signin?callbackUrl=/server')}
    return(
        <div>
            <Link href={'/pokemon'}>
                <button>Navigate to Home Page</button>
            </Link>
            
        </div>
    )
}
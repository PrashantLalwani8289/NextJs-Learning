"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    {name : "Register", href: "/register"},
    {name : "Login", href: "/login"},
    {name : "forget-Password", href: "/forgetpassword"},
]

export default function Home (){
    const pathname = usePathname()
    return (
        <div>
            {navLinks.map(( link) => {

                const isActive = pathname.startsWith(link.href)
                return (
                    <Link href={link.href} key={link.name} className={isActive? "font-bold mr-4" : "mr-4"} >

                        {link.name}
                    </Link>
                )
            })}
        </div>
    )
}
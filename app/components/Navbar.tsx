import Link from "next/link";
import {type ReactNode} from "react";

type NavLinkProps = {
    href: string
    children: ReactNode
}

function NavLink(props: NavLinkProps) {
    return (
        <li className="hover:bg-slate-600 py-2 px-2">
            <Link href={props.href}>{props.children}</Link>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav className="bg-slate-600 text-slate-50 shadow-xl">
            <ul className="container mx-auto flex">
                <NavLink href="/">Accueil</NavLink>
                <NavLink href="/cv">CV</NavLink>
            </ul>
        </nav>
    );
}




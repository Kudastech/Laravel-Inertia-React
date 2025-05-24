import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="">
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/posts/create">
                        Create
                    </Link>
                    <Link className="nav-link" href="/contact">
                        Contact
                    </Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    );
}

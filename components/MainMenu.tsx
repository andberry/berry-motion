import Link from "next/link";
export const MainMenu = () => {
    return (
        <nav>
            <ul className="flex gap-6">
                <li>
                    <Link
                        href="/trentino"
                        className="hover:text-verb font-playfair"
                    >
                        Trentino
                    </Link>
                </li>
                <li>
                    <Link
                        href="/tuscany"
                        className="hover:text-verb font-playfair"
                    >
                        Tuscany
                    </Link>
                </li>
                <li>
                    <Link
                        href="/sicily"
                        className="hover:text-verb font-playfair"
                    >
                        Sicily
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

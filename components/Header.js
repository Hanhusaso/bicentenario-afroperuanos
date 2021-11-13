import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <Link href="/">
                        <a>
                            logo
                        </a>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>inicio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/recorrido">
                                <a>recorrido</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacto">
                                <a>contacto</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

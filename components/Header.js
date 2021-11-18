import React from 'react'
import Link from 'next/link'
import { Element } from 'react-scroll'

export default function Header() {
    return (
        <>
            <Element name="header">
                <header>
                        <div>
                            <Link href="/">
                                <a className="wrapperLogo">
                                    <div className="title-page home">
                                        <img className="text-1" src="/img/svg/LOGO/DISCURSOS VISUALES.svg" alt="discursos visuales" />
                                        <div className="wrapper-arrow-text">
                                            <img className="flechas" src="/img/svg/HOME/flechas blancas.svg" alt="flechas" />
                                            <img className="w-100" src="/img/svg/LOGO/SOBRE LO.svg" alt="sobre lo" />
                                        </div>
                                        <img className="text-2" src="/img/svg/LOGO/AFROPERUANO.svg" alt="afroperuano" />
                                    </div>
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
            </Element>
        </>
    )
}

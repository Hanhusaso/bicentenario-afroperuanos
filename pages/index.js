import Layout from "../components/Layout";
import ButtonMove from "../components/ButtonMove";
import styles from "./index.module.scss"
import { Link, Element } from 'react-scroll'
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <Layout title="Inicio">
                <section className={styles.home1}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div></div>
                        <div className="d-flex align-items-center">
                            <div>
                                <div className="mb-5">
                                    <img className="img-fluid w-100" src="/img/home/discursos visuales.jpg" alt="discursos visuales" />
                                </div>
                                <div>
                                    <div className="mb-5">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa deserunt magni rem libero, quod at nihil tempore debitis, architecto odit aut modi reiciendis fuga iusto aperiam temporibus? Ut, esse.
                                        Maiores aut debitis corrupti repellendus soluta deserunt, quaerat fugiat rem vero aliquid aspernatur placeat impedit deleniti tempore ullam beatae nostrum aperiam, laborum repellat, sint praesentium? Debitis quibusdam nisi tenetur delectus.</p>
                                    </div>
                                    <div className="ms-3">
                                        <div className="mb-3">
                                            <BsShare className="icon share-icon me-2" />
                                            <span>COMPARTIR</span>
                                        </div>
                                        <div>
                                            <a className="d-inline-block color-inherit me-1" href="#">
                                                <FaWhatsapp className="icon" />
                                            </a>
                                            <a className="d-inline-block color-inherit me-1" href="">
                                                <FaFacebookF className="icon" />
                                            </a>
                                            <a className="d-inline-block color-inherit me-2" href="">
                                                <FaInstagram className="icon" />
                                            </a>
                                            <a className="d-inline-block color-inherit me-2" href="">
                                                <FaTwitter className="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Link activeClass="active" className="menuPrincipal" to="menuPrincipal" smooth={true} duration={200}>
                                        <ButtonMove dir="down"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="img-fluid logo-bicentenario" src="/img/LOGO HORIZONTAL PEB.png" alt="bicentenario peru" />
                        </div>
                    </div>
                </section>
                <section className={styles.home2}>
                    <Element className="h-100" name="menuPrincipal">
                        <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                            <div className="d-flex align-items-center">
                                <Link activeClass="active" className="header pointer d-flex align-items-center" to="header" smooth={true} duration={200}>
                                    <div className="me-2 d-inline">
                                        <ButtonMove dir="up"/>
                                    </div>
                                    <span className="fw-500 text-uppercase">INICIO</span>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className={`${styles.grid}`}>
                                    <div className="pt-4">
                                        <div className="mb-5">
                                            <div className="titleMenu fw-500 text-uppercase mb-4">DISCURSOS VISUALES SOBRE LO AFROPERUANO</div>
                                            <div>
                                                <p>Explora y disfruta la exposición
                                                desde sus ejes temáticos n
                                                vulputate velit esse molestie
                                                consequat, vel illum dolore eu
                                                feugiat nulla facilisis at vero eros et
                                                accumsan et iust</p>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <div className="titleMenu fw-500 text-uppercase">INTRODUCCIÓN</div>
                                        </div>
                                        <div className="mb-5">
                                            <div className="titleMenu fw-500 text-uppercase">
                                                ACTIVIDADES
                                                <br />
                                                PARALELAS
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <div className="titleMenu fw-500 text-uppercase">CRÉDITOS</div>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </Element>
                </section>
                <section className={styles.home3}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div className="d-flex align-items-center">
                            <Link activeClass="active" className="header pointer d-flex align-items-center" to="menuPrincipal" smooth={true} duration={200}>
                                <div className="me-2 d-inline">
                                    <ButtonMove dir="up"/>
                                </div>
                                <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                            </Link>
                        </div>
                        <div className="d-flex align-items-center">
                            <div>
                                <div className="titleHome text-uppercase mb-4">INTRODUCCIÓN</div>
                                <div>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi alias sapiente, incidunt vitae laboriosam reprehenderit! Repellat alias sit deserunt porro nam, voluptates odio! Vel quaerat rem error laboriosam quis assumenda.
                                    Ullam eaque, illo magnam facilis cum officia! Aliquam, esse. Animi dignissimos expedita laborum rem repellat voluptatibus labore neque maxime ex perferendis, quasi corporis nulla molestiae cum magni porro tempora consequuntur!
                                    Et dolore, labore culpa quas perspiciatis voluptatum harum soluta fuga porro dicta id consectetur laboriosam, inventore, quam eaque? Vel quod quibusdam libero quos? Dicta enim expedita, cumque libero ea suscipit.
                                    Totam sequi hic quisquam, unde minus nam impedit. Optio maxime porro dicta magnam natus quasi, voluptatem nihil exercitationem. Eligendi esse inventore debitis vitae delectus sit nostrum quos omnis amet corrupti!
                                    Eum quae ea consequuntur officiis quia tenetur eius esse ad placeat temporibus veritatis reprehenderit dolores, id molestiae odio dolorum dolorem dolor alias, voluptatem hic maxime. Officiis, repellat voluptatum. Nemo, vitae?
                                    Sunt, nostrum consectetur vero deleniti inventore repellendus repudiandae tenetur corrupti deserunt eum sapiente reprehenderit amet sequi ipsam! In, error numquam delectus dolores temporibus praesentium ea dicta obcaecati, ducimus accusantium doloribus!
                                    Impedit, alias fugit. Velit nemo dolore consequuntur ipsam eum, ullam voluptates, necessitatibus fuga a tempore ipsa provident minima quas, laboriosam sed pariatur accusamus vitae. Ullam pariatur molestias minus voluptate velit.
                                    Corrupti, odit sed consectetur nemo perferendis voluptatibus ullam illo ratione exercitationem nulla, fugiat recusandae quisquam labore iusto est suscipit voluptatum eaque impedit cupiditate hic. Hic rerum aut delectus minus exercitationem.
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.home4}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div className="d-flex align-items-center">
                            <Link activeClass="active" className="header pointer d-flex align-items-center" to="menuPrincipal" smooth={true} duration={200}>
                                <div className="me-2 d-inline">
                                    <ButtonMove dir="up"/>
                                </div>
                                <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                            </Link>
                        </div>
                        <div>
                            <div className="titleHome text-uppercase mb-4">
                                ACTIVIDADES
                                <br />
                                PARALELAS
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.home5}>
                <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                    <div className="d-flex align-items-center">
                        <Link activeClass="active" className="header pointer d-flex align-items-center" to="menuPrincipal" smooth={true} duration={200}>
                            <div className="me-2 d-inline">
                                <ButtonMove dir="up"/>
                            </div>
                            <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                        </Link>
                    </div>
                    <div>
                        <div className="titleHome text-uppercase mb-5">CRÉDITOS</div>
                        <div className={`${styles.grid}`}>
                            <div>
                                <div className="mb-3">
                                    <div className="fw-700">Curaduría:</div>
                                    <p className="mb-0">Roger A. Cáceres Atocha</p>
                                    <p className="mb-0">Flor de María Godo</p>
                                </div>
                                <div className="mb-3">
                                    <div className="fw-700">Diseño:</div>
                                    <p className="mb-0">Judith León</p>
                                </div>
                                <div className="mb-3">
                                    <div className="fw-700">Programación:</div>
                                    <p className="mb-0">Luis Castillo</p>
                                </div>
                                <div className="mb-3">
                                    <div className="fw-700">Revisión de textos y traducción:</div>
                                    <p className="mb-0">Daniel Rodríguez</p>
                                </div>
                                <div className="mb-3">
                                    <div className="fw-700">Lenguaje de señas:</div>
                                    <p className="mb-0">XXXXXXXX XXXXXX</p>
                                </div>
                                <div className="mb-3">
                                    <div className="fw-700">Edición de video:</div>
                                    <p className="mb-0">Jesús Ramírez</p>
                                </div>
                            </div>
                            <div>
                            <div className="mb-3">
                                    <div className="fw-700 mb-3">AGRADECIMIENTOS</div>
                                    <p className="mb-0">Martín Alvarado</p>
                                    <p className="mb-0">Maribel Arrelucea</p>
                                    <p className="mb-0">Sandy Arrué</p>
                                    <p className="mb-0">Sofía Carrillo</p>
                                    <p className="mb-0">Carlos Estela</p>
                                    <p className="mb-0">Jonathan Garbay</p>
                                    <p className="mb-0">Daniel Giannoni</p>
                                    <p className="mb-0">Newton Mori</p>
                                    <p className="mb-0">Luis Muro</p>
                                    <p className="mb-0">Patricia Soto</p>
                                    <p className="mb-0">Lorry Salcedo</p>
                                    <p className="mb-0">Sofía Pachas</p>
                                    <p className="mb-0">Ricardo XXXXX (transporte)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
                </section>
            </Layout>
        </>
    )
}
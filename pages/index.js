import LayoutHome from "../components/LayoutHome";
import ButtonMove from "../components/ButtonMove";
import styles from "./index.module.scss"
import Link from 'next/link'
import { Link as LinkScroll, Element } from 'react-scroll'
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <LayoutHome title="Inicio" path="/" description="En el marco de la celebración del Bicentenario de la independencia del Perú es imperativo el reconocimiento y puesta en valor de la riqueza étnica y multicultural que conforma la república, elementos fundamentales para la construcción de la identidad peruana. Una de las poblaciones que ha contribuido a la edificación del imaginario nacional, con su legado, resiliencia y acervo, es la afroperuana, y, sin embargo, a lo largo de la historia su presencia ha sido valorada de forma desigual e incluso invisibilizada. En ese sentido, esta exposición promueve la reflexión en torno a la representación visual de la comunidad afrodescendiente al reunir una selección de fotografías que constituyen tres registros elaborados en diferentes épocas de nuestra historia republicana: los retratos de amas afroperuanas del Estudio Courret realizadas entre 1879 y 1912, los retratos de Lorry Salcedo Mitrani sobre la comunidad de El Carmen, Chincha, entre 1985 y 1996, y el proyecto DÍA 100 de Martín Alvarado Gamarra, la compilación más extensa de retratos de afroperuanos.">
                <section className={styles.home1}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div></div>
                        <div className="d-flex align-items-center">
                            <div>
                                <div className="title-page home mb-5 fw-600">
                                    <img className="text-1" src="/img/svg/HOME/DISCURSOS VISUALES.svg" alt="discursos visuales" />
                                    <div className="wrapper-arrow-text">
                                        <img className="flechas" src="/img/svg/HOME/flechas blancas.svg" alt="flechas" />
                                        <img className="w-100" src="/img/svg/HOME/SOBRE LO.svg" alt="sobre lo" />
                                    </div>
                                    <img className="text-2" src="/img/svg/HOME/AFROPERUANO.svg" alt="afroperuano" />
                                </div>
                                <div>
                                    <div className="mb-5">
                                        <p className="mb-0"><b>En el marco de la celebración del Bicentenario de la independencia del Perú</b> es imperativo el reconocimiento y puesta en valor de la riqueza étnica y multicultural que conforma la república, elementos fundamentales para la construcción de la identidad peruana. Una de las poblaciones que ha contribuido a la edificación del imaginario nacional, con su legado, resiliencia y acervo, es la afroperuana, y, sin embargo, a lo largo de la historia su presencia ha sido valorada de forma desigual e incluso invisibilizada. En ese sentido, esta exposición promueve la reflexión en torno a la representación visual de la comunidad afrodescendiente al reunir una selección de fotografías que constituyen tres registros elaborados en diferentes épocas de nuestra historia republicana: los retratos de amas afroperuanas del Estudio Courret realizadas entre 1879 y 1912, los retratos de Lorry Salcedo Mitrani sobre la comunidad de El Carmen, Chincha, entre 1985 y 1996, y el proyecto DÍA 100 de Martín Alvarado Gamarra, la compilación más extensa de retratos de afroperuanos.</p>
                                        <p>La exhibición en conjunto de las imágenes de estos archivos fotográficos, propone visibilizar las condiciones históricas y socioculturales de los afrodescendientes en nuestro país, pensar sobre nuestras diferencias y evaluar nuestro pasado y presente. Creemos en la posibilidad de un futuro común que integre plenamente a la comunidad afroperuana, valore su presencia y preserve su herencia, identidad y riqueza cultural. De igual manera, los videos de la sección actividades complementarias están orientados a contextualizar sobre su historia, problemática y agencia, propiciando una reflexión crítica.</p>
                                    </div>
                                    <div className="d-inline-flex flex-column align-items-center ms-3">
                                        <div className="mb-3">
                                            <BsShare className="icon share-icon me-2" />
                                            <span>COMPARTIR</span>
                                        </div>
                                        <div>
                                            <a href="whatsapp://send?text=https://bicentenario-afroperuanos.vercel.app/" data-action="share/whatsapp/share" className="d-inline-block color-inherit me-1">
                                                <FaWhatsapp className="icon" />
                                            </a>
                                            <a target="_blank" rel="noreferrer" href="http://www.facebook.com/sharer.php?u=https://bicentenario-afroperuanos.vercel.app/&quote=" className="d-inline-block color-inherit me-1">
                                                <FaFacebookF className="icon" />
                                            </a>
                                            {/* <a className="d-inline-block color-inherit me-2" href="">
                                                <FaInstagram className="icon" />
                                            </a> */}
                                            <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?text=https://bicentenario-afroperuanos.vercel.app/" className="d-inline-block color-inherit me-2">
                                                <FaTwitter className="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <LinkScroll activeClass="active" className="" to="menuPrincipal" smooth={true} duration={200}>
                                        <ButtonMove dir="down"/>
                                    </LinkScroll>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className={`${styles.logoBicentenario} ${"img-fluid"}`} src="/img/LOGO HORIZONTAL PEB.png" alt="bicentenario peru" />
                        </div>
                    </div>
                </section>
                <section className={styles.home2}>
                    <Element id="menuPrincipal" className={`${styles.element2}`} name="menuPrincipal">
                        <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                            <div className="d-none d-md-flex align-items-center">
                                <LinkScroll activeClass="active" className="pointer d-flex align-items-center" to="header" smooth={true} duration={200}>
                                    <div className="me-2 d-inline">
                                        <ButtonMove dir="up"/>
                                    </div>
                                    <span className="fw-500 text-uppercase">INICIO</span>
                                </LinkScroll>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className={`${styles.grid}`}>
                                    <div className="pt-4">
                                        <div className="mb-5">
                                            {/* <div className="titleMenu fw-500 text-uppercase mb-4">DISCURSOS VISUALES SOBRE LO AFROPERUANO</div> */}
                                            <div className="title-page titleMenu home pb-3 mb-4">
                                                <img className="text-1" src="/img/svg/LOGO/DISCURSOS VISUALES.svg" alt="discursos visuales" />
                                                <div className="wrapper-arrow-text">
                                                    <img className="flechas" src="/img/svg/HOME/flechas blancas.svg" alt="flechas" />
                                                    <img className="w-100" src="/img/svg/LOGO/SOBRE LO.svg" alt="sobre lo" />
                                                </div>
                                                <img className="text-2" src="/img/svg/LOGO/AFROPERUANO.svg" alt="afroperuano" />
                                            </div>
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
                                            <LinkScroll activeClass="active" className="pointer" to="introduccion" smooth={true} duration={200}>
                                                <div className="titleMenu fw-500 text-uppercase">INTRODUCCIÓN</div>
                                            </LinkScroll>
                                        </div>
                                        <div className="mb-5">
                                            <LinkScroll activeClass="active" className="pointer" to="actividadesParalelas" smooth={true} duration={200}>
                                                <div className="titleMenu fw-500 text-uppercase">
                                                    ACTIVIDADES
                                                    <br />
                                                    PARALELAS
                                                </div>
                                            </LinkScroll>
                                        </div>
                                        <div className="mb-5">
                                            <LinkScroll activeClass="active" className="pointer" to="creditos" smooth={true} duration={200}>
                                                <div className="titleMenu fw-500 text-uppercase">CRÉDITOS</div>
                                            </LinkScroll>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div>
                                            <div className={`${styles.menuGrid} ${"menuGrid"}`}>
                                                <div className={`${styles.ama} ${""}`}>
                                                    <Link href="./amas-de-leche">
                                                        <a className={`${styles.wrapperCaption1} ${"wrapperCaptionMenu"}`}>
                                                            <img className="img-fluid" src="/img/menu/ama_leche.jpg" alt="" />
                                                            <div className={`${styles.caption} ${"caption"}`}>
                                                                <p className="mb-0">
                                                                    AMAS DE LECHE
                                                                    <br />
                                                                    DE LA COLECCIÓN
                                                                    <br />
                                                                    COURRET
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className={`${styles.lorry} ${""}`}>
                                                    <Link href="./lorry-salcedo">
                                                        <a className={`${styles.wrapperCaption2} ${"wrapperCaptionMenu"}`}>
                                                            <img className="img-fluid" src="/img/menu/lorry.jpg" alt="" />
                                                            <div className={`${styles.caption} ${"caption"}`}>
                                                                <p className="mb-0">
                                                                    LORRY
                                                                    <br />
                                                                    SALCEDO
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className={`${styles.martin} ${""}`}>
                                                    <Link href="./martin-alvarado">
                                                        <a className={`${styles.wrapperCaption3} ${"wrapperCaptionMenu"}`}>
                                                            <img className="img-fluid" src="/img/menu/martin.jpg" alt="" />
                                                            <div className={`${styles.caption} ${"caption"}`}>
                                                                <p className="mb-0">
                                                                    MARTÍN
                                                                    <br />
                                                                    ALVARADO
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </Element>
                </section>
                <section className={styles.home3}>
                    <Element className={`${styles.element3}`} name="introduccion">
                        <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                            <div className={`${styles.linkMenu} ${"linkMenu d-none d-md-flex align-items-center"}`}>
                                <LinkScroll activeClass="active" className="pointer d-flex align-items-center" to="menuPrincipal" smooth={true} duration={200}>
                                    <div className="me-2 d-inline">
                                        <ButtonMove dir="up"/>
                                    </div>
                                    <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                                </LinkScroll>
                            </div>
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="titleHome text-uppercase mb-1">INTRODUCCIÓN</div>
                                    <div className="mb-5">
                                        <img className="underline-arrows" src="/img/svg/flechas_blancas(25).svg" alt="" />
                                    </div>
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
                    </Element>
                </section>
                <section className={styles.home4}>
                    <Element className={`${styles.element4}`} name="actividadesParalelas">
                        <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                            <div className="">
                                <LinkScroll activeClass="active" className={`${styles.linkMenu} ${"pointer d-none d-md-flex align-items-center"}`} to="menuPrincipal" smooth={true} duration={200}>
                                    <div className="me-2 d-inline">
                                        <ButtonMove dir="up"/>
                                    </div>
                                    <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                                </LinkScroll>
                            </div>
                            <div>
                                <div className="titleHome text-uppercase mb-1">
                                    ACTIVIDADES
                                    <br />
                                    PARALELAS
                                </div>
                                <div className="mb-5">
                                    <img className="underline-arrows" src="/img/svg/flechas_rosas(25).svg" alt="" />
                                </div>
                                <div className={`${styles.containerVideos} ${"containerVideos"}`}>
                                    <div className={`${styles.video1} ${"wrapperVideo mb-5"}`}>
                                        <video className="w-100" src="/video/video afro.mp4" controls></video>
                                        <div className={`${styles.infoVideo} ${"infoVideo"}`}>
                                            <div className={`${styles.mirar} ${"mirar"}`}>Mirar en</div>
                                            <div className={`${styles.titulo} ${"titulo"}`}>Conferencia de Maribel Arrelucea - “Título im ad minim veniam, quis nostrud exerci t”</div>
                                            <div className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat ducimus doloribus nesciunt sed corporis, laudantium vel distinctio incidunt labore quam in tempore ipsum dolorem dolores, explicabo voluptatem deserunt possimus!</div>
                                        </div>
                                    </div>
                                    <div className={`${styles.video2} ${"wrapperVideo mb-5"}`}>
                                        <video className="w-100" src="/video/video afro.mp4" controls></video>
                                        <div className={`${styles.infoVideo} ${"infoVideo"}`}>
                                            <div className={`${styles.mirar} ${"mirar"}`}>Mirar en</div>
                                            <div className={`${styles.titulo} ${"titulo"}`}>Conferencia de Maribel Arrelucea - “Título im ad minim veniam, quis nostrud exerci t”</div>
                                            <div className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat ducimus doloribus nesciunt sed corporis, laudantium vel distinctio incidunt labore quam in tempore ipsum dolorem dolores, explicabo voluptatem deserunt possimus!</div>
                                        </div>
                                    </div>
                                    <div className={`${styles.video3} ${"wrapperVideo mb-5"}`}>
                                        <video className="w-100" src="/video/video afro.mp4" controls></video>
                                        <div className={`${styles.infoVideo} ${"infoVideo"}`}>
                                            <div className={`${styles.mirar} ${"mirar"}`}>Mirar en</div>
                                            <div className={`${styles.titulo} ${"titulo"}`}>Conferencia de Maribel Arrelucea - “Título im ad minim veniam, quis nostrud exerci t”</div>
                                            <div className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat ducimus doloribus nesciunt sed corporis, laudantium vel distinctio incidunt labore quam in tempore ipsum dolorem dolores, explicabo voluptatem deserunt possimus!</div>
                                        </div>
                                    </div>
                                    <div className={`${styles.video4} ${"wrapperVideo mb-5"}`}>
                                        <video className="w-100" src="/video/video afro.mp4" controls></video>
                                        <div className={`${styles.infoVideo} ${"infoVideo"}`}>
                                            <div className={`${styles.mirar} ${"mirar"}`}>Mirar en</div>
                                            <div className={`${styles.titulo} ${"titulo"}`}>Conferencia de Maribel Arrelucea - “Título im ad minim veniam, quis nostrud exerci t”</div>
                                            <div className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat ducimus doloribus nesciunt sed corporis, laudantium vel distinctio incidunt labore quam in tempore ipsum dolorem dolores, explicabo voluptatem deserunt possimus!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </Element>
                </section>
                <section className={styles.home5}>
                <Element className={`${styles.element5}`} name="creditos">
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div className="d-none d-md-flex align-items-center">
                            <LinkScroll activeClass="active" className="pointer d-flex align-items-center" to="menuPrincipal" smooth={true} duration={200}>
                                <div className="me-2 d-inline">
                                    <ButtonMove dir="up"/>
                                </div>
                                <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                            </LinkScroll>
                        </div>
                        <div>
                            <div className="titleHome text-uppercase mb-1">CRÉDITOS</div>
                            <div className="mb-5">
                                <img className="underline-arrows" src="/img/svg/flechas_azules(25).svg" alt="" />
                            </div>
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
                                        <div className="fw-700">Teach lead:</div>
                                        <p className="mb-0">Luis Castillo</p>
                                    </div>
                                    <div className="mb-3">
                                        <div className="fw-700">Web developer:</div>
                                        <p className="mb-0">Hans Huiza</p>
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
                </Element>
                </section>
            </LayoutHome>
        </>
    )
}
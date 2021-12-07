import Layout from "../../components/Layout"
import styles from "./lorry-salcedo.module.scss"
import ButtonMove from "../../components/ButtonMove"
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import { Link as LinkScroll, Element } from 'react-scroll'
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function index() {
    return (
        <>
            <Layout title="Lorry Salcedo" path="/lorry-salcedo" description="A mediados de los años ochenta del siglo pasado, Lorry Salcedo Mitrani convirtió la vida del distrito de El Carmen, de la provincia de Chincha en la región Ica, en el motivo central de su quehacer fotográfico. Su producción artística puede interpretarse tanto como un registro documental o como una aproximación intrínseca a la vitalidad de los integrantes de la comunidad, la que inicialmente se centraba en la familia Ballumbrosio. Además del valor histórico y estético, las imágenes de El Carmen entre 1985 y 1996, son una exploración de gran carga simbólica sobre la cotidianidad, la rutina, el trabajo, las celebraciones o la música.">
                <section className={styles.section1}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div className={`${styles.linkMenu} ${"d-none d-md-flex flex-column align-items-start justify-content-center ps-0 ps-xl-5"}`}>
                            <Link href="./#menuPrincipal">
                                <a className="d-inline-flex flex-column align-items-center mb-5 color-inherit">
                                    <div className="mb-2">
                                        <ButtonMove dir="up"/>
                                    </div>
                                    <p className="mb-0">MENÚ PRINCIPAL</p>
                                </a>
                            </Link>
                            <div className="black-text d-inline-flex flex-column align-items-center">
                                <div className="mb-3">
                                    <BsShare className="icon share-icon me-2" />
                                    <span>COMPARTIR</span>
                                </div>
                                <div>
                                    <a href="whatsapp://send?text=https://bicentenario-afroperuanos.vercel.app/lorry-salcedo" data-action="share/whatsapp/share" className="d-inline-block color-inherit me-1">
                                        <FaWhatsapp className="icon" />
                                    </a>
                                    <a target="_blank" href="http://www.facebook.com/sharer.php?u=https://bicentenario-afroperuanos.vercel.app/lorry-salcedo&quote=" className="d-inline-block color-inherit me-1">
                                        <FaFacebookF className="icon" />
                                    </a>
                                    {/* <a className="d-inline-block color-inherit me-2" href="">
                                        <FaInstagram className="icon" />
                                    </a> */}
                                    <a target="_blank" href="https://twitter.com/intent/tweet?text=https://bicentenario-afroperuanos.vercel.app/lorry-salcedo" className="d-inline-block color-inherit me-2">
                                        <FaTwitter className="icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className={`${styles.grid1} ${"grid1"}`}>
                                <div>
                                    <div className="title-page lorry mb-5 fw-600">
                                        <img loading="lazy" className="text-1" src="/img/svg/LORRY SALCEDO/LORRY.svg" alt="lorry" />
                                        <div className="wrapper-arrow-text">
                                            <img loading="lazy" className="flechas" src="/img/svg/LORRY SALCEDO/flechas_moradas(31).svg" alt="flechas" />
                                            {/* <img loading="lazy" className="w-100" src="/img/svg/LORRY SALCEDO/DE LA.svg" alt="de la" /> */}
                                        </div>
                                        <img loading="lazy" className="text-2" src="/img/svg/LORRY SALCEDO/SALCEDO.svg" alt="salcedo" />
                                    </div>
                                    <div className={`${styles.gridDescImg} ${"gridDescImg"}`}>
                                        <div className={`${styles.partText} ${"partText"}`}>
                                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi blanditiis maxime? Molestiae non voluptatem eum nisi perferendis perspiciatis sed aliquid praesentium quidem fuga sint aperiam reprehenderit architecto, dicta inventore.
                                            Dicta, atque, fuga eligendi quo culpa iste corporis consequuntur rerum amet quia necessitatibus aliquam consectetur quos vitae repellat officia, omnis alias. Quis molestiae harum iure optio, provident sit iusto dolorem.
                                            Eveniet omnis dignissimos doloremque et cum excepturi?</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                        <img loading="lazy" className="img-fluid" src="/img/amas/inicio_amas.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="linkDown">
                                <LinkScroll activeClass="active" className="" to="section2" smooth={true} duration={200}>
                                    <ButtonMove dir="down"/>
                                </LinkScroll>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.section2}>
                    <Element name="section2">
                        <div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
                            <div className={`${styles.linkMenu} ${"d-none d-md-block ps-0 ps-xl-5"}`}>
                                <Link href="./#menuPrincipal">
                                    <a className={`${styles.linkMenu} ${"d-inline-flex flex-column align-items-center color-inherit"}`}>
                                        <div className="mb-2">
                                            <ButtonMove dir="up"/>
                                        </div>
                                        <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                    <img loading="lazy" className="arrow left" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                    <p className="mb-0">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                    </p>
                                    <img loading="lazy" className="arrow right" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-alto.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            Bailando El Alcatraz
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-alto.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            Bailando durante la yunza
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-ancho.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            José bailando
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                    <img loading="lazy" className="arrow left" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                    <p className="mb-0">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                    </p>
                                    <img loading="lazy" className="arrow right" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-ancho.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            Filomeno tocando para el vecino
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-ancho.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            Filomeno tocando cajón
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-ancho.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            Manos sobre la tumba
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                    <img loading="img-fluid lazy" className="arrow left" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                    <p className="mb-0">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                    </p>
                                    <img loading="lazy" className="arrow right" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-ancho.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            Paseando al Santo de día
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-alto.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            Rezando a la virgen
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                    <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-alto.jpg" alt="" />
                                    <div>
                                        <p className="captionInfo mb-0">
                                            Jugando en el cementario
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </Element>
                </section>
                <section className={styles.section3}>
                    <div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
                        <div className={`${styles.linkMenu} ${"d-none d-md-block ps-0 ps-xl-5"}`}>
                            <Link href="./#menuPrincipal">
                                <a className={`${styles.linkMenu} ${"d-inline-flex flex-column align-items-center color-inherit"}`}>
                                    <div className="mb-2">
                                        <ButtonMove dir="up"/>
                                    </div>
                                    <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                <img loading="lazy" className="arrow left" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                <p className="mb-0">
                                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                </p>
                                <img loading="lazy" className="arrow right" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                            </div>
                            <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-ancho.jpg" alt="" />
                                <div>
                                    <p className="captionInfo mb-0">
                                        Susana Baca
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-alto.jpg" alt="" />
                                <div>
                                    <p className="captionInfo mb-0">
                                        Músico Amador Balllumbrosio
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                <img loading="lazy" className="arrow left" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                <p className="mb-0">
                                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                </p>
                                <img loading="lazy" className="arrow right" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                            </div>
                            <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-alto.jpg" alt="" />
                                <div>
                                    <p className="captionInfo mb-0">
                                        Señora Cueto con futbolista
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.section4}>
                    <div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
                        <div className={`${styles.linkMenu} ${"d-none d-md-block ps-0 ps-xl-5"}`}>
                            <Link href="./#menuPrincipal">
                                <a className={`${styles.linkMenu} ${"d-inline-flex flex-column align-items-center color-inherit"}`}>
                                    <div className="mb-2">
                                        <ButtonMove dir="up"/>
                                    </div>
                                    <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-alto.jpg" alt="" />
                                <div>
                                    <p className="captionInfo mb-0">
                                        Tila y Roberto
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.grid2} ${"grid2 mb-160"}`}>
                                <img className="img-fluid mb-4" loading="lazy" src="/img/larry/test-larry-alto.jpg" alt="" />
                                <div>
                                    <p className="captionInfo mb-0">
                                        Camilo
                                    </p>
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

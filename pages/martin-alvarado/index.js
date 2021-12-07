import Layout from "../../components/Layout"
import styles from "./martin-alvarado.module.scss"
import ButtonMove from "../../components/ButtonMove"
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import { Link as LinkScroll, Element } from 'react-scroll'
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function index() {
    return (
        <>
            <Layout title="Martín Alvarado" path="/martin-alvarado" description="Martín Alvarado Gamarra lleva más de 30 años recorriendo nuestro país documentando con su cámara fotográfica diferentes modos de vida, festividades, personajes, danzas, música y tradiciones. Uno de los motivos fundamentales de su obra es visibilizar la presencia afroperuana en nuestro país, buscando contribuir, a través de su extensa labor fotográfica, al conocimiento y preservación de su memoria cultural y colectiva. Martín Alvarado, ha construido el archivo fotográfico del acervo afrodescendiente más grande del país.">
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
                                    <a href="whatsapp://send?text=https://bicentenario-afroperuanos.vercel.app/martin-alvarado" data-action="share/whatsapp/share" className="d-inline-block color-inherit me-1">
                                        <FaWhatsapp className="icon" />
                                    </a>
                                    <a target="_blank" href="http://www.facebook.com/sharer.php?u=https://bicentenario-afroperuanos.vercel.app/martin-alvarado&quote=" className="d-inline-block color-inherit me-1">
                                        <FaFacebookF className="icon" />
                                    </a>
                                    {/* <a className="d-inline-block color-inherit me-2" href="">
                                        <FaInstagram className="icon" />
                                    </a> */}
                                    <a target="_blank" href="https://twitter.com/intent/tweet?text=https://bicentenario-afroperuanos.vercel.app/martin-alvarado" className="d-inline-block color-inherit me-2">
                                        <FaTwitter className="icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className={`${styles.grid1} ${"grid1"}`}>
                                <div>
                                    <div className="title-page martin mb-5 fw-600">
                                        <img loading="lazy" className="text-1" src="/img/svg/MARTIN ALVARADO/MARTÍN.svg" alt="martín" />
                                        <div className="wrapper-arrow-text">
                                            <img loading="lazy" className="flechas" src="/img/svg/MARTIN ALVARADO/flechas_rosa_claro(36).svg" alt="flechas" />
                                            {/* <img loading="lazy" className="w-100" src="/img/svg/LORRY SALCEDO/DE LA.svg" alt="de la" /> */}
                                        </div>
                                        <img loading="lazy" className="text-2" src="/img/svg/MARTIN ALVARADO/ALVARADO.svg" alt="alvarado" />
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
                                    <img loading="lazy" className="arrow left" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                                    <p className="mb-0">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                    </p>
                                    <img loading="lazy" className="arrow right" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                                </div>
                                <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                                <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                                <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                            </div>
                                            <p className="captionInfo mb-0">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                            </p>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
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
                                <img loading="lazy" className="arrow left" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                                <p className="mb-0">
                                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                </p>
                                <img loading="lazy" className="arrow right" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                            </div>
                            <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.section4}>
                    <div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
                        <div></div>
                        <div>
                            <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                <img loading="lazy" className="arrow left" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                                <p className="mb-0">
                                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                </p>
                                <img loading="lazy" className="arrow right" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                            </div>
                            <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                <img loading="lazy" className="arrow left" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                                <p className="mb-0">
                                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                </p>
                                <img loading="lazy" className="arrow right" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                            </div>
                            <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                <img loading="lazy" className="arrow left" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                                <p className="mb-0">
                                    “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                </p>
                                <img loading="lazy" className="arrow right" src="/img/svg/flechas_rosa-claro(18).svg" alt="arrows" />
                            </div>
                            <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <Carousel className={`${styles.carousel} ${"carousel"}`} fade={true} controls={false} interval={null}>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-1.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
                                            <img className="img-fluid" src="/img/martin/test-martin-alto-2.jpg" alt="" />
                                        </div>
                                        <p className="captionInfo mb-0">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing2.
                                        </p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div></div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

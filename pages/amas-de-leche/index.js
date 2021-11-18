import Layout from "../../components/Layout"
import styles from "./amas-de-leche.module.scss"
import ButtonMove from "../../components/ButtonMove"
import Link from 'next/link'
import { Link as LinkScroll, Element } from 'react-scroll'
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function index() {
    return (
        <>
            <Layout title="Amas de leche de la colección Gourret">
                <section className={styles.section1}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div className="d-flex flex-column align-items-start justify-content-center ps-5">
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
                        <div className="d-flex align-items-center">
                            <div>
                                <div className="title-page amas mb-5 fw-600">
                                    <img className="text-1" src="/img/svg/AMAS DE LECHE/AMAS DE LECHE.svg" alt="amas de leche" />
                                    <div className="wrapper-arrow-text">
                                        <img className="flechas" src="/img/svg/AMAS DE LECHE/flechas_azules.svg" alt="flechas" />
                                        <img className="w-100" src="/img/svg/AMAS DE LECHE/DE LA.svg" alt="de la" />
                                    </div>
                                    <img className="text-2" src="/img/svg/AMAS DE LECHE/COLECCIÓN COURRET.svg" alt="colección courret" />
                                </div>
                                <div className={`${styles.gridDescImg} ${"gridDescImg"}`}>
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis asperiores voluptatibus quaerat, distinctio totam officia aperiam temporibus? Ullam, officiis voluptatem tenetur, odio, ad quis illum quas repellat magni corrupti libero?
                                    Nihil tempore vero laboriosam quia dignissimos nulla excepturi maiores doloribus quibusdam vitae nostrum odio fugit cumque itaque consectetur recusandae ea optio similique dolorum, hic aliquid deleniti quae soluta? Mollitia, magnam.
                                    Expedita illum reprehenderit sint reiciendis accusamus eligendi et explicabo totam a nostrum dolore facere, minima repellendus qui culpa iste voluptatibus libero repellat odit, fuga perferendis labore odio? A, impedit omnis.</p>
                                    <img className="img-fluid" src="/img/amas/inicio_amas.jpg" alt="" />
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <LinkScroll activeClass="active" className="" to="section2" smooth={true} duration={200}>
                                        <ButtonMove dir="down"/>
                                    </LinkScroll>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.section2}>
                    <Element name="section2">
                        <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                            <div className="ps-5">
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
                                <p className={`${styles.titleSection} ${"titleSection"}`}>La fotografía como medio de distinción social en el siglo XIX: la casa Courret y el retrato familiar</p>
                            </div>
                            <div></div>
                        </div>
                    </Element>
                </section>
                <section className={styles.section3}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}></div>
                </section>
                <section className={styles.section4}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}></div>
                </section>
                <section className={styles.section5}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}></div>
                </section>
            </Layout>
        </>
    )
}

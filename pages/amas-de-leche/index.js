import Layout from "../../components/Layout"
import styles from "./amas-de-leche.module.scss"
import ButtonMove from "../../components/ButtonMove"
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import { Link as LinkScroll, Element } from 'react-scroll'
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function index() {
    return (
        <>
            <Layout title="Amas de leche de la colección Gourret">
                <section className={styles.section1}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div className="d-flex flex-column align-items-start justify-content-center ps-0 ps-xl-5">
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
                                    <img loading="lazy" className="text-1" src="/img/svg/AMAS DE LECHE/AMAS DE LECHE.svg" alt="amas de leche" />
                                    <div className="wrapper-arrow-text">
                                        <img loading="lazy" className="flechas" src="/img/svg/AMAS DE LECHE/flechas_azules.svg" alt="flechas" />
                                        <img loading="lazy" className="w-100" src="/img/svg/AMAS DE LECHE/DE LA.svg" alt="de la" />
                                    </div>
                                    <img loading="lazy" className="text-2" src="/img/svg/AMAS DE LECHE/COLECCIÓN COURRET.svg" alt="colección courret" />
                                </div>
                                <div className={`${styles.gridDescImg} ${"gridDescImg"}`}>
                                    <div className={`${styles.partText} ${"partText"}`}>
                                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi blanditiis maxime? Molestiae non voluptatem eum nisi perferendis perspiciatis sed aliquid praesentium quidem fuga sint aperiam reprehenderit architecto, dicta inventore.
                                        Dicta, atque, fuga eligendi quo culpa iste corporis consequuntur rerum amet quia necessitatibus aliquam consectetur quos vitae repellat officia, omnis alias. Quis molestiae harum iure optio, provident sit iusto dolorem.
                                        Eveniet omnis dignissimos doloremque et cum excepturi? Commodi deleniti maxime at consequuntur ullam dicta minima impedit reprehenderit minus magni ipsa corporis eaque accusamus quibusdam explicabo, reiciendis asperiores assumenda, officia quo?
                                        Optio consequuntur dignissimos suscipit inventore facere nisi neque.</p>
                                        <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                            <img loading="lazy" className="img-fluid" src="/img/amas/inicio_amas.png" alt="" />
                                        </div>
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
                        <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                            <div className="ps-0 ps-xl-5">
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
                                <p className={`${styles.titleSection1} ${"titleSection"}`}>La fotografía como medio de distinción social en el siglo XIX: la casa Courret y el retrato familiar</p>
                                <div className={`${styles.grid1} ${""}`}>
                                    <div>
                                        <p>
                                            Corría el año de 1839 cuando Louis Daguerre dio a conocer un innovador método fotográfico: el daguerrotipo. La repercusión de este fenómeno sería de escala mundial y un hecho trascendental en la historia de la fotografía. Desde ese momento, el retrato fotográfico se convertiría en uno de los géneros más solicitados a lo largo del siglo XIX y aunque su costo estaba por debajo de un retrato o pintura al óleo, no estaba al alcance de todos.
                                        </p>
                                        <p className="mb-0">
                                            El daguerrotipo llegó al Perú de la mano del fotógrafo Maximiliano Danti y con él la moda de la fotografía, posteriormente, el norteamericano Benjamin Franklin Pease estableció el primer estudio fotográfico en nuestra capital y hacia 1863, los hermanos Aquiles y Eugenio Courret fundaron “Fotografía Central”, célebre estudio que pasaría a la historia como el más importante de la época. Desde su creación, la casa Courret desarrolló una prolífica actividad que pervivió hasta 1935, siendo el retrato de estudio su máximo estandarte.
                                        </p>
                                    </div>
                                    <div className={styles.wrapperImage}>
                                        <div className="text-center">
                                            <img loading="lazy" className="img-fluid mb-4" src="/img/amas/estudio courret.jpg" alt="" />
                                            <div className={`${styles.captionInfo} ${"captionInfo"}`}>
                                                <p>
                                                    “<b>Fotografía Central</b>”. E. Courret y Cia.
                                                    <br />
                                                    Adolfo Dubreuil, sucesor.
                                                </p>
                                                <p className="mb-0">
                                                    Estudio fotográfico Courret. (1863-1935)
                                                    <br />
                                                    El frontis en estilo art Nouveau fue inaugurado por Adolfo Dubreuil en 1905.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    El retrato fotográfico se consolidó como un medio de afirmación y distinción social y, por consiguiente, los miembros de la élite limeña reflejaron su elevado estatus en diversas fotografías familiares. Entre esta amalgama de imágenes se encuentra uno de los retratos más potentes y entrañables que conforman nuestro imaginario nacional: el retrato de tiernos infantes junto a su ama de leche o ama de cría, por lo común, de ascendencia africana o afrodescendiente.
                                </p>
                                <p className="mb-5">
                                    En nuestras tierras, la presencia de una nodriza en las casas señoriales se remonta al periodo virreinal; tiempo en el que el sistema esclavista dejó caer el peso de esta práctica sobre las esclavas africanas. En el siglo XIX, la preferencia por las mujeres afroperuanas fue predominante, no sólo en las familias más tradicionales y aristocráticas de Lima, sino también en importantes familias de inmigrantes extranjeros que llegaron al país con la apertura económica y el esplendor de la Era del Guano, quienes se adaptaron a las costumbres de la sociedad limeña del momento.
                                </p>
                                <div className={`${styles.grid2} ${""}`}>
                                    <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                        <img loading="lazy" className="mb-3" src="/img/amas/pedro tonesi.jpg" alt="" />
                                        <div className={`${styles.captionInfo} ${"captionInfo text-center"}`}>
                                            <p>
                                                <b>Pedro Tonesi y ama de leche</b>
                                                <br />
                                                Eugenio Courret. 1884
                                                <br />
                                                12cm. X 9cm.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                        <img loading="lazy" className="mb-3" src="/img/amas/niña chaize.jpg" alt="" />
                                        <div className={`${styles.captionInfo} ${"captionInfo text-center"}`}>
                                            <p>
                                                <b>Niña Chaize y ama de cría</b>
                                                <br />
                                                Eugenio Courret. 1883
                                                <br />
                                                18cm. X 12 cm.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    La notable familia fundada por el patriarca inglés Norman Evans fue retratada a lo largo de tres generaciones. De igual forma, los prominentes comerciantes Paul Ascher, ciudadano norteamericano de origen judío y el Conde italiano José Giacometti Marzano de Visconti fueron fotografiados con su descendencia en el afamado estudio. El retrato de sus bebés con sus amas afroperuanas fue una fotografía esencial en el álbum familiar y un signo de prestigio. Estos álbumes constituían un relato o crónica visual de la familia y se colocaban en los salones de las residencias burguesas donde eran admirados por visitantes y allegados.
                                </p>
                            </div>
                            <div></div>
                        </div>
                        <div className={`${styles.containerGrid2} ${"containerGrid2"}`}>
                            <div></div>
                            <div>
                                <div className={`${styles.gridCarousel} ${"gridCarousel"}`}>
                                    <div className="d-flex align-items-center">
                                        <Carousel className="mb-5" fade={true} controls={false} interval={null}>
                                            <Carousel.Item>
                                                <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                    <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                        <p className="mb-0">
                                                        <b>Familias Courret y Dubreuil.</b>
                                                        <br />
                                                        Ca. 1890
                                                        <br />
                                                        24cm. X 18 cm.
                                                        </p>
                                                    </div>
                                                    <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                        <img className="img-fluid" src="/img/amas/test1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                    <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>caption2</div>
                                                    <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                        <img className="img-fluid" src="/img/amas/test2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                    <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                        <p className={`${styles.text} ${"text mb-0"}`}>
                                            <b>Los lazos entre las familias Courret y Dubreuil</b> se remontan a tiempos de la primera generación de migrantes franceses al Perú. Eugenio Courret y su esposa Emilia Basserre fueron padrinos de boda de Adolfo Dubreuil, quien se casó con Clara Couturier en 1884 y de Juanita Dubreuil; su primogénita. Estas familias fueron retratadas reflejando el estrecho vínculo entre ambas, así como su elevada posición social como importantes miembros de la comunidad francesa en nuestro país. En 1892, Eugenio Courret partió definitivamente a Francia dejando a Dubreuil; socio y amigo, la dirección del ilustre estudio fotográfico.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                            <div></div>
                            <div>
                                <p className="mb-5">
                                    Estos retratos familiares, además de ser una cuidadosa construcción o montaje de la imagen que las élites buscaron proyectar, son una expresión de la mentalidad de su tiempo. Si bien, la sociedad limeña del siglo XIX estaba estratificada, las relaciones entre los miembros de distinta clase social no fueron verticales o rígidas y estas imágenes son un reflejo de los múltiples vínculos socioculturales, de género y étnicos que se estrecharon en el joven Perú republicano y que el emblemático estudio fijó para la posteridad en nuestra memoria nacional.
                                </p>
                            </div>
                            <div></div>
                        </div>
                    </Element>
                </section>
                <section className={styles.section3}>
                    <div className={`${styles.containerGrid2} ${"containerGrid2"}`}>
                        <div className="ps-0 ps-xl-5">
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
                            <div className={`${styles.gridCarousel} ${styles.gridCarouselAuto} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <div className="mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                <p className="mb-0">
                                                <b>Ysidro Ernesto Ascher Freymann y ama.</b>
                                                <br />
                                                Adolfo Dubreuil. 1903
                                                <br />
                                                18 cm. X 13 cm.
                                                </p>
                                            </div>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                <img className="img-fluid" src="/img/amas/ysidro y ama.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}>
                                        El bebé Ascher, retratado con un primoroso ropón de bautizo, nació el 31 de octubre de 1902. Su nodriza lo sostiene de modo que sea el punto de mira del retrato.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <Carousel className="mb-5" fade={true} controls={false} interval={null}>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                    <p className="mb-0">
                                                    <b>Familia Ascher Freymann</b>
                                                    <br />
                                                    Adolfo Dubreuil. 1903
                                                    </p>
                                                </div>
                                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                    <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>caption2</div>
                                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                    <img className="img-fluid" src="/img/amas/test2.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}>
                                        <b>En ocasión del bautizo del bebé Ascher</b>, Adolfo Dubreuil retrató a la familia en dos ambientes distintos: en un fastuoso espacio idealizado conformado por un telón de fondo pintado con columnas, cortinaje y exteriores arbolados que están en armonía con el balcón de madera sobre el que se ubica el infante, quien es sostenido amorosamente por sus padres. En el segundo retrato, la familia posa ante un fondo neutro y liso, recurrente en los retratos de tres cuartos del Estudio.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.gridCarousel} ${styles.gridCarouselAuto} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <div className="mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                <p className="mb-0">
                                                <b>Matrimonio Ascher Freymann.</b>
                                                <br />
                                                Eugenio Courret. 1880.
                                                <br />
                                                18 cm. X 13 cm.
                                                </p>
                                            </div>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                <img className="img-fluid" src="/img/amas/matrimonio ascher freymann.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}>
                                        Paul Ascher, fue un próspero comerciante dedicado a la banca y un miembro distinguido de la Sociedad Hebrea de Beneficencia. Se casó con Minna Freymann el 27 de enero de 1880.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.section4}>
                    <div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
                        <div></div>
                        <div>
                            <p className={`${styles.textBorder} ${"textBorder mb-64"}`}>
                                El bebé José Luis Giacometti nació el 25 de abril de 1888. La elegancia en las vestimentas de inspiración europea de los retratados permite suponer que la familia acudió al estudio en el marco de la celebración del bautizo de su menor hijo. Eugenio Courret empleó una escenografía sobria de fondos lisos y neutros, alfombra y pedestales labrados de piedra y madera; soporte común para retratar a los infantes. El gesto de protección y cercanía en el retrato está enfatizado en la postura de su nodriza.
                            </p>
                            <div className={`${styles.grid2} ${"mb-160"}`}>
                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                    <img loading="lazy" className="mb-3" src="/img/amas/jose luis y nodriza.jpg" alt="" />
                                    <div className={`${styles.captionInfo} ${"captionInfo text-center"}`}>
                                        <p>
                                            <b>José Luis Giacometti Soyer y nodriza.</b>
                                            <br />
                                            Eugenio Courret. 1888
                                            <br />
                                            18 cm. X 13 cm.
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                    <img loading="lazy" className="mb-3" src="/img/amas/familia giacometti soyer.jpg" alt="" />
                                    <div className={`${styles.captionInfo} ${"captionInfo text-center"}`}>
                                        <p>
                                            <b>Familia Giacometti Soyer.</b>
                                            <br />
                                            Eugenio Courret. 1888
                                            <br />
                                            18cm. X 13 cm.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <Carousel className="mb-5" fade={true} controls={false} interval={null}>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                    <p className="mb-0">
                                                    <b>Conde José Luis Giacometti Marzano de Visconti</b>
                                                    <br />
                                                    Eugenio Courret. 1886
                                                    <br />
                                                    12 cm. X 9cm
                                                    </p>
                                                </div>
                                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                    <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                    <p className="mb-0">
                                                    <b>Familia Ascher Freymann</b>
                                                    <br />
                                                    Adolfo Dubreuil. 1903
                                                    </p>
                                                </div>
                                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                    <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                    <p className="mb-0">
                                                    <b>Familia Ascher Freymann</b>
                                                    <br />
                                                    Adolfo Dubreuil. 1903
                                                    </p>
                                                </div>
                                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                    <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}>
                                        El conde Giacometti Marzano de Visconti, natural de Piacenza, Italia, se estableció en Lima como comerciante y contrajo matrimonio con Victoria Soyer Morote, natural de Lima.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.section5}>
                    <div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
                        <div></div>
                        <div>
                            <div className={`${styles.gridCarousel} ${styles.gridCarouselAuto} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <div className="mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                <p className="mb-0">
                                                <b>Ysidro Ernesto Ascher Freymann y ama.</b>
                                                <br />
                                                Adolfo Dubreuil. 1903
                                                <br />
                                                18 cm. X 13 cm.
                                                </p>
                                            </div>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                <img className="img-fluid" src="/img/amas/ysidro y ama.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}>
                                        El bebé Ascher, retratado con un primoroso ropón de bautizo, nació el 31 de octubre de 1902. Su nodriza lo sostiene de modo que sea el punto de mira del retrato.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <Carousel className="mb-5" fade={true} controls={false} interval={null}>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                    <p className="mb-0">
                                                    <b>Conde José Luis Giacometti Marzano de Visconti</b>
                                                    <br />
                                                    Eugenio Courret. 1886
                                                    <br />
                                                    12 cm. X 9cm
                                                    </p>
                                                </div>
                                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                    <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                    <p className="mb-0">
                                                    <b>Familia Ascher Freymann</b>
                                                    <br />
                                                    Adolfo Dubreuil. 1903
                                                    </p>
                                                </div>
                                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                    <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                    <p className="mb-0">
                                                    <b>Familia Ascher Freymann</b>
                                                    <br />
                                                    Adolfo Dubreuil. 1903
                                                    </p>
                                                </div>
                                                <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                    <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}>
                                        El conde Giacometti Marzano de Visconti, natural de Piacenza, Italia, se estableció en Lima como comerciante y contrajo matrimonio con Victoria Soyer Morote, natural de Lima.
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

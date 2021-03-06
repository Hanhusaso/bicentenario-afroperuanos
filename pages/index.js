import LayoutHome from "../components/LayoutHome";
import ButtonMove from "../components/ButtonMove";
import styles from "./index.module.scss";
import Link from "next/link";
import { Link as LinkScroll, Element } from "react-scroll";
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
	titleAnimation,
	commonAnimation,
	logoAnimation,
	socialNetworksAnimation,
} from "../animations/homeAnimations";

import { useWindowSize } from "../utils/useWindowSize";

const awsUrl = "https://luiscavibotsample.s3.sa-east-1.amazonaws.com/assets/afroperuanos/";
const awsUrlVideo = "https://afroperuanos.s3.us-east-2.amazonaws.com/videos/";
const awsUrlTitle = "https://afroperuanos.s3.us-east-2.amazonaws.com/titulos/";

export default function Home() {
	const { width, height } = useWindowSize();

	const MenuMove = () => {
		return (
			<div className="d-block d-md-flex justify-content-end">
				<div>
					<div className={`${styles.menuGrid} ${"menuGrid"}`}>
						<div className={`${styles.ama} ${""}`}>
							<Link href="/amas-de-leche">
								<a className={`${styles.wrapperCaption1} ${"wrapperCaptionMenu"}`}>
									{/* <img className="img-fluid" src="/img/menu/ama_leche.jpg" alt="" /> */}
									<picture>
										<source
											srcSet={`${awsUrl}` + "amas-de-leche-responsive-portada" + ".png"}
											media="(max-width: 767.98px)"
										/>
										<img
											className="img-fluid"
											srcSet={`${awsUrl}` + "amas-de-leche-menu" + ".png"}
											alt="Amas de leche"
										/>
									</picture>
									<div className={`${styles.caption} ${"caption"}`}>
										<p className="mb-0">
											&quot;AMAS DE LECHE&quot;
											<br />
											EN LAS FOTOGRAFÍAS
											<br />
											DEL ESTUDIO COURRET
										</p>
									</div>
									<div className={`${styles.caption2} ${"caption2"}`}>
										<p className="mb-0 text-center">
											&quot;AMAS DE LECHE&quot; EN LAS FOTOGRAFÍAS DEL ESTUDIO COURRET
										</p>
									</div>
								</a>
							</Link>
						</div>
						<div className={`${styles.lorry} ${""}`}>
							<Link href="/lorry-salcedo">
								<a className={`${styles.wrapperCaption2} ${"wrapperCaptionMenu"}`}>
									{/* <img className="img-fluid" src="/img/menu/lorry.jpg" alt="" /> */}
									<picture>
										<source
											srcSet={
												`${awsUrl}` + "lorry-salcedo-amas-de-leche-responsive-portada" + ".png"
											}
											media="(max-width: 767.98px)"
										/>
										<img
											className="img-fluid"
											srcSet={`${awsUrl}` + "lorry-salcedo-menu" + ".webp"}
											alt="Lorry Salcedo"
										/>
									</picture>
									<div className={`${styles.caption} ${"caption"}`}>
										<p className="mb-0">
											LORRY
											<br />
											SALCEDO
											<br />Y EL CARMEN
										</p>
									</div>
									<div className={`${styles.caption2} ${"caption2"}`}>
										<p className="mb-0 text-center">LORRY SALCEDO Y EL CARMEN</p>
									</div>
								</a>
							</Link>
						</div>
						<div className={`${styles.martin} ${""}`}>
							<Link href="/martin-alvarado">
								<a className={`${styles.wrapperCaption3} ${"wrapperCaptionMenu"}`}>
									{/* <img className="img-fluid" src="/img/menu/martin.jpg" alt="" /> */}
									<picture>
										<source
											srcSet={
												`${awsUrl}` + "martin-alvarado-amas-de-leche-responsive-portada" + ".png"
											}
											media="(max-width: 767.98px)"
										/>
										<img
											className="img-fluid"
											srcSet={`${awsUrl}` + "martin-alvarado-menu" + ".png"}
											alt="Martín Alvarado"
										/>
									</picture>
									<div className={`${styles.caption} ${"caption"}`}>
										<p className="mb-0">
											MARTÍN ALVARADO
											<br />
											CRÓNICAS
											<br />
											AFROPERUANAS
										</p>
									</div>
									<div className={`${styles.caption2} ${"caption2"}`}>
										<p className="mb-0 text-center">MARTÍN ALVARADO, CRÓNICAS AFROPERUANAS</p>
									</div>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<LayoutHome
				title="Inicio"
				path="/"
				description="En el marco de la celebración del Bicentenario de la independencia del Perú es imperativo el reconocimiento y puesta en valor de la riqueza étnica y multicultural que conforma la república, elementos fundamentales para la construcción de la identidad peruana. Una de las poblaciones que ha contribuido a la edificación del imaginario nacional, con su legado, resiliencia y acervo, es la afroperuana, y, sin embargo, a lo largo de la historia su presencia ha sido valorada de forma desigual e incluso invisibilizada. En ese sentido, esta exposición promueve la reflexión en torno a la representación visual de la comunidad afrodescendiente al reunir una selección de fotografías que constituyen tres registros elaborados en diferentes épocas de nuestra historia republicana: los retratos de amas afroperuanas del Estudio Courret realizadas entre 1879 y 1912, los retratos de Lorry Salcedo Mitrani sobre la comunidad de El Carmen, Chincha, entre 1985 y 1996, y el proyecto DÍA 100 de Martín Alvarado Gamarra, la compilación más extensa de retratos de afroperuanos."
			>
				<section className={styles.home1}>
					<div className={`${styles.containerGrid} ${"containerGrid"}`}>
						<div></div>
						<div className="d-flex align-items-center">
							<div className={styles.mt}>
								<motion.div
									initial="hidden"
									animate="visible"
									variants={titleAnimation}
									className="title-page home mb-5 fw-600"
								>
									<img
										src={`${awsUrlTitle}discursos-visuales-sobre-lo-afroperuano-titulo-espanol.png`}
										className="w-100"
									></img>
									{/* <im/img/homeg
										className="text-1"
										src="/img/svg/HOME/DISCURSOS VISUALES.svg"
										alt="discursos visuales"
									/>
									<div className="wrapper-arrow-text">
										<img
											className="flechas"
											src="/img/svg/HOME/flechas blancas.svg"
											alt="flechas"
										/>
										<img className="w-100" src="/img/svg/HOME/SOBRE LO.svg" alt="sobre lo" />
									</div>
									<img className="text-2" src="/img/svg/HOME/AFROPERUANO.svg" alt="afroperuano" /> */}
								</motion.div>
								<motion.div initial="hidden" animate="visible" variants={commonAnimation}>
									<div className="mb-4 lh-normal">
										<p className="">
											<b>
												En el marco de la celebración del Bicentenario de la independencia del Perú
											</b>{" "}
											es imperativo reconocer y poner en valor la riqueza étnica y multicultural que
											conforma la república, elemento fundamental para la construcción de la
											identidad peruana. Una de las poblaciones que ha contribuido a la edificación
											del imaginario nacional, con su legado, resiliencia y acervo, es la
											afroperuana; sin embargo, a lo largo de la historia, su presencia ha sido
											valorada de forma desigual e incluso invisibilizada.
										</p>
										<p className="">
											En ese sentido, esta exposición promueve la reflexión en torno a la
											representación visual de la comunidad afrodescendiente al reunir una selección
											de fotografías de tres registros elaborados en diferentes épocas de nuestra
											historia republicana: los retratos de amas afroperuanas del Estudio Courret
											realizadas entre 1879 y 1912, los retratos de Lorry Salcedo Mitrani sobre la
											comunidad de El Carmen, Chincha, entre 1985 y 1996, y el proyecto DIA 100 de
											Martín Alvarado Gamarra, la compilación más extensa de retratos de
											afroperuanos.
										</p>
										<p className="">
											La exhibición en conjunto de las imágenes de estos archivos fotográficos
											propone visibilizar las condiciones históricas y socioculturales de los
											afrodescendientes en nuestro país, pensar sobre nuestras diferencias y evaluar
											nuestro pasado y presente. Creemos en la posibilidad de un futuro común que
											integre plenamente a la comunidad afroperuana, valore su presencia y preserve
											su herencia, identidad y riqueza cultural. De igual manera, los videos de la
											sección actividades complementarias están orientados a reflexionar sobre su
											historia, problemática y agencia, propiciando una reflexión crítica.
										</p>
									</div>
									<motion.div
										initial="hidden"
										animate="visible"
										variants={socialNetworksAnimation}
										className="d-inline-flex flex-column align-items-center ms-3"
									>
										<div className="mb-3">
											<BsShare className="icon share-icon me-2" />
											<span>COMPARTIR</span>
										</div>
										<div>
											<a
												href="whatsapp://send?text=https://discursosvisualesafroperuanos.com/"
												data-action="share/whatsapp/share"
												className="d-inline-block color-inherit me-1"
											>
												<FaWhatsapp className="icon" />
											</a>
											<a
												target="_blank"
												rel="noreferrer"
												href="http://www.facebook.com/sharer.php?u=https://discursosvisualesafroperuanos.com/&quote="
												className="d-inline-block color-inherit me-1"
											>
												<FaFacebookF className="icon" />
											</a>
											{/* <a className="d-inline-block color-inherit me-2" href="">
                                                <FaInstagram className="icon" />
                                            </a> */}
											<a
												target="_blank"
												rel="noreferrer"
												href="https://twitter.com/intent/tweet?text=https://discursosvisualesafroperuanos.com/"
												className="d-inline-block color-inherit me-2"
											>
												<FaTwitter className="icon" />
											</a>
										</div>
									</motion.div>
								</motion.div>
								{/* <div className="d-flex align-items-center justify-content-center">
									<LinkScroll
										activeClass="active"
										className=""
										to="menuPrincipal"
										smooth={true}
										duration={200}
									>
										<ButtonMove dir="down" />
									</LinkScroll>
								</div> */}
							</div>
						</div>
						<div className="d-flex flex-column align-items-end">
							<Link href="/en">
								<a className="color-inherit under mb-4">English version</a>
							</Link>
							<motion.div initial="hidden" animate="visible" variants={logoAnimation}>
								<img
									className={`${styles.logoBicentenario} ${"img-fluid"}`}
									src="/img/LOGO HORIZONTAL PEB.png"
									alt="bicentenario peru"
								/>
							</motion.div>
						</div>
					</div>
				</section>
				<section className={styles.home2}>
					<Element id="menuPrincipal" className={`${styles.element2}`} name="menuPrincipal">
						<div className={`${styles.containerGrid2} ${"containerGrid2"}`}>
							<div className="d-none d-md-flex align-items-center">
								{/* <LinkScroll
									activeClass="active"
									className="pointer d-flex align-items-center"
									to="header"
									smooth={true}
									duration={200}
								>
									<div className="me-2 d-inline">
										<ButtonMove dir="up" />
									</div>
									<span className="fw-500 text-uppercase">INICIO</span>
								</LinkScroll> */}
							</div>
							<div className="d-flex align-items-center">
								<div className={`${styles.grid}`}>
									<div className="pt-4 d-flex align-items-center">
										<div className="mb-3 mb-md-5">
											{/* <div className="titleMenu fw-500 text-uppercase mb-4">DISCURSOS VISUALES SOBRE LO AFROPERUANO</div> */}
											<div className="title-page titleMenu home pb-3 mb-4">
												<img
													className="text-1"
													src="/img/svg/LOGO/DISCURSOS VISUALES.svg"
													alt="discursos visuales"
												/>
												<div className="wrapper-arrow-text">
													<img
														className="flechas"
														src="/img/svg/HOME/flechas blancas.svg"
														alt="flechas"
													/>
													<img className="w-100" src="/img/svg/LOGO/SOBRE LO.svg" alt="sobre lo" />
												</div>
												<img
													className="text-2"
													src="/img/svg/LOGO/AFROPERUANO.svg"
													alt="afroperuano"
												/>
											</div>
											<div>
												<p className="lh-normal">
													Aunque separadas por décadas, estas imágenes nos permiten, por un lado,
													profundizar en una antigua práctica de servidumbre en el siglo XIX y
													conocer, además, las relaciones sociales, interraciales, afectivas, de
													género y culturales que cumplió la mujer afroperuana en dicha sociedad; y
													por otro, construir un discurso sobre la contemporaneidad del pueblo
													afroperuano desde finales del siglo XX, acercándonos a su cotidianeidad,
													vitalidad, luchas y resistencia.
												</p>
											</div>
										</div>
										{/* {width < 768 && (
											<>
												<MenuMove />
											</>
										)} */}
										{/* <div className="mb-5">
											<LinkScroll
												activeClass="active"
												className="pointer"
												to="actividadesParalelas"
												smooth={true}
												duration={200}
											>
												<div className="titleMenu fw-500 text-uppercase lh-normal">
													ACTIVIDADES
													<br />
													PARALELAS.
													<br />
													ESPACIO DE
													<br />
													REFLEXIÓN
												</div>
											</LinkScroll>
										</div>
										<div className="mb-5">
											<LinkScroll
												activeClass="active"
												className="pointer"
												to="creditos"
												smooth={true}
												duration={200}
											>
												<div className="titleMenu fw-500 text-uppercase">CRÉDITOS</div>
											</LinkScroll>
										</div> */}
									</div>
									{/* {width >= 768 && (
										<>
											<MenuMove />
										</>
									)} */}
									<MenuMove />
								</div>
							</div>
							<div></div>
						</div>
					</Element>
				</section>
				{/* <section className={styles.home3}>
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
                </section> */}
				<section className={styles.home4}>
					<Element className={`${styles.element4}`} name="actividadesParalelas">
						<div className={`${styles.containerGrid} ${"containerGrid"}`}>
							<div className="">
								<LinkScroll
									activeClass="active"
									className={`${styles.linkMenu} ${"pointer d-none d-md-flex align-items-center"}`}
									to="menuPrincipal"
									smooth={true}
									duration={200}
								>
									<div className="me-2 d-inline">
										<ButtonMove dir="up" />
									</div>
									<span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
								</LinkScroll>
							</div>
							<div>
								<div className={`${styles.boxText} ${"mb-5"}`}>
									<div className="titleHome text-uppercase mb-1">
										ACTIVIDADES PARALELAS. ESPACIO DE REFLEXIÓN
									</div>
									<div className="mb-4">
										<img className="underline-arrows" src="/img/svg/flechas_piel(37).svg" alt="" />
									</div>
									<p className="mb-0 lh-normal">
										Promovamos la reflexión y el diálogo sobre la comunidad afroperuana, su
										desarrollo a través de nuestra historia republicana, su problemática, su riqueza
										cultural y su resistencia.
									</p>
								</div>

								<div className={`${styles.boxText} ${styles.sesion1} ${"pb-3 mb-5"}`}>
									<div className={`${styles.titleHome} ${"titleHome text-uppercase pb-3 mb-4"}`}>
										SESIÓN 1
									</div>
									<p className="mb-0 lh-normal">
										Profundicemos en las relaciones sociales, étnicas, culturales y en el rol que
										cumplió la mujer afroperuana en la sociedad del siglo XIX y XX
									</p>
								</div>

								<div className={`${styles.containerVideos} ${"containerVideos mb-160"}`}>
									<div className={`${styles.video1} ${"wrapperVideo mb-5"}`}>
										<video
											className="w-100"
											src={`${awsUrlVideo}Carlos+Estela+Vilela-1-comp-2.mp4`}
											controls
											poster={`${awsUrlVideo}el-estudio-courret-y-la-fotografia-de-las-amas-de-leche-afroperuanas-de-fines-del-xix.png`}
										></video>
										<div className={`${styles.infoVideo} ${"infoVideo"}`}>
											<div className={`${styles.mirar} ${"mirar"}`}></div>
											<div className={`${styles.titulo} ${"titulo"}`}>
												<b>
													El Estudio Courret y la fotografía de las amas de leche afroperuanas de
													fines del XIX{" "}
												</b>
												<br />
												<span>Carlos Estela Vilela. Literato e investigador</span>
											</div>
											<div className="descripcion"></div>
										</div>
									</div>
									<div className={`${styles.video2} ${"wrapperVideo mb-5"}`}>
										<video
											className="w-100"
											src={`${awsUrlVideo}Maribel+Arrelucea-1.m4v`}
											poster={`${awsUrlVideo}Video+Maribel+Arrelucea-04+1+(1).png`}
											controls
										></video>
										<div className={`${styles.infoVideo} ${"infoVideo"}`}>
											<div className={`${styles.mirar} ${"mirar"}`}></div>
											<div className={`${styles.titulo} ${"titulo"}`}>
												<b>
													Los afrodescendientes en los inicios de la república y la configuración de
													la identidad afro en el siglo XX
												</b>
												<br />
												<span>Maribel Arrelucea Barrantes. Historiadora</span>
											</div>
											<div className="descripcion"></div>
										</div>
									</div>
								</div>

								<div className={`${styles.boxText} ${styles.sesion2} ${"pb-3 mb-5"}`}>
									<div className={`${styles.titleHome} ${"titleHome text-uppercase pb-3 mb-4"}`}>
										SESIÓN 2
									</div>
									<p className="mb-0 lh-normal">
										¿Qué implica ser afroperuano o afroperuana? ¿Cómo se construyó esta categoría?
										Evaluamos el pasado reciente y las posibilidades de un porvenir común que
										integren plenamente a la comunidad afroperuana
									</p>
								</div>

								<div className={`${styles.containerVideos} ${"containerVideos"}`}>
									<div className={`${styles.video3} ${"wrapperVideo mb-5"}`}>
										<video
											className="w-100"
											src="https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Sofia Carrillo-1.m4v"
											controls
											poster={`${awsUrlVideo}Video+Sofia+Carrillo-05+1.png`}
										></video>
										<div className={`${styles.infoVideo} ${"infoVideo"}`}>
											<div className={`${styles.mirar} ${"mirar"}`}></div>
											<div className={`${styles.titulo} ${"titulo"}`}>
												<b>
													Identidad y herencia cultural. La agenda pendiente para una ciudadanía
													plena, sin discriminación ni racismo
												</b>
												<br />
												<span>Sofía Carillo Zegarra. Periodista y activista</span>
											</div>
											<div className="descripcion"></div>
										</div>
									</div>
									<div className={`${styles.video4} ${"wrapperVideo mb-5"}`}>
										<video
											className="w-100"
											src="https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Newton+Mori-1.m4v"
											poster={`${awsUrlVideo}Video+Newton+Mori-06+1.png`}
											controls
										></video>
										<div className={`${styles.infoVideo} ${"infoVideo"}`}>
											<div className={`${styles.mirar} ${"mirar"}`}></div>
											<div className={`${styles.titulo} ${"titulo"}`}>
												<b>
													Las condiciones históricas y socioculturales de la denominación negro y
													afroperuano
												</b>
												<br />
												<span>Newton Mori Julca. Historiador</span>
											</div>
											<div className="descripcion"></div>
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
								{/* <LinkScroll activeClass="active" className="pointer d-flex align-items-center" to="menuPrincipal" smooth={true} duration={200}>
                                <div className="me-2 d-inline">
                                    <ButtonMove dir="up"/>
                                </div>
                                <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                            </LinkScroll> */}
							</div>
							<div>
								<div className="titleHome text-uppercase mb-1">CRÉDITOS</div>
								<div className="mb-5">
									<img className="underline-arrows" src="/img/svg/flechas_azules(25).svg" alt="" />
								</div>
								<div className={`${styles.grid}`}>
									<div>
										<div className="mb-4">
											<div className="fw-700">Investigación y curaduría:</div>
											<p className="mb-0">Roger A. Cáceres Atocha</p>
											<p className="mb-0">Flor de María Godo Balarezo</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Diseño:</div>
											<p className="mb-0">Judith León</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Teach lead:</div>
											<p className="mb-0">Luis Castillo</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Web developer:</div>
											<p className="mb-0">Hans Huiza</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Interpretación de textos y traducción:</div>
											<p className="mb-0">Daniel Rodríguez</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Edición de video:</div>
											<p className="mb-0">Jesús Ramírez</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Intérprete de Lengua de Señas Peruanas:</div>
											<p className="mb-0">Laura Montes</p>
										</div>
									</div>
									<div>
										<div className="mb-4">
											<div className="fw-700">AGRADECIMIENTOS</div>
											<p className="mb-0">Martín Alvarado</p>
											<p className="mb-0">Miluska Alzamora</p>
											<p className="mb-0">Maribel Arrelucea</p>
											<p className="mb-0">Sandy Arrué</p>
											<p className="mb-0">Sofía Carrillo</p>
											<p className="mb-0">Carlos Estela</p>
											<p className="mb-0">Jonathan Garbay</p>
											<p className="mb-0">Daniel Giannoni</p>
											<p className="mb-0">Newton Mori</p>
											<p className="mb-0">Luis Muro</p>
											<p className="mb-0">Sofía Pachas</p>
											<p className="mb-0">Lorry Salcedo</p>
											<p className="mb-0">Patricia Soto</p>
											<p className="mb-0">Mary Takahashi</p>
										</div>
										<div className="mb-4">
											Biblioteca Nacional del Perú
											<br />
											Pinacoteca Municipal Ignacio Merino. Municipalidad Metropolitana de Lima
											<br />
											The Nelson-Atkins Museum of Arts
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
	);
}

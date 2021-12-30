import LayoutHome from "../../components/LayoutHome";
import ButtonMove from "../../components/ButtonMove";
import styles from "../index.module.scss";
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
} from "../../animations/homeAnimations";

import { useWindowSize } from "../../utils/useWindowSize";

const awsUrl = "https://luiscavibotsample.s3.sa-east-1.amazonaws.com/assets/afroperuanos/";
const awsUrlVideo = "https://afroperuanos.s3.us-east-2.amazonaws.com/videos/";

export default function Home() {
	const { width, height } = useWindowSize();

	const MenuMove = () => {
		return (
			<div className="d-block d-md-flex justify-content-end">
				<div>
					<div className={`${styles.menuGrid} ${"menuGrid"}`}>
						<div className={`${styles.ama} ${""}`}>
							<Link href="/en/amas-de-leche">
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
							<Link href="/en/lorry-salcedo">
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
							<Link href="/en/martin-alvarado">
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
									<img className="text-2" src="/img/svg/HOME/AFROPERUANO.svg" alt="afroperuano" />
								</motion.div>
								<motion.div initial="hidden" animate="visible" variants={commonAnimation}>
									<div className="mb-4 lh-normal">
										<p className="">
											<b>In the context of 200th anniversary of Peru’s independence,</b> it must be
											recognized and valued the ethnic and multicultural wealth that makes up the
											republic, because they are fundamental elements of Peruvian identity.
											Afro-Peruvian population has contributed, with its legacy, resilience and
											heritage, to national imaginary construction; however, its presence has been
											unvalued and even made invisible. Thus, this exhibition promotes reflection on
											the visual representation of the Afro-descendant community; it features a
											selection of photographs made at three different times of our republican
											history: Estudio Courret’s Afro-Peruvian portraits of wet nurses, made between
											1879 and 1912; Lorry Salcedo Mitrani’s portraits of El Carmen community, in
											Chincha, between 1985 and 1996; and Martín Alvarado Gamarra's DIA 100 project,
											the most extensive compilation of Afro-Peruvian portraits.
										</p>
										<p className="">
											These photographic archives exhibition stand out Afro-descendants historical
											and socio-cultural conditions in our country, and they ponder about our
											differences and our past and present. We believe in the possibility of a
											common future that fully integrates the Afro-Peruvian community, values its
											presence, and preserves its heritage, identity, and cultural wealth. Besides,
											complementary activities section is oriented to contextualize their history,
											problems, and agency, fostering a critical reflection.
										</p>
										{/* <p className="">
											La exhibición en conjunto de las imágenes de estos archivos fotográficos
											propone visibilizar las condiciones históricas y socioculturales de los
											afrodescendientes en nuestro país, pensar sobre nuestras diferencias y evaluar
											nuestro pasado y presente. Creemos en la posibilidad de un futuro común que
											integre plenamente a la comunidad afroperuana, valore su presencia y preserve
											su herencia, identidad y riqueza cultural. De igual manera, los videos de la
											sección actividades complementarias están orientados a reflexionar sobre su
											historia, problemática y agencia, propiciando una reflexión crítica.
										</p> */}
									</div>
									<motion.div
										initial="hidden"
										animate="visible"
										variants={socialNetworksAnimation}
										className="d-inline-flex flex-column align-items-center ms-3"
									>
										<div className="mb-3">
											<BsShare className="icon share-icon me-2" />
											<span>SHARE</span>
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
							<Link href="/">
								<a className="color-inherit under mb-4">Versión en español</a>
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
													Although, these images are separated by decades, they allow us, in the
													first place, to delve into an ancient servitude practice from nineteenth
													century, and to know social, interracial, affective, gender and cultural
													relationships played by Afro-Peruvian women in society; and, on the other
													hand, they allow us to build a discourse about the contemporaneity of
													Afro-Peruvian people since the end of the 20th century; they bring us
													closer to their daily lives, vitality, struggles and resistance.
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
									<span className="fw-500 text-uppercase">MAIN MENU</span>
								</LinkScroll>
							</div>
							<div>
								<div className={`${styles.boxText} ${"mb-5"}`}>
									<div className="titleHome text-uppercase mb-1">
										SPACE TO THINK. PARALLEL ACTIVITIES
									</div>
									<div className="mb-4">
										<img className="underline-arrows" src="/img/svg/flechas_piel(37).svg" alt="" />
									</div>
									<p className="mb-0 lh-normal">
										Let’s promote reflection and dialogue about the Afro-Peruvian community, its
										development through our republican history, its problems, its cultural richness,
										and its resistance.
									</p>
								</div>

								<div className={`${styles.boxText} ${styles.sesion1} ${"pb-3 mb-5"}`}>
									<div className={`${styles.titleHome} ${"titleHome text-uppercase pb-3 mb-4"}`}>
										SESSION 1
									</div>
									<p className="mb-0 lh-normal">
										Let´s dive into social, ethnic and cultural relations and the role played by
										Afro-Peruvian women in 19th and 20th centuries society.
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
													“El Estudio Courret y la fotografía de las amas de leche afroperuanas de
													fines del XIX”
												</b>
												<span>
													{" "}
													[“Courret Study and Afro-Peruvian wet nurses photos from the late 19th
													century”]
												</span>
												<br />
												<span>Carlos Estela Vilela. Litterateur</span>
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
													“Los afrodescendientes en los inicios de la república y la configuración
													de la identidad afro en el siglo XX”
												</b>
												<span>
													{" "}
													[“Afro-descendants at the beginning of republic and Afro identity
													configuration in the 20th century”]
												</span>
												<br />
												<span>Maribel Arrelucea Barrantes. Historian</span>
											</div>
											<div className="descripcion"></div>
										</div>
									</div>
								</div>

								<div className={`${styles.boxText} ${styles.sesion2} ${"pb-3 mb-5"}`}>
									<div className={`${styles.titleHome} ${"titleHome text-uppercase pb-3 mb-4"}`}>
										SESSION 2
									</div>
									<p className="mb-0 lh-normal">
										What does it mean to be Afro-Peruvian or Afro-Peruvian? How was this category
										built? We evaluate the recent past and the possibilities of a common future that
										fully integrate the Afro-Peruvian community
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
													“Identidad y herencia cultural. La agenda pendiente para una ciudadanía
													plena, sin discriminación ni racismo”
												</b>
												<span>
													{" "}
													[“Identity and cultural heritage. The pending agenda for full citizenship,
													without discrimination or racism”]
												</span>
												<br />
												<span>Sofía Carillo Zegarra. Journalist and activist</span>
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
													“Las condiciones históricas y socioculturales de las denominación negro y
													afroperuano”
												</b>
												<span>
													{" "}
													[“Historical and sociocultural conditions of black and Afro-Peruvian
													appellations”]
												</span>
												<br />
												<span>Newton Mori Julca. Historian</span>
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
								<div className="titleHome text-uppercase mb-1">CREDITS</div>
								<div className="mb-5">
									<img className="underline-arrows" src="/img/svg/flechas_azules(25).svg" alt="" />
								</div>
								<div className={`${styles.grid}`}>
									<div>
										<div className="mb-4">
											<div className="fw-700">Curatorial research:</div>
											<p className="mb-0">Roger A. Cáceres Atocha</p>
											<p className="mb-0">Flor de María Godo Balarezo</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Graphic design:</div>
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
											<div className="fw-700">Sign language interpreter:</div>
											<p className="mb-0">Daniel Rodríguez</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Video Edition:</div>
											<p className="mb-0">Jesús Ramírez</p>
										</div>
										<div className="mb-4">
											<div className="fw-700">Peruvian Sign Language Interpreter:</div>
											<p className="mb-0">Laura Montes</p>
										</div>
									</div>
									<div>
										<div className="mb-4">
											<div className="fw-700">We would like to express our sincere thanks to:</div>
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

import Layout from "../../components/Layout";
import styles from "./amas-de-leche.module.scss";
import ButtonMove from "../../components/ButtonMove";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { Link as LinkScroll, Element } from "react-scroll";
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import Compar1 from "./compar1";
import Compar2 from "./compar2";

const awsUrl = "https://luiscavibotsample.s3.sa-east-1.amazonaws.com/assets/afroperuanos/";
const awsUrlVideo = "https://afroperuanos.s3.us-east-2.amazonaws.com/videos/";

export default function index() {
	return (
		<>
			<Layout
				title="Amas de leche de la colección Gourret"
				path="/amas-de-leche"
				description="En el siglo XIX, tras la crisis del sistema esclavista y su subsiguiente abolición en 1854, los libertos contemplaron diferentes estrategias de subsistencia. Algunas mujeres afroperuanas continuaron con la práctica de la lactancia pagada o lactancia mercenaria. De este modo, la presencia de un ama dentro de la vida familiar de la élite fue un hecho ampliamente aceptado por la sociedad peruana republicana, siendo las nodrizas de origen afrodescendiente las preferidas como tradición. Esta práctica fue visibilizada a través del retrato fotográfico como un medio de afirmación y aspiración social: el retrato del ama junto al niño a su cuidado era un reflejo del elevado estatus socioeconómico de la familia, cuyo patrimonio incluía a la propia ama."
			>
				<section className={styles.section1}>
					<div className={`${styles.containerGrid} ${"containerGrid"}`}>
						<div
							className={`${
								styles.linkMenu
							} ${"d-none d-md-flex flex-column align-items-start justify-content-center ps-0 ps-xl-5"}`}
						>
							<Link href="./#menuPrincipal">
								<a className="d-inline-flex flex-column align-items-center mb-5 color-inherit">
									<div className="mb-2">
										<ButtonMove dir="up" />
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
									<a
										href="whatsapp://send?text=https://bicentenario-afroperuanos.vercel.app/amas-de-leche"
										data-action="share/whatsapp/share"
										className="d-inline-block color-inherit me-1"
									>
										<FaWhatsapp className="icon" />
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="http://www.facebook.com/sharer.php?u=https://bicentenario-afroperuanos.vercel.app/amas-de-leche&quote="
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
										href="https://twitter.com/intent/tweet?text=https://bicentenario-afroperuanos.vercel.app/amas-de-leche"
										className="d-inline-block color-inherit me-2"
									>
										<FaTwitter className="icon" />
									</a>
								</div>
							</div>
						</div>
						<div className="d-flex align-items-center">
							<div>
								<div className="title-page amas mb-5 fw-600">
									<img
										loading="lazy"
										className="text-1"
										src="/img/svg/AMAS DE LECHE/AMAS DE LECHE.svg"
										alt="amas de leche"
									/>
									<div className="wrapper-arrow-text">
										<img
											loading="lazy"
											className="flechas"
											src="/img/svg/AMAS DE LECHE/flechas_azules.svg"
											alt="flechas"
										/>
										<img
											loading="lazy"
											className="w-100"
											src="/img/svg/AMAS DE LECHE/EN LAS.svg"
											alt="en las"
										/>
									</div>
									<img
										loading="lazy"
										className="text-2"
										src="/img/svg/AMAS DE LECHE/FOTOGRAFÍAS DEL ESTUDIO COURRET.svg"
										alt="fotografías del estudio Courret"
									/>
								</div>
								<div className={`${styles.gridDescImg} ${"gridDescImg"}`}>
									<div className={`${styles.partText} ${"partText"}`}>
										<div>
											<p className="mb-0">
												En el siglo XIX, tras la crisis del sistema esclavista y su subsiguiente
												abolición en 1854, los libertos contemplaron diferentes estrategias de
												subsistencia. Algunas mujeres afroperuanas continuaron con la práctica de la
												lactancia pagada o lactancia mercenaria. De este modo, la presencia de un
												ama dentro de la vida familiar de la élite fue un hecho ampliamente aceptado
												por la sociedad peruana republicana, siendo las nodrizas de origen
												afrodescendiente las preferidas como tradición. Esta práctica fue
												visibilizada a través del retrato fotográfico como un medio de afirmación y
												aspiración social: el retrato del ama junto al niño a su cuidado era un
												reflejo del elevado estatus socioeconómico de la familia, cuyo patrimonio
												incluía a la propia ama.
											</p>
											<p>
												Se presenta una selección de los retratos fotográficos de amas de leche de
												ascendencia afroperuana realizados por Eugène Courret y su sucesor Adolphe
												Dubreuil entre 1879 y 1912 en el célebre estudio limeño E. Courret. En la
												actualidad, más de 50 mil placas en vidrio están en custodia en la
												Biblioteca Nacional del Perú.
											</p>
										</div>
										<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
											<img
												loading="lazy"
												className="img-fluid"
												src={`${awsUrl}` + "amas-de-leche-principal" + ".png"}
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="linkDown">
								<LinkScroll
									activeClass="active"
									className=""
									to="section2"
									smooth={true}
									duration={200}
								>
									<ButtonMove dir="down" />
								</LinkScroll>
							</div> */}
						</div>
						<div></div>
					</div>
				</section>
				<section className={styles.section2}>
					<Element name="section2">
						<div className={`${styles.containerGrid} ${"containerGrid"}`}>
							<div className={`${styles.linkMenu} ${"d-none d-md-block ps-0 ps-xl-5"}`}>
								<Link href="./#menuPrincipal">
									<a
										className={`${
											styles.linkMenu
										} ${"d-inline-flex flex-column align-items-center color-inherit"}`}
									>
										<div className="mb-2">
											<ButtonMove dir="up" />
										</div>
										<span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
									</a>
								</Link>
							</div>
							<div>
								<p className={`${styles.titleSection1} ${"titleSection"}`}>
									Los hermanos Courret y los retratos de estudio
								</p>
								<div className={`${styles.grid1} ${""}`}>
									<div>
										<p>
											En 1863, los hermanos de origen francés Achilles y Eugène Courret fundaron
											“Fotografía Central”, uno de los estudios fotográficos más importantes de la
											Lima del siglo XIX. Desde su creación, la casa Courret desarrolló una
											prolífica actividad, que pervivió hasta 1935, siendo el retrato de estudio su
											máximo estandarte.
										</p>
										<p className="">
											La fotografía se consolidó rápidamente en la ciudad como un medio de
											afirmación y distinción social, pues los miembros de la élite limeña
											reflejaban a través de este su elevado estatus. Así, los retratos de estudio,
											además de ser una cuidadosa construcción o montaje de la imagen que las clases
											altas buscaron proyectar, fueron una expresión de la mentalidad de su tiempo.
											En estas imágenes, como valiosos documentos visuales, se reflejan los
											múltiples vínculos socioculturales, de género y étnicos que se estrecharon en
											el joven Perú republicano.
										</p>
										<p className="mb-5">
											El estudio Courret fijó, de esta manera, imágenes que hoy forman parte de
											nuestro acervo y memoria nacional.
										</p>
									</div>
									<div className={styles.wrapperImage}>
										<div className="text-center">
											<img
												loading="lazy"
												className="img-fluid mb-4"
												src={`${awsUrl}` + "amas-de-leche-1" + ".png"}
												alt=""
											/>
											<div className={`${styles.captionInfo} ${"captionInfo img-fluid"}`}>
												<p>
													“<b>Fotografía Central</b>”. E. Courret y Cia.
													<br />
													Adolfo Dubreuil, sucesor.
												</p>
												<p className="mb-0">
													Estudio fotográfico Courret. (1863-1935)
													<br />
													El frontis en estilo art Nouveau fue inaugurado por Adolfo Dubreuil en
													1905.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div></div>
						</div>

						<div className={`${styles.fullGrid} ${"fullGrid"}`}>
							<div className={`${styles.gridCarousel} ${"gridCarousel"}`}>
								<div className="d-flex align-items-center">
									<div className={`${styles.wrapCarousel} ${"wrapCarousel noIndicator"}`}>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
												<p className="mb-0">
													<b>Familias Courret y Dubreuil</b>
													<br />
													Ca. 1890
												</p>
											</div>
											<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
												<img
													className="img-fluid"
													src={`${awsUrl}` + "amas-de-leche-2" + ".png"}
													alt=""
												/>
											</div>
										</div>
									</div>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
										<b>Los lazos entre las familias Courret y Dubreuil</b> se remontan a tiempos
										de la primera generación de migrantes franceses al Perú. Eugène Courret y su
										esposa Emilia Basserre fueron padrinos de boda de Adolphe Dubreuil, quien se
										casó con Clara Couturier en 1884, y de Juanita Dubreuil, su primogénita. Este
										retrato refleja el estrecho vínculo de ambas familias. En 1892, Eugène Courret
										partió definitivamente a Francia dejando a Dubreuil, su socio y amigo, la
										dirección del estudio fotográfico.
									</p>
								</div>
							</div>
						</div>
					</Element>
				</section>
				<section className={styles.section3}>
					<div className={`${styles.containerGrid} ${"containerGrid"}`}>
						<div></div>
						<div>
							<p className={`${styles.titleSection2} ${"titleSection"}`}>
								Retratos familiares: infantes y amas de leche
							</p>
							<p>
								Entre la amalgama de imágenes registradas por el Estudio Courret se encuentra uno
								potente y entrañable: el retrato de tiernos infantes junto a su ama de leche o ama
								de cría, mujer comúnmente de ascendencia africana.
							</p>
							<p>
								En el Perú, la presencia de un ama de leche en las casas señoriales se remonta al
								periodo virreinal, tiempo en el que el sistema esclavista dejó caer el peso de esta
								práctica sobre las esclavas africanas. En el siglo XIX, la preferencia por las
								nodrizas afroperuanas fue predominante, no solo en las familias más tradicionales y
								aristocráticas de Lima, sino también en las familias de inmigrantes extranjeros que
								llegaron al país a partir de la apertura económica y el esplendor de la era del
								guano.
							</p>
							<p className="mb-5">
								El retrato de los pequeños junto a sus amas afroperuanas fue una fotografía esencial
								en el álbum familiar y un signo de prestigio social. Estos álbumes constituían un
								relato o crónica visual de la familia y se colocaban en los salones de las
								residencias burguesas, donde eran admirados por visitantes y allegados.
							</p>
							<div className={`${styles.grid2} ${""}`}>
								<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
									<img
										loading="lazy"
										className="img-fluid mb-3"
										src={`${awsUrl}` + "amas-de-leche-3" + ".png"}
										alt=""
									/>
									<div className={`${styles.captionInfo} ${"captionInfo text-center"}`}>
										<p>
											<b>Pedro Tonesi y ama de leche</b>.
											Eugenio Courret. 1884
										</p>
									</div>
								</div>
								<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
									<img
										loading="lazy"
										className="img-fluid mb-3"
										src={`${awsUrl}` + "amas-de-leche-4" + ".png"}
										alt=""
									/>
									<div className={`${styles.captionInfo} ${"captionInfo text-center"}`}>
										<p>
											<b>Niña Chaize y ama de cría</b>.
											Eugenio Courret. 1883
										</p>
									</div>
								</div>
							</div>
						</div>
						<div></div>
					</div>
					<div className={`${styles.fullGrid} ${"fullGrid"}`}>

							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<Carousel className={`${styles.wrapCarousel} ${"wrapCarousel"}`} fade={true} controls={false} interval={null}>
										{[5, 6, 7, 8, 9].map((item, index) => {
											// return (
											// 	<Carousel.Item key={index}>
											// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											// 			<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
											// 				<p className="mb-0">
											// 					<b>Isidro Ernesto Ascher Freymann y ama</b>
											// 					<br />
											// 					Adolphe Dubreuil, 1903
											// 				</p>
											// 			</div>
											// 			<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
											// 				{/* <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" /> */}
											// 				<img
											// 					className="img-fluid"
											// 					src={`${awsUrl}` + `amas-de-leche-${item}` + ".png"}
											// 					alt=""
											// 				/>
											// 			</div>
											// 		</div>
											// 	</Carousel.Item>
											// );
										})}
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Isidro Ernesto Ascher Freymann y ama</b>
														<br />
														Adolphe Dubreuil, 1903
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + "amas-de-leche-5" + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Isidro Ernesto Ascher Freymann</b>
														<br />
														Adolphe Dubreuil, 1903
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + "amas-de-leche-6" + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Familia Ascher Freymann</b>
														<br />
														Adolphe Dubreuil, 1903
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + "amas-de-leche-7" + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Familia Ascher Freymann</b>
														<br />
														Adolphe Dubreuil, 1903
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + "amas-de-leche-8" + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Matrimonio Ascher Freymann</b>
														<br />
														Eugène Courret, 1880
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + "amas-de-leche-9" + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
									</Carousel>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
										<b>Paul Ascher fue un próspero comerciante</b> dedicado a la banca. Se casó con
										Minna Freymann el 27 de enero de 1880. En la primera imagen, el ama de leche
										sostiene en brazos al bebé Ascher, con el fin de que el pequeño sea el punto de
										mira del retrato. En las dos siguientes fotografías, tomadas en ocasión del
										bautizo del bebé Ascher, Adolphe Dubreuil retrató a la familia en dos ambientes:
										un fastuoso espacio conformado por un telón de fondo pintado con columnas,
										cortinaje y exteriores arbolados que están en armonía con el balcón de madera
										sobre el que se ubica el infante, quien es sostenido amorosamente por sus
										padres; y otro formado por un fondo neutro y liso, recurrente en los retratos de
										tres cuartos del estudio.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<Carousel className={`${styles.wrapCarousel} ${"wrapCarousel"}`} fade={true} controls={false} interval={null}>
										{[10, 11, 12].map((item, index) => {
											// return (
											// 	<Carousel.Item key={item}>
											// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											// 			<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
											// 				<p className="mb-0">
											// 					<b>José Luis Giacometti Soyer y nodriza</b>
											// 					<br />
											// 					Eugène Courret, 1888
											// 				</p>
											// 			</div>
											// 			<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
											// 				{/* <img className="img-fluid" src="/img/amas/familia ascher freymann.jpg" alt="" /> */}
											// 				<img
											// 					className="img-fluid"
											// 					src={`${awsUrl}` + `amas-de-leche-${item}` + ".png"}
											// 					alt=""
											// 				/>
											// 			</div>
											// 		</div>
											// 	</Carousel.Item>
											// );
										})}
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>José Luis Giacometti Soyer y nodriza</b>
														<br />
														Eugène Courret, 1888
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-10` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Familia Giacometti Soyer</b>
														<br />
														Eugène Courret, 1888
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-11` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Conde José Luis Giacometti Marzano de Visconti</b>
														<br />
														Eugène Courret, 1886
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-12` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
									</Carousel>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
										<b>El conde Giacometti Marzano de Visconti</b>, natural de Piacenza, Italia, se
										estableció en Lima como comerciante y contrajo matrimonio con la limeña Victoria
										Soyer Morote. La elegancia de sus vestimentas permite suponer que la familia
										acudió al estudio en el marco de la celebración del bautizo de su menor hijo,
										José Luis Giacometti, nacido el 25 de abril de 1888. Eugène Courret empleó una
										escenografía sobria de fondos lisos y neutros, alfombra y pedestales labrados de
										piedra y madera; y soporte común para retratar a los infantes. El gesto de
										protección y cercanía en el retrato está enfatizado en la postura de la nodriza.
									</p>
								</div>
							</div>
							{/* <div className={`${styles.gridCarousel} ${styles.gridCarouselAuto} ${"gridCarousel mb-160"}`}>
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
                            </div> */}
					</div>
				</section>
				<section className={styles.section4}>
					<div className={`${styles.containerGrid} ${"containerGrid"}`}>
						<div></div>
						<div>
							<p className={`${styles.titleSection3} ${"titleSection"}`}>
								El estudio y la construcción del retrato
							</p>
							<p>
								La casa Courret es reconocida por su notable construcción estética de la imagen
								fotográfica, lograda a partir del decorado de la escenografía, el mobiliario y las
								posturas que debían sostener los retratados, quienes reflejaban de cierta manera el
								rol que la sociedad les asignaba o pensaba sobre ellos. En el caso de los retratos
								de las amas de leche, el discurso visual vertido en estos retratos buscó transmitir
								familiaridad y un vínculo casi maternal entre el niño y su ama. Gestos como las
								manos entrelazadas y la misma proximidad, también se encuentran en las fotografías
								de estos infantes junto a sus madres biológicas.
							</p>
							<p>
								Generalmente, los pequeños eran ubicados sobre pedestales para que estén a la misma
								altura que sus nodrizas; también eran retratados en brazos o sobre el regazo de sus
								nodrizas, en medio de una escenografía compuesta por telones neutros o pintados con
								arquitecturas simuladas y una estancia bañada por una luz cenital que descendía a
								través de teatinas.
							</p>
						</div>
						<div></div>
					</div>
					<div className={`${styles.fullGrid} ${"fullGrid"}`}>
						<div>
							{/* <p className={`${styles.textBorder} ${"textBorder mb-64"}`}>
                                El bebé José Luis Giacometti nació el 25 de abril de 1888. La elegancia en las vestimentas de inspiración europea de los retratados permite suponer que la familia acudió al estudio en el marco de la celebración del bautizo de su menor hijo. Eugenio Courret empleó una escenografía sobria de fondos lisos y neutros, alfombra y pedestales labrados de piedra y madera; soporte común para retratar a los infantes. El gesto de protección y cercanía en el retrato está enfatizado en la postura de su nodriza.
                            </p> */}
							<div
								className={`${styles.gridCarousel} ${
									styles.gridCarouselAuto
								} ${"gridCarousel mb-160"}`}
							>
								<div className="d-flex align-items-center">
									<div className={`${styles.wrapCarousel} ${"wrapCarousel noIndicator"}`}>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
												<p className="mb-0">
													<b>Roberto Augusto Baudrot y amas</b>
													<br />
													Adolphe Dubreuil, 1896
												</p>
											</div>
											<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
												{/* <iframe
													className={`${styles.iframe1} ${styles.iframe} ${"iframe1"}`}
													src="/amas-de-leche/compar1"
													frameBorder="0"
												></iframe> */}
												<Compar1></Compar1>
											</div>
										</div>
									</div>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
									<b>Dos jóvenes nodrizas posaron</b> junto a Roberto Baudrot, hijo de Augusto Antonio Baudrot, un notable comerciante francés radicado en Lima. Una de ellas sonríe y sostiene al niño con su mano derecha; mientras que el ama ubicada en el fondo destaca por la elegancia de su atuendo, el cual reflejaría indirectamente el elevado estatus de la familia del menor. Las familias más acaudaladas podían contar con más de una nodriza para el cuidado de sus hijos.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<div className={`${styles.wrapCarousel} ${"wrapCarousel noIndicator"}`}>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
												<p className="mb-0">
													<b>Niño y dos amas</b>
													<br />
													Benjamin Franklin Pease
													<br />
													Ca. 1855, daguerrotipo
													<br />
													The Nelson-Atkins Museum of Art
												</p>
											</div>
											<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
												<img
													className="img-fluid"
													src={`${awsUrl}` + "amas-de-leche-15" + ".png"}
													alt=""
												/>
											</div>
										</div>
									</div>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
									<b>La composición</b> de los retratos previos remite a <b>Niño y dos amas</b>, uno de las primeros daguerrotipos o retratos de amas de leche o nodrizas afroperuanas, realizado por Benjamin Franklin Pease casi medio siglo antes. En esa imagen, las nodrizas flanquean y sostienen al niño ubicado sobre una lujosa silla Hepplewhite, mientras que en el fondo se aprecia la mano de una tercera persona escondida tras el cortinaje, quien sujeta la cabeza del infante para mantenerlo estable. Por la fecha aproximada de esta fotografía, es probable que estas mujeres afroperuanas fueran esclavas, lo cual estaría simbolizado y dulcificado en el fuete que sostiene el pequeño.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<Carousel className={`${styles.wrapCarousel} ${"wrapCarousel"}`} fade={true} controls={false} interval={null}>
										{[16, 17, 18, 19, 20].map((item) => {
											// return (
											// 	<Carousel.Item key={item}>
											// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											// 			<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
											// 				<p className="mb-0">
											// 					<b>Conde José Luis Giacometti Marzano de Visconti</b>
											// 					<br />
											// 					Eugenio Courret. 1886
											// 					<br />
											// 					12 cm. X 9cm
											// 				</p>
											// 			</div>
											// 			<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
											// 				<img
											// 					className="img-fluid"
											// 					src={`${awsUrl}` + `amas-de-leche-${item}` + ".png"}
											// 					alt=""
											// 				/>
											// 			</div>
											// 		</div>
											// 	</Carousel.Item>
											// );
										})}
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Carmen Gallagher Canaval y ama</b>
														<br />
														Eugène Courret, 1882
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-16` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Carmen Gallagher Canaval y ama</b>
														<br />
														Eugène Courret, 1882
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-17` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Carmen Gallagher Canaval y ama</b>
														<br />
														Eugène Courret, 1882
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-18` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>María Luisa Tudela Artieda y ama</b>
														<br />
														Eugène Courret, 1881
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-19` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>María Luisa Tudela Artieda y ama</b>
														<br />
														Eugène Courret, 1881
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-20` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
									</Carousel>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
									<b>Las nodrizas eran requeridas</b>, también, cuando se retrataba individualmente a los bebés y niños más pequeños. Ellas debían sostenerlos y, para no aparecer en el retrato, se ocultaban tras el mobiliario, como vemos en el retrato de la niña Carmen Gallagher. En las diferentes tomas se observa al ama sosteniendo a la pequeña a través de una cinta, detrás de la silla para quedar parcialmente fuera de la toma.
									<br />
									En algunos casos, las amas eran cubiertas completamente con un manto negro y borradas de la imagen. A lo largo del tiempo se han vertido diversas interpretaciones sobre esta presencia “ausente” de las amas: unas relacionadas con la invisibilización de las nodrizas por cuestiones étnicas o clasistas; mientras que otras refieren que se trataba de una técnica fotográfica. No tenemos ninguna certeza, pero aparentemente las personas cubiertas no eran las madres.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-100"}`}>
								<div className="d-flex align-items-center">
									<Carousel className={`${styles.wrapCarousel} ${"wrapCarousel"}`} fade={true} controls={false} interval={null}>
										{[21, 22, 23, 24].map((item) => {
											// return (
											// 	<Carousel.Item key={item}>
											// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											// 			<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
											// 				<p className="mb-0">
											// 					<b>Conde José Luis Giacometti Marzano de Visconti</b>
											// 					<br />
											// 					Eugenio Courret. 1886
											// 					<br />
											// 					12 cm. X 9cm
											// 				</p>
											// 			</div>
											// 			<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
											// 				<img
											// 					className="img-fluid"
											// 					src={`${awsUrl}` + `amas-de-leche-${item}` + ".png"}
											// 					alt=""
											// 				/>
											// 			</div>
											// 		</div>
											// 	</Carousel.Item>
											// );
										})}
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>María Dubois y ama</b>
														<br />
														Adolphe Dubreuil, 1894
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-21` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>María Dubois y ama</b>
														<br />
														Adolphe Dubreuil, 1894
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-22` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Niña Kitz Dibós y ama</b>
														<br />
														Adolphe Dubreuil, 1897
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-23` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Niña Kitz Dibós y hermana</b>
														<br />
														Adolphe Dubreuil, 1897
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-24` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
									</Carousel>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
									<b>En una misma sesión fotográfica</b>, se realizaban diversos retratos del infante, incluyendo el retrato con su nodriza. El ama de leche de María Dubois fue captada llevando aretes de perla y un sobrio uniforme. La niña posó además en un retrato individual o en solitario. Por otro lado, la nodriza de la pequeña Kitz Dibós fue fotografiada cómodamente sentada al mismo nivel que la niña, en una composición recurrente en los retratos de Dubreuil. En otra fotografía, ubicada sobre la misma pequeña mesa, está acompañada por su hermana mayor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <section className={styles.section5}>
                    <div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
                        <div></div>
                        <div>
                            <div className={`${styles.gridCarousel} ${styles.gridCarouselAuto} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <div className="mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                <p className="mb-0">
                                                <b>Clinton Evans Gallagher y ama.</b>
                                                <br />
                                                Eugenio Courret. 1880
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
                                        El bebé Clinton Evans sería retratado por el Estudio Courret hasta su adolescencia. El retrato con su joven ama de leche afroperuana sería una de las imágenes más representativas de esta familia limeña.
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
                                                    <b>Clinton Evans Gallagher y ama.</b>
                                                    <br />
                                                    Eugenio Courret. 1880
                                                    <br />
                                                    18 cm, x 13 cm.
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
                                        Ysabel Gallagher falleció repentinamente dos años después de la realización de este retrato junto a su mejor hijo.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.gridCarouselWidth} ${"mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <div className="mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg mb-5"}`}>
                                                <img className="img-fluid" src="/img/amas/don norman e hijo.jpg" alt="" />
                                            </div>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption pe-0 text-center"}`}>
                                                <p className="mb-0">
                                                <b>Don Norman Evans e hijo Norman John y nieta.</b>
                                                <br />
                                                Adolfo Dubreuil.
                                                <br />
                                                18cm. x 24cm.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}>
                                        El patriarca Norman Evans, natural de Inglaterra, se estableció en Lima en la década de 1860. Se casó con la arequipeña Ysabel Gallagher. Fue uno de los fundadores del Club Callao, exclusivo lugar de reunión de la comunidad inglesa en la capital. En este retrato realizado por A. Dubreuil, están reunidas tres generaciones de esta familia: Norman Evans acompañado de su hijo Johm y su pequeña nieta, quienes posan en medio de una suntuosa escenografía y mobiliario que imita un espacio residencial burgués.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section> */}
				<section className={styles.section5}>
					<div className={`${styles.containerGrid} ${"containerGrid"}`}>
						<div className={`${styles.linkMenu} ${"ps-0 ps-xl-5"}`}>
							{/* <Link href="./#menuPrincipal">
                                <a className={`${styles.linkMenu} ${"d-inline-flex flex-column align-items-center color-inherit"}`}>
                                    <div className="mb-2">
                                        <ButtonMove dir="up"/>
                                    </div>
                                    <span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
                                </a>
                            </Link> */}
						</div>
						<div>
							<p className={`${styles.titleSection1} ${"titleSection"}`}>
								Mujeres afroperuanas en el Perú del siglo XIX
							</p>
							<p className="mb-5">
								Tras la abolición de la esclavitud en 1854, las mujeres afroperuanas buscaron
								diversos medios para subsistir en una sociedad donde el color de la piel, el grado
								de instrucción y el estatus socioeconómico teñían cada estamento. De acuerdo con el
								censo de Lima de 1860, muchas de ellas se dedicaban a la venta y producción de
								alimentos, administraban pequeños negocios o eran costureras, trabajadoras
								domésticas y nodrizas, entre otros oficios.
							</p>
							<p className="mb-5">
								También ofrecían sus servicios como ama de leche o ama de cría. No obstante, este no
								fue un oficio cualquiera, pues, a pesar del modesto salario, estas mujeres se
								vinculaban directamente con el núcleo familiar de las esferas más altas de la
								sociedad limeña, nutriendo y asistiendo a los más pequeños. Para su contratación, se
								les solicitaba cumplir con rigurosos requisitos, tales como contar con una excelente
								salud, conducta y moral intachable.
							</p>
							<p className="mb-5">
								La fotografía desveló de forma masiva esta antigua práctica, llenando los álbumes
								familiares y las tarjetas de visita.
							</p>
						</div>
						<div></div>
					</div>
					<div className={`${styles.fullGrid} ${"fullGrid"}`}>
						<div>
							<div
								className={`${styles.gridCarousel} ${
									styles.gridCarouselAuto
								} ${"gridCarousel mb-160"}`}
							>
								<div className="d-flex align-items-center">
									<div className={`${styles.wrapCarousel} ${"wrapCarousel noIndicator"}`}>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
												<p className="mb-0">
													<b>José Arias y ama</b>
													<br />
													Eugène Courret, 1889
												</p>
											</div>
											<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
												{/* <iframe
													className={`${styles.iframe2} ${styles.iframe} ${"iframe2"}`}
													src="/amas-de-leche/compar2"
													frameBorder="0"
												></iframe> */}
												<Compar2></Compar2>
											</div>
										</div>
									</div>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
									<b>En la época, las sesiones fotográficas</b> eran extensas y los retratados debían sostener la pose durante todo el proceso, lo cual era especialmente difícil si se trataba de un niño. Por ello, la presencia de su ama era indispensable para tratar de asegurar el éxito del retrato. Para conseguir el retrato del bebé Arias y su nodriza, se realizaron diversas tomas en las que el escurridizo pequeño arranca las sonrisas de su ama.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<Carousel className={`${styles.wrapCarousel} ${"wrapCarousel"}`} fade={true} controls={false} interval={null}>
										{[27, 28].map((item) => {
											// return (
											// 	<Carousel.Item key={item}>
											// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											// 			<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
											// 				<p className="mb-0">
											// 					<b>Conde José Luis Giacometti Marzano de Visconti</b>
											// 					<br />
											// 					Eugenio Courret. 1886
											// 					<br />
											// 					12 cm. X 9cm
											// 				</p>
											// 			</div>
											// 			<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
											// 				<img
											// 					className="img-fluid"
											// 					src={`${awsUrl}` + `amas-de-leche-${item}` + ".png"}
											// 					alt=""
											// 				/>
											// 			</div>
											// 		</div>
											// 	</Carousel.Item>
											// );
										})}
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>René Melot y ama</b>
														<br />
														Adolphe Dubreuil, 1912
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-27` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>René Melot y ama</b>
														<br />
														Adolphe Dubreuil, 1912
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-28` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
									</Carousel>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
									<b>Ante un telón de fondo decorado</b> con un cortinaje y una estancia interior, el bebé Melot y su ama fueron retratados en distintas composiciones. En la primera, la nodriza sostiene al pequeño en su regazo mientras que, en la segunda, se agregó una pequeña mesa y se colocó al niño a la misma altura que su ama, generando así una mayor cercanía entre ambos. Ella mira hacia la cámara en tanto que el bebé sonríe y dirige su mirada hacia un punto detrás de la toma fotográfica, posiblemente en donde se encuentra uno de sus padres.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<Carousel className={`${styles.wrapCarousel} ${"wrapCarousel"}`} fade={true} controls={false} interval={null}>
										{[29, 30, 31, 32, 33, 34, 35].map((item) => {
											// return (
											// 	<Carousel.Item key={item}>
											// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											// 			<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
											// 				<p className="mb-0">
											// 					<b>Conde José Luis Giacometti Marzano de Visconti</b>
											// 					<br />
											// 					Eugenio Courret. 1886
											// 					<br />
											// 					12 cm. X 9cm
											// 				</p>
											// 			</div>
											// 			<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
											// 				<img
											// 					className="img-fluid"
											// 					src={`${awsUrl}` + `amas-de-leche-${item}` + ".png"}
											// 					alt=""
											// 				/>
											// 			</div>
											// 		</div>
											// 	</Carousel.Item>
											// );
										})}
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Carlos Grace y ama</b>
														<br />
														Eugène Courret, 1881
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-29` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Manuel Valverde y ama</b>
														<br />
														Eugène Courret, 1879
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-30` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Niña Alzamora Ciccero y ama</b>
														<br />
														Eugène Courret, 1885
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-31` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Enrique Meiggs y ama</b>
														<br />
														Adolphe Dubreuil, 1894
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-32` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Consuelo Quintana y ama</b>
														<br />
														Eugène Courret, 1889
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-33` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Andrea Seguín y ama</b>
														<br />
														Eugène Courret, 1879
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-34` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
										<Carousel.Item>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
													<p className="mb-0">
														<b>Andrés Larco y ama</b>
														<br />
														Adolphe Dubreuil, 1895
													</p>
												</div>
												<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
													<img
														className="img-fluid"
														src={`${awsUrl}` + `amas-de-leche-35` + ".png"}
														alt=""
													/>
												</div>
											</div>
										</Carousel.Item>
									</Carousel>
								</div>
								<div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
									<p className={`${styles.text} ${"text mb-0"}`}>
									<b>La gran mayoría de amas afroperuanas</b> fue retratada vistiendo una mantilla o pañolón largo colocado por encima de la cabeza. Las mujeres de la clase alta también la usaron, pero de finas telas ornamentadas con bordados, mientras que las clases bajas emplearon tejidos más sencillos como el algodón o el lino. Esta prenda habría buscado reflejar la decencia y religiosidad de quien la portaba, cualidades admiradas y requeridas en una nodriza.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={styles.section6}>
					<div className={`${styles.fullGrid} ${"fullGrid pb-3 pb-md-5"}`}>
						<div className={`${styles.boxText} ${"mb-3 mb-md-5"}`}>
							<div className="titleHome text-uppercase mb-1">
								¿QUIÉRES SABER MÁS
								<br />
								SOBRE EL RETRATO EN
								<br />
								EL SIGLO XIX?
							</div>
							<div className="mb-4">
								<img className="underline-arrows" src="/img/svg/flechas_piel(37).svg" alt="" />
							</div>
						</div>
						<div className={`${styles.containerVideos} ${"containerVideos"}`}>
							<div className={`${styles.video1} ${"wrapperVideo mb-5"}`}>
								<video
									className="w-100"
									src="https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Martin+Alvarado-1.m4v"
									controls
									poster={`${awsUrlVideo}el-estudio-courret-y-la-fotografia-de-las-amas-de-leche-afroperuanas-de-fines-del-xix.png`}
								></video>
								<div className={`${styles.infoVideo} ${"infoVideo"}`}>
									<div className={`${styles.mirar} ${"mirar"}`}></div>
									<div className={`${styles.titulo} ${"titulo"}`}>
										<b>¿Cuál fue el devenir y la importancia del retrato en el Perú en el siglo XIX?</b>
										<br />
										<span>Sofía Pachas. Historiadora del arte</span>
									</div>
									<div className="descripcion"></div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <section className={styles.section6}>
                    <div className={`${styles.containerGrid2} ${"containerGrid2"}`}>
                        <div className={`${styles.linkMenu} ${"ps-0 ps-xl-5"}`}>
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
                                    <div className="w-100 mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                <p className="mb-0">
                                                <b>YCarlos Grace y Ama.</b>
                                                <br />
                                                Eugenio Courret, 1881.
                                                <br />
                                                12 cm. x 18 cm.
                                                </p>
                                            </div>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                <iframe className={`${styles.iframe3} ${styles.iframe} ${"iframe3"}`} src="/amas-de-leche/compar1" frameBorder="0"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}>
                                        <b>Las familias más acaudaladas</b> podían permitirse contar con más de una nodriza para el cuidado de sus hijos, este fue el caso del pequeño Roberto Baudrot, quien fue retratado junto a sus dos jóvenes amas. Una de ellas sonríe y sostiene al niño con su mano derecha; mientras que la nodriza ubicada en el fondo destaca por la elegancia de su atuendo, el cual reflejaría indirectamente el elevado estatus de esta familia. Roberto Baudrot fue hijo de Augusto Antonio Baudrot, un notable comerciante francés radicado en Lima.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.gridCarousel} ${styles.gridCarouselAuto} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <div className="mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                <p className="mb-0">
                                                <b>Familia Ascher Freymann</b>
                                                <br />
                                                Adolfo Dubreuil. 1903
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
                                        <b>La composición de estos retratos</b> nos remite a una de las primeras fotografías o retratos de amas o nodrizas afroperuanas realizada por Benjamin Franklin Pease casi medio siglo antes: “El Patroncito” o “Niño y dos amas”. En este daguerrotipo, dos amas flanquean y sostienen a un niño ubicado sobre una lujosa silla Hepplewhite, mientras una tercera persona escondida en el fondo sujeta la cabeza del infante para mantenerlo estable. Por la fecha aproximada de esta fotografía, es probable que estas mujeres fueron retratadas en condición de esclavitud, lo cual estaría simbolizado y dulcificado en el fuete que sostiene el pequeño “amito”.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section> */}
				{/* <section className={styles.section7}>
                    <div className={`${styles.containerGrid2} ${"containerGrid2"}`}>
                        <div></div>
                        <div>
                            <div className={`${styles.gridCarousel} ${styles.gridCarouselAuto} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <div className="mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                <p className="mb-0">
                                                <b>Andrés Larco y Ama.</b>
                                                <br />
                                                Adolfo Dubreuil, 1895
                                                <br />
                                                13 cm. x 18 cm.
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
                                        Este retrato fue la imagen de la VII versión del Mes de la Fotografía de Paris en el año 1994, la que reunió más de noventa exposiciones de todo el mundo y en la queparticipó nuestro país con la celebrada exposición “Memoria de una ciudad. Estudio Fotográfico Courret Hnos. (1863-1935)”.
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
                                                    <b>Ada Peters Brown y nodriza.</b>
                                                    <br />
                                                    Wenderoth, Taylor & Brown, 1860.
                                                    <br />
                                                    Pensilvania, Estados Unidos.
                                                    <br />
                                                    Carta de visita, 10cm. X 6cm.
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
                                        Otros paises Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, iste debitis. Labore voluptatibus harum aperiam perferendis nihil explicabo quos doloremque iusto, tenetur ex culpa, voluptatum quas, fugit earum eveniet fugiat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section> */}
				{/* <section className={styles.section8}>
                    <div className={`${styles.containerGrid2} ${"containerGrid2"}`}>
                        <div></div>
                        <div>
                            <div className={`${styles.gridCarousel} ${styles.gridCarouselNoText} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <div className="mb-5">
                                        <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                            <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                <p className="mb-0">
                                                <b>Familia Ascher Freymann</b>
                                                <br />
                                                Adolfo Dubreuil. 1903
                                                </p>
                                            </div>
                                            <div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
                                                <img className="img-fluid" src="/img/amas/ysidro y ama.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.wrappertextDescImg} ${"wrappertextDescImg mb-0"}`}>
                                    <p className={`${styles.text} ${"text mb-0"}`}></p>
                                </div>
                            </div>
                            <div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
                                <div className="d-flex align-items-center">
                                    <Carousel className="mb-5" fade={true} controls={false} interval={null}>
                                        <Carousel.Item>
                                            <div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
                                                <div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
                                                    <p className="mb-0">
                                                    <b>Manuel Valverde y ama.</b>
                                                    <br />
                                                    Eugenio Courret, 1879.
                                                    <br />
                                                    12 cm. x 9 cm.
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
                                        La mayoría de las amas fueron retratadas vistiendo un pañolón largo o mantilla negra. Las mujeres de clase alta la usaron con telas finas de ricos bordados, mientras que las clases bajas emplearon telas más sencillas como el algodón o el lino. Se ha dicho que esta prenda reflejaba la decencia y religiosidad de quien la portaba, cualidades admiradas en una nodriza.
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
                                                    <b>René Melot y ama</b>
                                                    <br />
                                                    Adolfo Dubreuil, 1912
                                                    <br />
                                                    13 cm. x 18 cm
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
                                        <b>Ante un telón de fondo decorado</b> con un cortinaje y una estancia interior, el bebé Melot y su ama fueron retratados en distintas composiciones. En la primera, la nodriza sostiene al pequeño en su regazo mientras que, en la segunda, Dubreuil agregó una pequeña mesa colocando al niño a la misma altura que su ama, generando así una mayor cercanía entre ambos. Ella mira hacia la cámara en tanto que el bebé sonríe y dirige su mirada hacia un punto detrás de la toma fotográfica, posiblemente en donde se encuentra uno de sus padres.
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
                                                    <b>Carmen Gallagher Canaval</b>
                                                    <br />
                                                    Eugenio Courret, 1882.
                                                    <br />
                                                    12 cm. X 18cm
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
                                        Estas nodrizas eran requeridas, además, cuando se retrataba individualmente a los bebés y niños más pequeños. Ellas debían sostenerlos y, para no aparecer en el retrato, se les pedía ocultarse tras el mobiliario como vemos en el retrato de la niña Carmen Gallagher. En estas diferentes tomas se observa cómo el ama sostiene a la pequeña a través de una cinta mientras se ubica detrás de la silla para quedar parcialmente fuera de la toma. En algunos casos, se las cubría completamente con un manto negro borrándolas o anulándolas de la imagen. No obstante, la presencia “ausente” de estas amas cubiertas o escondidas en estas fotografías es lo que llama poderosamente nuestra atención. A lo largo del tiempo se han vertido diversas interpretaciones sobre estos retratos, unas relacionadas con la invisibilización de estas nodrizas por cuestiones étnicas o clasistas; mientras otras refieren que se trató de una técnica fotográfica más. No tenemos ninguna certeza, pero aparentemente no eran las madres de la élite a quienes se cubría.
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
                                                    <b>María Dubois y ama</b>
                                                    <br />
                                                    Adolfo Dubreuil, 1894
                                                    <br />
                                                    13 cm. x 18 cm
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
                                        <b>En una misma sesión fotográfica</b>, se realizaban diversos retratos del infante: uno junto a su ama de leche, un retrato individual o en solitario y diversos retratos junto a sus familiares.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section> */}
			</Layout>
		</>
	);
}

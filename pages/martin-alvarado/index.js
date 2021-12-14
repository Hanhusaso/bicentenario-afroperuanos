import Layout from "../../components/Layout";
import styles from "./martin-alvarado.module.scss";
import ButtonMove from "../../components/ButtonMove";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { Link as LinkScroll, Element } from "react-scroll";
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const awsUrlAlvarado = "https://afroperuanos.s3.us-east-2.amazonaws.com/fotos-alvarado/";
const awsUrlVideo = "https://afroperuanos.s3.us-east-2.amazonaws.com/videos/";

export default function index() {
	return (
		<>
			<Layout
				title="Martín Alvarado"
				path="/martin-alvarado"
				description="Martín Alvarado Gamarra lleva más de 30 años recorriendo nuestro país documentando con su cámara fotográfica diferentes modos de vida, festividades, personajes, danzas, música y tradiciones. Uno de los motivos fundamentales de su obra es visibilizar la presencia afroperuana en nuestro país, buscando contribuir, a través de su extensa labor fotográfica, al conocimiento y preservación de su memoria cultural y colectiva. Martín Alvarado, ha construido el archivo fotográfico del acervo afrodescendiente más grande del país."
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
										href="whatsapp://send?text=https://bicentenario-afroperuanos.vercel.app/martin-alvarado"
										data-action="share/whatsapp/share"
										className="d-inline-block color-inherit me-1"
									>
										<FaWhatsapp className="icon" />
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="http://www.facebook.com/sharer.php?u=https://bicentenario-afroperuanos.vercel.app/martin-alvarado&quote="
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
										href="https://twitter.com/intent/tweet?text=https://bicentenario-afroperuanos.vercel.app/martin-alvarado"
										className="d-inline-block color-inherit me-2"
									>
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
                                        <img loading="lazy" className="text-2" src="/img/svg/MARTIN ALVARADO/ALVARADO.svg" alt="alvarado" />
                                        <div className="wrapper-arrow-text">
                                            <img loading="lazy" className="flechas" src="/img/svg/MARTIN ALVARADO/flechas_rosa_claro(36).svg" alt="flechas" />
                                        </div>
                                        <img loading="lazy" className="text-3" src="/img/svg/MARTIN ALVARADO/CRÓNICAS AFROPERUANAS.svg" alt="crónicas afroperuanas" />
                                    </div>
									<div className={`${styles.gridDescImg} ${"gridDescImg"}`}>
                                        <div className={`${styles.partText} ${"partText lh-normal"}`}>
                                            <p className="mb-0">Martín Alvarado Gamarra lleva más de 30 años recorriendo nuestro país documentando con su cámara fotográfica diferentes modos de vida, festividades, personajes, danzas, música y tradiciones. Uno de los motivos fundamentales de su obra es visibilizar la presencia afroperuana en nuestro país, buscando contribuir, a través de su extensa labor fotográfica, al conocimiento y preservación de su memoria cultural y colectiva. Martín Alvarado, ha construido el archivo fotográfico del acervo afrodescendiente más grande del país.</p>
                                            <p className="mb-0">Su exposición DIA 100, inaugurada en el año 2017, reunió las imágenes de un centenar de compatriotas orgullosos de su ascendencia africana, quienes expresaron por escrito su sentir ante la discriminación, el racismo y los estereotipos que persisten en nuestra sociedad y continúa estigmatizándolos. La muestra fue inaugurada en el marco del Decenio Internacional de los Afrodescendientes (2015-2025) proclamado por la ONU y el Mes de la Cultura Afroperuana celebrado en junio de cada año desde el 2014.</p>
                                            <p className="mb-0">Como afroperuano, el artista sufrió en carne viva prejuicios. Sus imágenes son testimonios visuales que buscan conformar un manifiesto que aboga por el respeto, la igualdad y el reconocimiento de la identidad, presencia y legado cultural afroperuano.</p>
                                        </div>
									</div>
								</div>
								<div>
									<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
										<img
											loading="lazy"
                                            className={`${styles.imgInicioMartin} ${"img-fluid"}`}
											src={`${awsUrlAlvarado}` + "martin-alvarado-portada" + ".png"}
											alt=""
										/>
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
						<div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
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
								<div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
									<img
										loading="lazy"
										className="arrow left"
										src="/img/svg/flechas_rosa-claro(18).svg"
										alt="arrows"
									/>
									<p className="mb-0">
                                        “DIA 100 significa en sus siglas, Decenio Internacional del Afrodescendiente (DIA), y el número cien representa a las cien personas que han sido fotografiadas. El proyecto tiene como punto de partida la idea de mostrar lo mucho que aportan a diario los afroperuanos y las afroperuanas a este país; señalar que la cantidad de afrodescendientes luchadores y profesionales es mayor a lo que se imaginan muchas personas; y romper con las ideas que estereotipan a la población afroperuana como bailarines, deportistas o cocineros. Además, Día 100 busca el reconocimiento específico de los y las profesionales afro en el país y cómo este puede inspirar y educar a las personas para seguir trabajando en la erradicación del racismo”.
									</p>
									<img
										loading="lazy"
										className="arrow right"
										src="/img/svg/flechas_rosa-claro(18).svg"
										alt="arrows"
									/>
								</div>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{["01", "02", "03", "04", "05", "06", "07", "08", "09", 10].map((item) => {
										return (
											<Carousel.Item key={item}>
												<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
													<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
														<img
															className="img-fluid"
															src={`${awsUrlAlvarado}` + item + ".png"}
															alt=""
															loading="lazy"
														/>
													</div>
													<p className="captionInfo mb-0">
														Lorem ipsum dolor, sit amet consectetur adipisicing.
													</p>
												</div>
											</Carousel.Item>
										);
									})}
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item) => {
										return (
											<Carousel.Item key={item}>
												<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
													<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
														<img
															className="img-fluid"
															src={`${awsUrlAlvarado}` + item + ".png"}
															alt=""
															loading="lazy"
														/>
													</div>
													<p className="captionInfo mb-0">
														Lorem ipsum dolor, sit amet consectetur adipisicing.
													</p>
												</div>
											</Carousel.Item>
										);
									})}
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((item) => {
										return (
											<Carousel.Item key={item}>
												<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
													<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
														<img
															className="img-fluid"
															src={`${awsUrlAlvarado}` + item + ".png"}
															alt=""
															loading="lazy"
														/>
													</div>
													<p className="captionInfo mb-0">
														Lorem ipsum dolor, sit amet consectetur adipisicing.
													</p>
												</div>
											</Carousel.Item>
										);
									})}
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
							<div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
								<img
									loading="lazy"
									className="arrow left"
									src="/img/svg/flechas_rosa-claro(18).svg"
									alt="arrows"
								/>
								<p className="mb-0">
                                “El contenido de Día 100 es un registro fotográfico con historias de hombres, mujeres, niñas, niños, adolescentes y jóvenes afrodescendientes, enfocando al Perú de forma transversal; con ello pretende visibilizar y reconocer la vida de todas y todos aquellos que viven en exclusión, racismo y discriminación por la constante y denigrante práctica de encasillar y atribuir prejuicios a pueblos; lo cual forma parte de la violencia física y psicológica que se ejerce por la condición étnico-racial de un ser humano”.
								</p>
								<img
									loading="lazy"
									className="arrow right"
									src="/img/svg/flechas_rosa-claro(18).svg"
									alt="arrows"
								/>
							</div>
							<Carousel
								className={`${styles.carousel} ${"carousel"}`}
								fade={true}
								controls={false}
								interval={null}
							>
								{[31, 32, 33, 34, 35, 36, 37, 38, 39, 40].map((item) => {
									return (
										<Carousel.Item key={item}>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
													<img
														className="img-fluid"
														src={`${awsUrlAlvarado}` + item + ".png"}
														alt=""
														loading="lazy"
													/>
												</div>
												<p className="captionInfo mb-0">
													Lorem ipsum dolor, sit amet consectetur adipisicing.
												</p>
											</div>
										</Carousel.Item>
									);
								})}
							</Carousel>
							<Carousel
								className={`${styles.carousel} ${"carousel"}`}
								fade={true}
								controls={false}
								interval={null}
							>
								{[41, 42, 43, 44, 45, 46, 47, 48, 49, 50].map((item) => {
									return (
										<Carousel.Item key={item}>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
													<img
														className="img-fluid"
														src={`${awsUrlAlvarado}` + item + ".png"}
														alt=""
														loading="lazy"
													/>
												</div>
												<p className="captionInfo mb-0">
													Lorem ipsum dolor, sit amet consectetur adipisicing.
												</p>
											</div>
										</Carousel.Item>
									);
								})}
							</Carousel>
							<Carousel
								className={`${styles.carousel} ${"carousel"}`}
								fade={true}
								controls={false}
								interval={null}
							>
								{[51, 52, 53, 54, 55, 56, 57, 58, 59, 60].map((item) => {
									return (
										<Carousel.Item key={item}>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
													<img
														className="img-fluid"
														src={`${awsUrlAlvarado}` + item + ".png"}
														alt=""
														loading="lazy"
													/>
												</div>
												<p className="captionInfo mb-0">
													Lorem ipsum dolor, sit amet consectetur adipisicing.
												</p>
											</div>
										</Carousel.Item>
									);
								})}
							</Carousel>
						</div>
						<div></div>
					</div>
				</section>
				<section className={styles.section4}>
					<div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
						<div></div>
						<div>
							<div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
								<img
									loading="lazy"
									className="arrow left"
									src="/img/svg/flechas_rosa-claro(18).svg"
									alt="arrows"
								/>
								<p className="mb-0">
                                “El pueblo afroperuano forma parte de las poblaciones vulneradas, invisibilizadas e injustamente marcadas por la esclavitud y trata de personas. Este proyecto contó con el apoyo de la Dirección de Políticas Públicas para la Población Afroperuana del Viceministerio de Interculturalidad perteneciente al Ministerio de Cultura del Perú y por supuesto con la hermosa historia de cada uno de las y los afroperuanos que participaron y suman para desmitificar, visibilizar y luchar contra la discriminación étnico-racial del pueblo afroperuano”.
								</p>
								<img
									loading="lazy"
									className="arrow right"
									src="/img/svg/flechas_rosa-claro(18).svg"
									alt="arrows"
								/>
							</div>
							<Carousel
								className={`${styles.carousel} ${"carousel"}`}
								fade={true}
								controls={false}
								interval={null}
							>
								{[61, 62, 63, 64, 65, 66, 67, 68, 69, 70].map((item) => {
									return (
										<Carousel.Item key={item}>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
													<img
														className="img-fluid"
														src={`${awsUrlAlvarado}` + item + ".png"}
														alt=""
														loading="lazy"
													/>
												</div>
												<p className="captionInfo mb-0">
													Lorem ipsum dolor, sit amet consectetur adipisicing.
												</p>
											</div>
										</Carousel.Item>
									);
								})}
							</Carousel>
							<Carousel
								className={`${styles.carousel} ${"carousel"}`}
								fade={true}
								controls={false}
								interval={null}
							>
								{[71, 72, 73, 74, 75, 76, 77, 78, 79, 80].map((item) => {
									return (
										<Carousel.Item key={item}>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
													<img
														className="img-fluid"
														src={`${awsUrlAlvarado}` + item + ".png"}
														alt=""
														loading="lazy"
													/>
												</div>
												<p className="captionInfo mb-0">
													Lorem ipsum dolor, sit amet consectetur adipisicing.
												</p>
											</div>
										</Carousel.Item>
									);
								})}
							</Carousel>
							<Carousel
								className={`${styles.carousel} ${"carousel"}`}
								fade={true}
								controls={false}
								interval={null}
							>
								{[81, 82, 83, 84, 85, 86, 87, 88, 89, 90].map((item) => {
									return (
										<Carousel.Item key={item}>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
													<img
														className="img-fluid"
														src={`${awsUrlAlvarado}` + item + ".png"}
														alt=""
														loading="lazy"
													/>
												</div>
												<p className="captionInfo mb-0">
													Lorem ipsum dolor, sit amet consectetur adipisicing.
												</p>
											</div>
										</Carousel.Item>
									);
								})}
							</Carousel>
							<Carousel
								className={`${styles.carousel} ${"carousel"}`}
								fade={true}
								controls={false}
								interval={null}
							>
								{[91, 92, 93, 94, 95, 96, 97, 98, 99, 100].map((item) => {
									return (
										<Carousel.Item key={item}>
											<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
												<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
													<img
														className="img-fluid"
														src={`${awsUrlAlvarado}` + item + ".png"}
														alt=""
														loading="lazy"
													/>
												</div>
												<p className="captionInfo mb-0">
													Lorem ipsum dolor, sit amet consectetur adipisicing.
												</p>
											</div>
										</Carousel.Item>
									);
								})}
							</Carousel>
							{/* <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
								<img
									loading="lazy"
									className="arrow left"
									src="/img/svg/flechas_rosa-claro(18).svg"
									alt="arrows"
								/>
								<p className="mb-0">
									“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
									euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
								</p>
								<img
									loading="lazy"
									className="arrow right"
									src="/img/svg/flechas_rosa-claro(18).svg"
									alt="arrows"
								/>
                                </div> */}
						</div>
						<div></div>
					</div>
				</section>
                <section className={styles.section5}>
					<div className={`${styles.fullGrid} ${"fullGrid pb-3 pb-md-5"}`}>
						<div className={`${styles.boxText} ${"mb-3 mb-md-5"}`}>
							<div className="titleHome text-uppercase mb-1">
								PRESERVACIÓN DE LA
								<br />
								MEMORIA AFROPERUANA
							</div>
							<div className="mb-4">
								<img className="underline-arrows" src="/img/svg/flechas_azul(37).svg" alt="" />
							</div>
						</div>
						<div className={`${styles.minWrap} ${"minWrap"}`}>
							<p className="mb-0">
                                Martín Alvarado se inició como fotógrafo deportivo, luego de lo cual llegó a ser editor gráfico de los periódicos El Sol, El Comercio, Correo y La República. A partir del año 2000 fue productor del programa de televisión Costumbres, plataforma que ha documentado la cultura viva en diversas provincias del Perú. Producto de esta labor, en el año 2005 presentó la muestra “Este es mi cariño”, que recopiló 87 fotografías realizadas durante el primer lustro de emisión del programa. 
							</p>
                            <p className="mb-0">Su obra fotográfica ha sido presentada en diversas exposiciones individuales y colectivas, y recopilada en varias publicaciones, como Fiestas, Calendario y Costumbres de Sonaly Tuesta (2010) y el libro de su autoría titulado Marcados de Fiesta (2015). Su arte ha trascendido nuestras fronteras, llegando a países como Colombia, República Dominicana, España, Francia y China.</p>
                            <p className="mb-0">Entre sus exposiciones esta Afroperuanos (2009), donde Alvarado reúne imágenes de emblemáticas figuras de la música y el deporte, como el gran Amador Ballumbrosio o el futbolista Sandro Baylón. Asimismo, retrata la religiosidad presente en la recordada Misa Afroperuana de Lima; y capta en todo su esplendor distintas danzas tradicionales, como el “Hatajo de Negritos” y “Las Pallitas’’ de El Carmen (Ica) o la “danza de los Negritos de Zaña” (Piura). En esta muestra buscó, además, visibilizar otros espacios o áreas conquistadas por los afroperuanos, tales como la política, la ciencia o el ámbito académico, denunciando así los encasillamientos de un sistema que los reconoce o circunscribe solo a determinados oficios o prácticas. Su siguiente exposición, Mujeres afroperuanas (2011), presenta diversos retratos de mujeres y madres que triunfan como emprendedoras, empresarias, artistas, modelos y profesionales de la salud y que en conjunto representan un valioso ejemplo de la enorme capacidad, superación y aporte al desarrollo del país.</p>
                            <p className="mb-0">Gracias a su trabajo artístico y labor en favor de la visibilización de la cultura afroperuana, ha recibido distintas distinciones, entre las que se encuentran el “Premio a la Excelencia en Fotografía” por la Universidad de Harvard en 2014 y la “Personalidad Meritoria de la Cultura”, otorgada por el Ministerio de Cultura en 2015. En el 2021 dirigió y produjo el documental <b>Josef: el inicio de una historia</b>.</p>
						</div>
					</div>
				</section>
                <section className={styles.section6}>
					<div className={`${styles.fullGrid} ${"fullGrid pb-3 pb-md-5"}`}>
						<div className={`${styles.boxText} ${"mb-3 mb-md-5"}`}>
							<div className="titleHome text-uppercase mb-1">
								¿QUIÉRES SABER MÁS SOBRE
								<br />
								LA PROPUESTA ARTÍSTICA DE
								<br />
								MARTÍN ALVARADO?
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
									poster={`${awsUrlVideo}Video+Martin+Alvarado-03+1.png`}
								></video>
								<div className={`${styles.infoVideo} ${"infoVideo"}`}>
									<div className={`${styles.mirar} ${"mirar"}`}></div>
									<div className={`${styles.titulo} ${"titulo"}`}>
										<b>Testimonio del artista</b>
										<br />
										<span>Martín Alvarado. Fotógrafo y productor audiovisual</span>
									</div>
									<div className="descripcion"></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}

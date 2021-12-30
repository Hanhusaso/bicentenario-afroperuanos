import Layout from "../../../components/Layout";
import styles from "../../martin-alvarado//martin-alvarado.module.scss";
import ButtonMove from "../../../components/ButtonMove";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { Link as LinkScroll, Element } from "react-scroll";
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const awsUrlAlvarado = "https://afroperuanos.s3.us-east-2.amazonaws.com/fotos-alvarado/";
const awsUrlVideo = "https://afroperuanos.s3.us-east-2.amazonaws.com/videos/";

export default function index() {
	return (
		<div className={styles.main}>
			<Layout
				title="Martín Alvarado"
				path="/martin-alvarado"
				description="Martín Alvarado Gamarra lleva más de 30 años recorriendo nuestro país documentando con su cámara fotográfica diferentes modos de vida, festividades, personajes, danzas, música y tradiciones. Uno de los motivos fundamentales de su obra es visibilizar la presencia afroperuana en nuestro país, buscando contribuir, a través de su extensa labor fotográfica, al conocimiento y preservación de su memoria cultural y colectiva. Martín Alvarado, ha construido el archivo fotográfico del acervo afrodescendiente más grande del país."
			>
				<div className={`${styles.parentSticky} ${"d-block ps-0 ps-xl-3 ps-xxl-5"}`}>
					<Link href="/en/#menuPrincipal">
						<a className={`${styles.linkMenu} ${"d-inline-flex flex-column align-items-center"}`}>
							<div className="mb-2">
								<ButtonMove dir="up" />
							</div>
							<span className="d-none d-md-inline fw-500 text-uppercase">MAIN MENU</span>
						</a>
					</Link>
				</div>
				<section className={styles.section1}>
					<div className={`${styles.containerGrid} ${"containerGrid"}`}>
						<div
							className={`${"d-none d-md-flex flex-column align-items-start justify-content-center ps-0 ps-xl-3 ps-xxl-5"}`}
						>
							<div
								className={`${
									styles.sectionShare
								} ${"black-text d-inline-flex flex-column align-items-center"}`}
							>
								<div className="mb-3">
									<BsShare className="icon share-icon me-2" />
									<span>SHARE</span>
								</div>
								<div>
									<a
										href="whatsapp://send?text=https://discursosvisualesafroperuanos.com/martin-alvarado"
										data-action="share/whatsapp/share"
										className="d-inline-block color-inherit me-1"
									>
										<FaWhatsapp className="icon" />
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="http://www.facebook.com/sharer.php?u=https://discursosvisualesafroperuanos.com/martin-alvarado&quote="
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
										href="https://twitter.com/intent/tweet?text=https://discursosvisualesafroperuanos.com/martin-alvarado"
										className="d-inline-block color-inherit me-2"
									>
										<FaTwitter className="icon" />
									</a>
								</div>
							</div>
							{/* <Link href="./#menuPrincipal">
								<a className={`${styles.linkMenu} ${"d-inline-flex flex-column align-items-center color-inherit"}`}>
									<div className="mb-2">
										<ButtonMove dir="up" />
									</div>
									<p className="mb-0">MENÚ PRINCIPAL</p>
								</a>
							</Link> */}
						</div>
						<div className="d-flex align-items-center">
							<div className={`${styles.grid1} ${"grid1"}`}>
								<div>
									<div className="title-page martin mb-5 fw-600">
										<img
											loading="lazy"
											className="text-1"
											src="/img/svg/MARTIN ALVARADO/MARTÍN.svg"
											alt="martín"
										/>
										<img
											loading="lazy"
											className="text-2"
											src="/img/svg/MARTIN ALVARADO/ALVARADO.svg"
											alt="alvarado"
										/>
										<div className="wrapper-arrow-text">
											<img
												loading="lazy"
												className="flechas"
												src="/img/svg/MARTIN ALVARADO/flechas_rosa_claro(36).svg"
												alt="flechas"
											/>
										</div>
										<img
											loading="lazy"
											className="text-3"
											src="/img/svg/MARTIN ALVARADO/CRÓNICAS AFROPERUANAS.svg"
											alt="crónicas afroperuanas"
										/>
									</div>
									<div className={`${styles.gridDescImg} ${"gridDescImg"}`}>
										<div className={`${styles.partText} ${"partText lh-normal"}`}>
											<p className="">
												For over 30 years, Martín Alvarado Gamarra has traveled across our country
												documenting with his camera different ways of life, festivities, characters,
												dances, music and traditions. A fundamental reason of his work is to make
												visible the Afro-Peruvian presence in our country, and to contribute,
												through his extensive photographic work, to the knowledge and preservation
												of their cultural and collective memory. Martín Alvarado, has built the
												largest photographic archive of the Afro-descendant heritage in the country.
											</p>
											<p className="">
												His exhibition DIA 100, inaugurated in 2017, exposed a hundred Peruvians who
												are proud of their African descent, and expressed with their own words their
												feelings about discrimination, racism and stereotypes that persist in our
												society and continue to stigmatize them. The exhibition was inaugurated in
												the context of International Decade for People of African Descent
												(2015-2025) proclaimed by the UN, and the Afro-Peruvian Culture Month,
												celebrated every year in June, since 2014.
											</p>
											<p className="">
												As an Afro-Peruvian, the artist suffered raw prejudice. His images are
												visual testimonies that aims to promote respect, equality and recognition of
												Afro-Peruvian identity, presence and cultural legacy.
											</p>
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
						<div className="d-flex flex-column align-items-end">
							<Link href="/martin-alvarado">
								<a className="color-inherit under mb-4">Versión en español</a>
							</Link>
						</div>
					</div>
				</section>
				<section className={styles.section2}>
					<Element name="section2">
						<div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
							<div className={`${"d-none d-md-block ps-0 ps-xl-3"}`}>
								{/* <Link href="./#menuPrincipal">
									<a
										className={`${
											styles.linkMenu
										} ${"d-inline-flex flex-column align-items-center color-inherit"}`}
									>
										<div className="mb-2">
											<ButtonMove dir="up" />
										</div>
										<span className="fw-500 text-uppercase text-center">MENÚ PRINCIPAL</span>
									</a>
								</Link> */}
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
										“DIA 100 was named for International Decade for People of African Descent, and
										the number 100 represents the number of people who have been photographed. The
										project&apos;s starting point is showing Afro-Peruvians continuing contribution
										to our country; also, this project exhibits the high number of African descent
										fighters and professionals; and it breaks the stereotype that Afro-Peruvian can
										only be dancers, athletes or chefs. In addition, DIA 100 aims to recognize that
										Afro-professionals can be an inspiration, and how their actions can educate
										people to continue working to eradicate racism”.
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
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "01" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Liboria Espino Campos</b>
												<br />
												El Agustino (Villa Hermosa), 2017
												<br />
												Ama de casa.
												<br />
												Origen: Palpa – Ica
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "02" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Elsa Wong Mendoza</b>
												<br />
												San Juan De Lurigancho, 2017
												<br />
												Repostera y activista afroperuana de la ONG Makungu para el Desarrollo.
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "03" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Joan Juana Robalino Wong</b>
												<br />
												San Juan de Lurigancho, 2017
												<br />
												Bachiller en Administración
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "04" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Andre Di Carlo Cavero Uribe</b>
												<br />
												Ventanilla, 2017
												<br />
												Estudiante
												<br />
												Origen: Ventanilla - Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "05" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>María Julia Montalbán Goyoneche</b>
												<br />
												Ventanilla, 2017
												<br />
												Profesora
												<br />
												Origen: San Luis de Cañete - Ica
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "06" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Carlos Amor Mandros Meneses</b>
												<br />
												Lima, 2017
												<br />
												Artista
												<br />
												Origen: Huaral
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "07" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Delia María Aguilar Bravo</b>
												<br />
												Ventanilla, 2017
												<br />
												Administradora, Auditora
												<br />
												Origen: Ventanilla - Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "08" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>María Cecilia Cervera Aguilar</b>
												<br />
												Ventanilla, 2017
												<br />
												Administradora
												<br />
												Origen: Ventanilla - Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "09" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Yanina García y Sandra Silva</b>
												<br />
												Ventanilla, 2017
												<br />
												Independiente y promotora de eventos
												<br />
												Origen: Ventanilla - Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "10" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Walter Aguilar y María Saavedra</b>
												<br />
												Ventanilla, 2017
												<br />
												Fotógrafo y soldador y enfermera laboralista
												<br />
												Origen: Bellavista - Callao y Talara - Piura
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item) => {
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "11" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Rocío Muñoz Flores</b>
												<br />
												Lince, 2017
												<br />
												Periodista y afrofeminista
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "12" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Mónica Molina Arguedas</b>
												<br />
												Miraflores, 2017
												<br />
												Artesana
												<br />
												Origen: Chorrillos
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "13" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Norma Reyes Villegas</b>
												<br />
												Callao, 2017
												<br />
												Estilista Afro
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "14" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Ana Elizabeth Miranda Chumpitaz</b>
												<br />
												UPIS Nuevo San Luis, 2017
												<br />
												Estudiante
												<br />
												Origen: San Vicente de San Luis
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "15" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Marcelino Santiago Linares Zegarra</b>
												<br />
												Surquillo, 2017
												<br />
												Músico
												<br />
												Origen: San Luis de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "16" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Máximo Constantino Aguilar Alarcón</b>
												<br />
												Ventanilla, 2017
												<br />
												Albañil
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "17" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Giovanna Silva García</b>
												<br />
												Elio, 2017
												<br />
												Empresaria en Repostería
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "18" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Eduvino Wong Liza</b>
												<br />
												San Juan De Lurigancho, 2017
												<br />
												Chofer
												<br />
												Origen: Aucallama - Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "19" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Marco Antonio Gómez Pérez</b>
												<br />
												Cercado de Lima, 2017
												<br />
												Artista plástico, Reverendo, Teólogo
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "20" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Fernando Caramantín Soriano</b>
												<br />
												El Agustino (Villa Hermosa), 2017
												<br />
												Comerciante y dueño de la Picantería “Rinconcito Piurano”
												<br />
												Origen: Chulucanas - Piura
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((item) => {
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "21" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Natalia Barrera Francis</b>
												<br />
												Breña, 2017
												<br />
												Estudiante de publicidad, modelo, activista y blogger
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "22" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Luis Martín Valdiviezo Arista</b>
												<br />
												San Miguel, 2017
												<br />
												Catedrático, escritor, novelista
												<br />
												Origen: Jesús María
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "23" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Sonia María Aguilar Meneses</b>
												<br />
												San Luis, 2017
												<br />
												Líder afroperuana
												<br />
												Origen: San Luis
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "24" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Narda del Rosario Arbulú Bramón</b>
												<br />
												Surquillo, 2017
												<br />
												Abogada
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "25" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Marlene Neyra</b>
												<br />
												New Jersey, 2017
												<br />
												Supervisora Backery
												<br />
												Origen: Surquillo
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "26" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Pedro Pablo Prada García</b>
												<br />
												La Victoria, 2017
												<br />
												Licenciado en Desarrollo Humano
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "27" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Carmen Rosa Huapaya Solano</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Profesora, cocinera afro
												<br />
												Origen: San Luis de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "28" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Víctor Manuel Torres</b>
												<br />
												Callao, 2017
												<br />
												Sacerdote
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "29" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Alonso Arredondo Rodríguez</b>
												<br />
												2017
												<br />
												Estudiante de Psicología de la Pontificia Universidad Católica del Perú
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "30" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Ximena Gutiérrez Arizaga</b>
												<br />
												Callao Cercado, 2017
												<br />
												Estudiante de dirección y diseño gráfico y modelo
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
									<img
										loading="lazy"
										className="arrow left"
										src="/img/svg/flechas_rosa-claro(18).svg"
										alt="arrows"
									/>
									<p className="mb-0">
										"DIA 100 features stories of Africa-descent men, women, girls, boys, adolescents
										and young people, adopting a cross-cutting approach in Peru; it intends to make
										visible and recognize all those who live in exclusion, racism and
										discrimination, those people who are constantly denigrate and classify; and, it
										shows that physical and psychological violence is exercised by the ethnic-racial
										condition of a human being”.
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
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "31" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Carlos Alberto Donayre Rojas</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "32" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Juan Luis Centeno Zegarra</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Agente de seguridad
												<br />
												Origen: San Luis de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "33" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>José Luis Sánchez Lara</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Auxiliar de educación
												<br />
												Origen: San Luis de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "34" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Laura Tovar Gonzáles</b>
												<br />
												Barrios Altos, 2017
												<br />
												Ama de casa
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "35" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Juan Palacios Casas</b>
												<br />
												Surquillo, 2017
												<br />
												Periodista deportivo internacional
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "36" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Rina Arizaga Nolazco</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Origen: San Vicente de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "37" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Jaime Ernesto Rojas Angulo</b>
												<br />
												La Quebrada, 2017
												<br />
												Pintor, dibujante, caricaturista
												<br />
												Origen: San Benito
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "38" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Alejandro Julio Bravo Campos</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Indigente
												<br />
												Origen: San Luis de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "39" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Manuel Agusto Bravo Urriola</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Decimista, cajonero, danzante, músico
												<br />
												Origen: San Luis de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "40" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Luis Ayucán Silva</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Maestro constructor
												<br />
												Origen: San Luis de Cañete
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[41, 42, 43, 44, 45, 46, 47, 48, 49, 50].map((item) => {
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "41" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Samuel Lancho Manzo</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Bechiller en Administración y Negocios Internacionales
												<br />
												Origen: San Vicente de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "42" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Ross Angel Reyes Alejandría</b>
												<br />
												Breña, 2017
												<br />
												Administradora y empresaria
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "43" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Bertha Salazar Vda. De Buitrón</b>
												<br />
												Barrios Altos, 2017
												<br />
												Ama de casa
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "44" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Rosa Medrano Rivas</b>
												<br />
												Carmen de la Legua, 2017
												<br />
												Activista afroperuana y miembro de la Pastoral afroperuana del Callao y
												ASONEDH
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "45" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Fiorella Milagros Manchego Jiménez</b>
												<br />
												Chorillos, 2017
												<br />
												Bachiller de Biología y miembro fundadora de ONG afrochalaca EMMA JONES
												<br />
												Origen: Nazca – Ica (El Ingenio)
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "46" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Irvin Zamora Quijandria</b>
												<br />
												Ciudad del Pescador, 2017
												<br />
												Bailarín afro
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "47" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Patricia Flores Álvarez</b>
												<br />
												Barrios Altos, 2017
												<br />
												Ama de casa
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "48" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Nancy Muñoz Flores</b>
												<br />
												Lince, 2017
												<br />
												Modelo
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "49" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Mayra Pérez Cossio</b>
												<br />
												San Martín de Porres, 2017
												<br />
												Licenciada en Administración de Empresas, bailarina del BAC (Ballet
												Afroperuano del Callao) y miembro de la ONG Emma Jones
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "50" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Susana Matute Charún</b>
												<br />
												Comas
												<br />
												Docente y Directora de Políticas Públicas para Población Afroperuana (DAF)
												del Ministerio de Cultura
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[51, 52, 53, 54, 55, 56, 57, 58, 59, 60].map((item) => {
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "51" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Dora Eugenia Zegarra Larroche</b>
												<br />
												San Martín de Porres, 2017
												<br />
												Profesora
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "52" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Evelin Ortiz González</b>
												<br />
												Lince, 2017
												<br />
												Actriz, cantante, directora, gestora cultural y activista afroperuana
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "53" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Gabriela Noles Cotito</b>
												<br />
												Miraflores, 2017
												<br />
												Médico cirujano con Máster en Salud Pública en la Universidad de Harvard
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "54" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Carlos Michael Gutiérrez Díaz</b>
												<br />
												San Martín de Porres, 2017
												<br />
												Estudiante de danza de la Escuela Nacional de Folklore JMA y Director
												Artístico del Ballet Afroperuano del Callao (BAC)
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "55" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Alicia Quevedo Canales</b>
												<br />
												Surco, 2017
												<br />
												Politóloga
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "56" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>James Maximiliano Fernández Cossío</b>
												<br />
												Callao, 2017
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "57" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Carmen Tatiana Espinoza Chirinos</b>
												<br />
												La Victoria, 2017
												<br />
												Actriz y pedagoga
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "58" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Daylin Rihanna Llanos Lujan</b>
												<br />
												Callao, 2017
												<br />
												Estudiante de inicial
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "59" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Allison Geraldine Castillo Ramos</b>
												<br />
												Callao, 2017
												<br />
												Estudiante de cosmetología y bailarina
												<br />
												Origen: Lince
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "60" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Luisa Bustamante Gonzales</b>
												<br />
												2017
												<br />
												Gestora y productora cultural
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
									<img
										loading="lazy"
										className="arrow left"
										src="/img/svg/flechas_rosa-claro(18).svg"
										alt="arrows"
									/>
									<p className="mb-0">
										“Afro-Peruvian people are a vulnerable and invisible population, that were
										unjustly marked with slavery and human trafficking. This project was supported
										by Public Policies for the Afro-Peruvian Population Office of the Vice Ministry
										of Interculturality, from Ministry of Culture of Peru; also, it was supported by
										Afro-Peruvians beautiful histories, that help to demystify, make visible and
										fight against the ethnic-racial discrimination of the Afro-Peruvian people”.
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
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "61" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>María Ysabel León Joya</b>
												<br />
												San Martín de Porres, 2017
												<br />
												Enfermera
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "62" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Sharún Mía Gonzales Matute</b>
												<br />
												Comas, 2017
												<br />
												Bachiller en Periodismo y fundadora del grupo AFROPUCP de la Pontificia
												Universidad Católica del Perú
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "63" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Stefano Neves Mauricio</b>
												<br />
												Callao, 2017
												<br />
												Estudiante
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "64" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Claudia del Pilar Reyes Gálvez</b>
												<br />
												Villa María del Triunfo, 2017
												<br />
												Estudiante de Antropología
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "65" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Ysabel Milagros Correa Salazar</b>
												<br />
												Rímac, 2017
												<br />
												Periodista, cantante, compositora y activista afroperuana
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "66" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Amy Alguedas Penado</b>
												<br />
												2017
												<br />
												Administradora de Turismo y Hotelería
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "67" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Jorge Ramírez Reyna</b>
												<br />
												Breña, 2017
												<br />
												Abogado, luchador social afroperuano y presidente de la Asociación Negra de
												Defensa de los Derechos Humanos (ASONEDH)
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "68" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Wynnie Ann Mery Alice Valdivia Caramantín</b>
												<br />
												El Agustino, 2017
												<br />
												Estudiante de Comunicación y Periodismo, fotógrafa freelance, activista plus
												size y afroperuana, afrofeminista, modelo y Blogger
												<br />
												Origen: La Victoria - Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "69" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Emperatriz Manzo viuda de Ormeño</b>
												<br />
												San Luis de Cañete, 2017
												<br />
												Profesora, voleibolista
												<br />
												Origen: San Luis de Cañete
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "70" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Patricia Carmen López Pazos</b>
												<br />
												La Quebrada Cañete, 2017
												<br />
												Abogada penalista, docente de primaria
												<br />
												Origen: Cañete
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[71, 72, 73, 74, 75, 76, 77, 78, 79, 80].map((item) => {
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "71" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Carlos Michael Gutiérrez Diaz</b>
												<br />
												Callao, 2017
												<br />
												Director artístico
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "72" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Owan Lay González</b>
												<br />
												Lince, 2017
												<br />
												Internacionalista, activista afroperuano y Director Ejecutivo de la ONG
												Makungu para el Desarrollo
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "73" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Virginia Zegarra Larroche</b>
												<br />
												Surquillo, 2017
												<br />
												Abogada, activista afroperuana, embajadora por la Paz por la UPF y
												presidenta de la organización Raíces Afroperuanas
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "74" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Martín José Bustamante Gutiérrez</b>
												<br />
												Chorrillos, 2017
												<br />
												Sociólogo
												<br />
												Origen: Lambayeque – Chiclayo
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "75" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Roberto Carlos Jaramillo Ramos</b>
												<br />
												El Chaparral, 2017
												<br />
												Sociólogo, activista afroperuano y presidente de la Asociación Afroperuana
												para el Desarrollo de Capote (AFRODEC)
												<br />
												Origen: Capote – Lambayeque
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "76" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Luisa Elena Cavero Eléspuru</b>
												<br />
												Barrios Altos, 2017
												<br />
												Ama de casa y cocinera de varios presidentes del Perú
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "77" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Iris Acevedo Zegarra</b>
												<br />
												Bellavista, 2017
												<br />
												Danza y Artes Escénicas
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "78" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Carlos Eugenio Reyes Gálvez</b>
												<br />
												Villa María del Triunfo, 2017
												<br />
												Antropólogo
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "79" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Sofía Arizaga Muñoz</b>
												<br />
												2017
												<br />
												Educadora y promotora de la participación de jóvenes afroperuanos como
												agentes de cambio
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "80" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Julio Tipiani Ramos</b>
												<br />
												Carmen de la Legua, 2017
												<br />
												Profesor
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[81, 82, 83, 84, 85, 86, 87, 88, 89, 90].map((item) => {
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "81" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Briggitte Reyes Loyo</b>
												<br />
												Cercado del Callao, 2017
												<br />
												Estudiante de Administración de Empresas
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "82" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Rosa Victoria Carrillo Beúnza</b>
												<br />
												Márquez – Callao, 2017
												<br />
												Presidenta de organización afroperuana Emma Jones: Afrodescendientes
												trabajando por la Inclusión y el Desarrollo Integral, emprendedora, gestora
												comunitaria y activista afrochalaca
												<br />
												Origen: San Martín de Porres – Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "83" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Oswaldo Bilbao Lobatón</b>
												<br />
												Lima, 2017
												<br />
												Director del Centro de Desarrollo Étnico (CEDET), contador, activista
												afroperuano
												<br />
												Origen: Surco
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "84" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Jessica Zegarra Nuncevay</b>
												<br />
												Breña, 2017
												<br />
												Abogada y miembro de ONG Raíces Afroperuanas
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "85" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Gloria González</b>
												<br />
												Lince, 2017
												<br />
												Activista afroperuana, presidenta de la organización Mujer Negra y
												Desarrollo, representante del Perú ante la Mesa del Pueblo Afrodescendiente
												en la Comunidad Andina de Naciones (CAN)
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "86" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>María Del Socorro Gallardo Aparcana</b>
												<br />
												San Miguel, 2017
												<br />
												Artesana, activista afroperuana y presidenta de la Red Nacional de Mujeres
												Afroartesanas (REDMAA)
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "87" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Hugo Eduardo Coya Honores</b>
												<br />
												Miraflores, 2017
												<br />
												Escritor, novelista, periodista y Presidente Ejecutivo de IRTP
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "88" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Adriana Mandros Gallardo</b>
												<br />
												Rímac, 2017
												<br />
												Administradora y líder afroperuana
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "89" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Cesar Luna Custodio</b>
												<br />
												La Victoria, 2017
												<br />
												Empleado público
												<br />
												Origen: Nazca
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "90" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Giovanna Sofía Carrillo Zegarra</b>
												<br />
												Miraflores, 2017
												<br />
												Periodista, actriz, activista afroperuana
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
								<Carousel
									className={`${styles.carousel} ${"carousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
									{[91, 92, 93, 94, 95, 96, 97, 98, 99, 100].map((item) => {
										// return (
										// 	<Carousel.Item key={item}>
										// 		<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
										// 			<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
										// 				<img
										// 					className="img-fluid"
										// 					src={`${awsUrlAlvarado}` + item + ".png"}
										// 					alt=""
										// 					loading="lazy"
										// 				/>
										// 			</div>
										// 			<p className="captionInfo text-center mb-0">
										// 				Lorem ipsum dolor, sit amet consectetur adipisicing.
										// 			</p>
										// 		</div>
										// 	</Carousel.Item>
										// );
									})}
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "91" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Hilda La Rosa Rondón</b>
												<br />
												Puente Piedra, 2017
												<br />
												Profesora
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "92" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>John Stevens Quijandría Velorio</b>
												<br />
												Márquez - Callao, 2017
												<br />
												Fundador de organización afroperuana Emma Jones: Afrodescendientes
												trabajando por la Inclusión y el Desarrollo Integral, activista afrochalaco,
												administrador de La 44 Resto bar y Restaurante Etnias
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "93" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Cruz María Gutiérrez Ordinola</b>
												<br />
												Callao, 2017
												<br />
												Secretaria ejecutiva
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "94" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Brenda Fernanda Aguilar Chira</b>
												<br />
												Carabayllo, 2017
												<br />
												Estudiante de periodismo, activista afroperuana miembro de EMMA JONES,
												cantante en Kilombo peruano, Rumba Negra y Únete Afro
												<br />
												Origen: Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "95" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Mario Felipe Jair Espinoza Vera</b>
												<br />
												Cañete, 2017
												<br />
												Abogado
												<br />
												Origen: San Vicente de Cañete - Lima
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "96" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Esther López</b>
												<br />
												2017
												<br />
												Secretaria penalista
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "97" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Lilia Mayorga Balcázar</b>
												<br />
												Lima, 2017
												<br />
												Periodista, activista afroperuana y miembro del Centro de Desarrollo Étnico
												(CEDET)
												<br />
												Origen: Zaña – Lambayeque
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "98" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Darwing Isaac Callirgos Romero</b>
												<br />
												Kio (Zaña), 2017
												<br />
												Origen: Zaña
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "99" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Héctor Gabriel Aguilar Conca</b>
												<br />
												Ventanilla, 2017
												<br />
												Soldador
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperImg} ${"wrapperImg mb-4"}`}>
												<img
													className="img-fluid"
													src={`${awsUrlAlvarado}` + "100" + ".png"}
													alt=""
													loading="lazy"
												/>
											</div>
											<p className="captionInfo text-center mb-0">
												<b>Eli Aguilar Saavedra</b>
												<br />
												Ventanilla, 2017
												<br />
												Técnica de Administración y diseñadora
												<br />
												Origen: Callao
											</p>
										</div>
									</Carousel.Item>
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
					</Element>
				</section>
				<section className={styles.section5}>
					<div className={`${styles.fullGrid} ${"fullGrid pb-3 pb-md-5"}`}>
						<div className={`${styles.boxText} ${"mb-3 mb-md-5"}`}>
							<div className="titleHome text-uppercase mb-1">AFRO-PERUVIAN MEMORY</div>
							<div className="mb-4">
								<img className="underline-arrows" src="/img/svg/flechas_azul(37).svg" alt="" />
							</div>
						</div>
						<div className={`${styles.minWrap} ${"minWrap"}`}>
							<p className="">
								Martín Alvarado began his career as a sports photographer; after that he became a
								graphic editor for the newspapers El Sol, El Comercio, Correo and La República.
								Since 2000, he is producer of television program Costumbres (Customs), a platform
								that has documented living culture in a lot of Peru provinces. As a result of this
								work, in 2005 he presented the exhibition “Este es mi cariño” ("This is my love"),
								which exposed 87 photographs taken during the first five years of the program's
								broadcast.
							</p>
							<p className="">
								His photographic work has been presented in various individual and group
								exhibitions, and compiled in various publications, such as Sonaly Tuesta's Fiestas,
								calendario y costumbres (Festivities, Calendar and Customs) (2010) and his own book
								Marcados de Fiesta (2015). His art has been shown at Colombia, the Dominican
								Republic, Spain, France and China.
							</p>
							<p className="">
								In Afroperuanos (2009), Alvarado featured images of music and sports figures, such
								as Amador Ballumbrosio or soccer player Sandro Baylón; this work explores
								religiosity in Afro-Peruvian Mass in Lima; and captures traditional dances, such as
								"Hatajo de Negritos" and "Las Pallitas" from El Carmen (Ica) or "dance of the
								Negritos from Zaña" (Piura). In this exhibition, he also aims to make visible other
								spaces conquered by Afro-Peruvians, such as politics, science or academia, thus
								denouncing the classifications of a system that recognizes them only to certain
								trades or practices. His next exhibition, Afro-Peruvian Women (2011), featured women
								portraits who succeed as entrepreneurs, businesswomen, artists, models and health
								professionals, all of them are a valuable example of capacity, improvement and
								contribution to development of the country.
							</p>
							<p className="">
								Thanks to his art and his work in favor of Afro-Peruvian culture, he has received
								different distinctions, like "Award for Excellence in Photography" by Harvard
								University in 2014 and "Meritorious Personality of the Culture”, granted by the
								Ministry of Culture in 2015. In 2021 he directed and produced the documentary Josef:
								el inicio de una historia (Josef: the beginning of a story).
							</p>
						</div>
					</div>
				</section>
				<section className={styles.section6}>
					<div className={`${styles.fullGrid} ${"fullGrid pb-3 pb-md-5"}`}>
						<div className={`${styles.boxText} ${"mb-3 mb-md-5"}`}>
							<div className="titleHome text-uppercase mb-1">
								DO YOU WANT TO KNOW MORE ABOUT
								<br />
								MARTÍN ALVARADO'S ARTISTIC
								<br />
								PROPOSAL?
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
										<b>Artist's testimonial</b>
										<br />
										<span>Martin Alvarado. Photographer and audiovisual producer</span>
									</div>
									<div className="descripcion"></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</div>
	);
}

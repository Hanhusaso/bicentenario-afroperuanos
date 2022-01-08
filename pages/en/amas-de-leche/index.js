import Layout from "../../../components/Layout";
import styles from "../../amas-de-leche/amas-de-leche.module.scss";
import ButtonMove from "../../../components/ButtonMove";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { Link as LinkScroll, Element } from "react-scroll";
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import Compar1 from "../../amas-de-leche/compar1";
import Compar2 from "../../amas-de-leche/compar2";

const awsUrl = "https://afroperuanos.s3.us-east-2.amazonaws.com/fotos-amas-de-leche/";
const awsUrlVideo = "https://afroperuanos.s3.us-east-2.amazonaws.com/videos/";
const awsUrlTitle = "https://afroperuanos.s3.us-east-2.amazonaws.com/titulos/";

export default function index() {
	return (
		<div className={styles.main}>
			<Layout
				title="Amas de leche de la colección Gourret"
				path="/amas-de-leche"
				description="En el siglo XIX, tras la crisis del sistema esclavista y su subsiguiente abolición en 1854, los libertos contemplaron diferentes estrategias de subsistencia. Algunas mujeres afroperuanas continuaron con la práctica de la lactancia pagada o lactancia mercenaria. De este modo, la presencia de un ama dentro de la vida familiar de la élite fue un hecho ampliamente aceptado por la sociedad peruana republicana, siendo las nodrizas de origen afrodescendiente las preferidas como tradición. Esta práctica fue visibilizada a través del retrato fotográfico como un medio de afirmación y aspiración social: el retrato del ama junto al niño a su cuidado era un reflejo del elevado estatus socioeconómico de la familia, cuyo patrimonio incluía a la propia ama."
			>
				<div className={`${styles.parentSticky} ${"d-block ps-0 ps-xl-3 ps-xxl-5"}`}>
					<Link href="/en#menuPrincipal">
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
										href="whatsapp://send?text=https://discursosvisualesafroperuanos.com/amas-de-leche"
										data-action="share/whatsapp/share"
										className="d-inline-block color-inherit me-1"
									>
										<FaWhatsapp className="icon" />
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="http://www.facebook.com/sharer.php?u=https://discursosvisualesafroperuanos.com/amas-de-leche&quote="
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
										href="https://twitter.com/intent/tweet?text=https://discursosvisualesafroperuanos.com/amas-de-leche"
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
							<div>
								<div className="title-page amas mb-5 fw-600">
									<img
										src={`${awsUrlTitle}amas-de-leche-titulo.png`}
										alt="amas-de-leche-titulo"
										className="w-100"
									/>
									{/* <img
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
									/> */}
								</div>
								<div className={`${styles.gridDescImg} ${"gridDescImg"}`}>
									<div className={`${styles.partText} ${"partText"}`}>
										<div>
											<p className="">
												In the 19th century, after slave system crisis and its subsequent abolition
												in 1854, freedmen contemplated different subsistence strategies. Some
												Afro-Peruvian women continued to practice paid breastfeeding or mercenary
												breastfeeding. Thus, wet nurse presence in elite&apos;s family life was
												widely accepted by republican Peruvian society; Afro-descendant wet nurses
												were the most required nursemaids. This practice was captured in
												photographic portrait, and it represented an affirmation and social
												aspiration: nursemaid with child portraits reflected family high
												socioeconomic status, whose heritage included the nursemaid herself.
											</p>
											<p>
												We feature a selection of Afro-Peruvian wet nurse photographic portraits
												made by Eugène Courret and his successor Adolphe Dubreuil between 1879 and
												1912 in their famous Lima studio E. Courret. Nowdays, more than 50 thousand
												glass plates are in custody at the National Library of Peru.
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
						<div className="d-flex flex-column align-items-end">
							<Link href="/amas-de-leche">
								<a className="color-inherit under mb-4">Versión en español</a>
							</Link>
						</div>
					</div>
				</section>
				<section className={styles.section2}>
					{/* <div className={`${styles.parentSticky} ${"d-none d-md-block"}`}>
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
					</div> */}
					<Element name="section2">
						<div className={`${styles.containerGrid} ${"containerGrid"}`}>
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
										<span className="fw-500 text-uppercase">MENÚ PRINCIPAL</span>
									</a>
								</Link> */}
							</div>
							<div>
								<p className={`${styles.titleSection1} ${"titleSection"}`}>
									Courret brothers and studio portraits
								</p>
								<div className={`${styles.grid1} ${""}`}>
									<div>
										<p>
											In 1863, the French brothers Achilles and Eug&egrave;ne Courret founded
											&quot;Central Photography&quot;, one of the most important photo studios in
											Lima at 19th century.&nbsp;Since its establishment, the Courret studio
											developed a prolific activity, that lasted until 1935; studio portrait was its
											greatest standard.
										</p>
										<p>
											Photography quickly consolidated in the city as a vehicle of affirmation and
											social distinction, cause the elite in Lima reflected their high status
											through this technique.&nbsp;Thus, the studio portraits, in addition to be a
											careful image construction or montage projected by aristocracy, were an
											expression of this period mentality.&nbsp;In these images, as valuable visual
											documents, were reflected the multiple sociocultural, gender and ethnic ties
											that were strengthened in the young republican Peru.
										</p>
										<p className="mb-5">
											This way, the Courret studio fixed&nbsp;images that are part of our heritage
											and memory.
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
												{/* <p>
													“<b>Fotografía Central</b>”. E. Courret y Cia.
													<br />
													Adolfo Dubreuil, sucesor.
												</p> */}
												<p className="mb-0">
													<b>
														Central Photography. E. Courret company. Adolphe Dubreuil, successor
													</b>
													<br />
													The art nouveau façade was inaugurated by Adolphe Dubreuil in 1905
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
													<b>Courret and Dubreuil families.</b>
													<br />
													Ca. 1890.
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
										<b>The ties between the Courret and Dubreuil families </b>date back to the first
										generation of French migrants to Peru. Eugène Courret and his wife Emilia
										Basserre were groomsmen of Adolphe Dubreuil, who married Clara Couturier in
										1884; and they were godparents of Juanita Dubreuil, Adolphes&apos;s first-born
										daughter. These portraits reflect the close bond between the two families. In
										1892, Eugène Courret traveled to France; and Dubreuil, his partner and friend,
										started to direct the photo studio.
									</p>
								</div>
							</div>
						</div>
					</Element>
				</section>
				<section className={styles.section3}>
					{/* <div className={`${styles.parentSticky} ${"d-none d-md-block"}`}>
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
					</div> */}
					<div className={`${styles.containerGrid} ${"containerGrid"}`}>
						<div></div>
						<div>
							<p className={`${styles.titleSection2} ${"titleSection"}`}>
								Family portraits: infants and wet nurses
							</p>
							<p>
								One image recorded by the Courret Study is powerful and endearing: the portrait of
								tender infants with their wet nurse or nursemaid, an Afro-descendant woman, usually.
							</p>
							<p>
								In Peru, wet nurse presence in stately homes dates from the colonial period, a time
								when this practice was relapsed on African slaves. In the 19th century,
								Afro-Peruvian wet nurses were predominant, not only in traditional and aristocratic
								families of Lima, but also in foreign and immigrant families who arrived at the
								country after the economic opening and the splendor of the &quot;era del
								guano&quot;.
							</p>
							<p className="mb-5">
								Portraits of children with their Afro-Peruvian nursemaids were an essential
								photograph in the family album and a social prestige sing. These albums constituted
								a family story or visual chronicle and they were placed at bourgeois residences,
								where visitors and relatives admired them.
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
											<b>Pedro Tonesi y ama de leche</b> Eugène Courret, 1884
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
											<b>Niña Chaize y ama de cría</b> Eugène Courret, 1883
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
								<Carousel
									className={`${styles.wrapCarousel} ${"wrapCarousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
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
													<b>Ascher Freymann family</b>
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
													<b>Ascher Freymann family</b>
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
									<b>Paul Ascher was a prosperous merchant</b> and banker. He married Minna Freymann
									on January 27th, 1880. On the first image, wet nurse holds baby Ascher in her
									arms, he is the focus of the portrait. In the following two photographs, on baby
									Ascher's christening, Adolphe Dubreuil portrayed the family in two settings: a
									lavish space made up with a painted backdrop with columns, curtains and wooded
									exteriors that are in harmony with the wood balcony on which the infant is
									located, who is lovingly supported by his parents; and another space formed by a
									neutral and smooth background, usually used in study portraits.
								</p>
							</div>
						</div>
						<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
							<div className="d-flex align-items-center">
								<Carousel
									className={`${styles.wrapCarousel} ${"wrapCarousel"}`}
									fade={true}
									controls={false}
									interval={null}
								>
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
									<b>Count Giacometti Marzano de Visconti</b>was born in Piacenza, Italy, and
									settled in Lima as a merchant and married Victoria Soyer Morote from Lima. The
									elegance of their clothing allows us to suppose that the family came to the studio
									on José Luis Giacometti Soyer&apos;s christening. He was born on April 25, 1888.
									Eugène Courret used a sober scenography with plain and neutral backgrounds, carved
									stone and wood carpet, and pedestals. The gesture of protection and closeness in
									the portrait is emphasized by wet nurse position.
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
					{/* <div className={`${styles.parentSticky} ${"d-none d-md-block"}`}>
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
					</div> */}
					<div className={`${styles.containerGrid} ${"containerGrid"}`}>
						<div></div>
						<div>
							<p className={`${styles.titleSection3} ${"titleSection"}`}>
								The study and portrait construction
							</p>
							<p>
								Courret house is recognized for its remarkable aesthetic construction of
								photographic image, scenography decoration, furniture and postures hold by portrayed
								people, who reflected their role in society. In the case of wet nurse portraits,
								visual discourse in these portraits focuses to transmit familiarity and maternal
								relationship between the child and his wet nurse. Same expressions, like clasped
								hands, are found in photos of these infants with their biological mothers.
							</p>
							<p>
								Generally, the little ones were placed on pedestals, so they were at the same height
								as their nursemaids. They were also portrayed in the arms or on the lap of their
								nursemaids; the scenography was composed of neutral or painted curtains with
								simulated architectures and a room bathed in an overhead light that descended
								through theatines.
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
										<b>Two young nurses were photographed</b> next to Roberto Baudrot, Augusto
										Antonio Baudrot’s son, a notable French merchant based in Lima. One of them is
										smiling and holding the child with her right hand; while the other was in the
										background, and she stands out for her elegance. Their clothes would indirectly
										reflect the family high status. The wealthiest families used to have more than
										one nurse to care for their children.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<div className={`${styles.wrapCarousel} ${"wrapCarousel noIndicator"}`}>
										<div className={`${styles.gridImgCaption} ${"gridImgCaption"}`}>
											<div className={`${styles.wrapperCaption} ${"wrapperCaption"}`}>
												<p className="mb-0">
													<b>Boy and his two nursemaids</b>
													<br />
													Benjamin Franklin Pease
													<br />
													Ca. 1855, Daguerreotype
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
										<b>The composition</b> of these portraits refers to Niño and two wet nurses, one
										of the first Afro-Peruvian wet nurse portraits, made by Benjamin Franklin Pease,
										almost half a century earlier. In this image, the nurses surrounded and hold the
										child located on a luxurious Hepplewhite chair, while, in the background, a
										third person is hidden behind the curtain, and holds the infant's head, to keep
										it stable. Due to the approximate date of this photo, it is probable that these
										Afro-Peruvian women were slaves; this could be symbolized on the whip held by
										the child.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<Carousel
										className={`${styles.wrapCarousel} ${"wrapCarousel"}`}
										fade={true}
										controls={false}
										interval={null}
									>
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
														<b>Carmen Gallagher Canaval and her wet nurse</b>
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
														<b>Carmen Gallagher Canaval and her wet nurse</b>
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
														<b>Carmen Gallagher Canaval and her wet nurse</b>
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
														<b>María Luisa Tudela Artieda and her wet nurse</b>
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
														<b>María Luisa Tudela Artieda and her wet nurse</b>
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
										<b>Nurses were</b> also required to help for individually portraying of infants
										and younger children. They had to hold them, but they may not appear in the
										portrait, so they hid behind the furniture, as we can see in the Carmen
										Gallagher’s portrait. In the different shots, we can see a wet nurse holding the
										little girl through a tape, behind the chair, to be partially out of the shot.
										<br />
										In some cases, the nursemaids were completely covered with a black cloak and
										erased from the image. Over time, there were various interpretations that have
										been made about &quot;absent&quot; presence of the nursemaids: some were related
										to their invisibility, due to ethnic or class issues; while others were referred
										to a photographic technique. We are not certain, but apparently mothers weren’t
										the ones who were covered.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-100"}`}>
								<div className="d-flex align-items-center">
									<Carousel
										className={`${styles.wrapCarousel} ${"wrapCarousel"}`}
										fade={true}
										controls={false}
										interval={null}
									>
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
														<b>Maria Dubois and her wet nurse</b>
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
														<b>Maria Dubois</b>
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
														<b>Girl Kitz Dibós and her wet nurse</b>
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
														<b>Girl Kitz Dibós and her sister</b>
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
										<b>In the same photographic session,</b> various infant portraits were made,
										including the portrait with their nursemaids. In the shot, Maria Dubois&apos;s
										wet nurse wore pearl earrings and a sober uniform. The girl also posed in an
										individual or solo portrait. On the other hand, Kitz Dibós&apos;s wet nurse was
										photographed comfortably seated at the same level as the girl, in a recurring
										composition in Dubreuil&quot;s portraits. In another photograph, on the same
										small table, she is accompanied by her older sister.
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
					{/* <div className={`${styles.parentSticky} ${"d-none d-md-block"}`}>
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
					</div> */}
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
								Afro-Peruvian women in 19th century in Peru
							</p>
							<p className="">
								After the abolition of slavery in 1854, Afro-Peruvian women attended to subsist in a
								society where the color of the skin, the degree of education and the socioeconomic
								status colored each class. According to the Lima census from 1860, many of them were
								engaged in food sale and production, managed small businesses or were seamstresses
								and domestic workers, among other trades.
							</p>
							<p className="">
								They also offered their services as wet nurses or nursemaids. However, this trade
								wasn’t a common job, because, despite the modest salary, these women were directly
								linked to the family nucleus of Lima aristocracy, and they nurtured and assisted
								their children. To be hired, they were required to comply with rigorous
								requirements, such as having excellent health, conduct, and impeccable morals.
							</p>
							<p className="">
								Photography massively revealed this ancient practice and filled family albums and
								visiting cards.
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
													<b>José Arias and his wet nurse</b>
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
										<b>At that time, photographic sessions</b> were lengthy, and people had to hold
										the pose throughout all the process, it was especially difficult if they were
										children. Therefore, the nursemaids were essential to ensure the success of the
										portrait. The photo of Baby Arias and his nursemaid needs several shots; in
										which the elusive little boy draws his nursemaid smiles.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<Carousel
										className={`${styles.wrapCarousel} ${"wrapCarousel"}`}
										fade={true}
										controls={false}
										interval={null}
									>
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
														<b>José Arias and his wet nurse</b>
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
														<b>René Melot and his wet nurse</b>
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
										<b>Against a backdrop decorated</b> with a curtain, the baby Melot and his
										nursemaid were portrayed in different compositions. In the first one, the nurse
										holds the child on her lap; in the second, a small table was added, and the
										child was placed at the same height as his nursemaid, it generates greater
										closeness between them. She looks towards the camera, and the baby smiles and
										looks towards a point behind the photo shot, possibly where is one of his
										parents.
									</p>
								</div>
							</div>
							<div className={`${styles.gridCarousel} ${"gridCarousel mb-160"}`}>
								<div className="d-flex align-items-center">
									<Carousel
										className={`${styles.wrapCarousel} ${"wrapCarousel"}`}
										fade={true}
										controls={false}
										interval={null}
									>
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
														<b>Carlos Grace and his wet nurse</b>
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
														<b>Manuel Valverde and his wet nurse</b>
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
														<b>Girl Alzamora Ciccero and her wet nurse</b>
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
														<b>Enrique Meiggs and his wet nurse</b>
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
														<b>Consuelo Quintana and her wet nurse</b>
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
														<b>Andrea Seguín and her wet nurse</b>
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
														<b>Andrés Larco and his wet nurse</b>
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
										<b>Afro-Peruvian nursemaids</b> were usually portrayed wearing a long shawl or
										shawl placed on their head. Aristocracy women also used it, but it was made with
										fine-fabrics, ornamented with embroidery; while women from low-social levels
										used simple-fabrics, such as cotton or linen. The shawl attempted to communicate
										the person decency and religiosity, qualities that were admired and required in
										a wet nurse.
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
								DO YOU WANT TO KNOW MORE
								<br />
								ABOUT THE PORTRAIT IN
								<br />
								THE XIX CENTURY?
							</div>
							<div className="mb-4">
								<img className="underline-arrows" src="/img/svg/flechas_piel(37).svg" alt="" />
							</div>
						</div>
						<div className={`${styles.containerVideos} ${"containerVideos"}`}>
							<div className={`${styles.video1} ${"wrapperVideo mb-5"}`}>
								<video
									className="w-100"
									src="https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Sofia+Pachas-1.m4v"
									controls
									poster={`${awsUrlVideo}Video+Sofia+Pachas-07+1.png`}
								></video>
								<div className={`${styles.infoVideo} ${"infoVideo"}`}>
									<div className={`${styles.mirar} ${"mirar"}`}></div>
									<div className={`${styles.titulo} ${"titulo"}`}>
										<b>
											What was the evolution and importance of the portrait in Peru in the 19th
											century?
										</b>
										<br />
										<span>Sofia Pachas. Art historian</span>
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
		</div>
	);
}

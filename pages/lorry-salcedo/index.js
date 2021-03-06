import Layout from "../../components/Layout";
import styles from "./lorry-salcedo.module.scss";
import ButtonMove from "../../components/ButtonMove";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { Link as LinkScroll, Element } from "react-scroll";
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const awsUrl = "https://afroperuanos.s3.us-east-2.amazonaws.com/fotos-lorry-salcedo/";
const awsUrlVideo = "https://afroperuanos.s3.us-east-2.amazonaws.com/videos/";
const awsUrlTitle = "https://afroperuanos.s3.us-east-2.amazonaws.com/titulos/";

export default function index() {
	return (
		<div className={styles.main}>
			<Layout
				title="Lorry Salcedo"
				path="/lorry-salcedo"
				description="A mediados de los años ochenta del siglo pasado, Lorry Salcedo Mitrani convirtió la vida del distrito de El Carmen, de la provincia de Chincha en la región Ica, en el motivo central de su quehacer fotográfico. Su producción artística puede interpretarse tanto como un registro documental o como una aproximación intrínseca a la vitalidad de los integrantes de la comunidad, la que inicialmente se centraba en la familia Ballumbrosio. Además del valor histórico y estético, las imágenes de El Carmen entre 1985 y 1996, son una exploración de gran carga simbólica sobre la cotidianidad, la rutina, el trabajo, las celebraciones o la música."
			>
				<div className={`${styles.parentSticky} ${"d-block ps-0 ps-xl-3 ps-xxl-5"}`}>
					<Link href="/#menuPrincipal">
						<a className={`${styles.linkMenu} ${"d-inline-flex flex-column align-items-center"}`}>
							<div className="mb-2">
								<ButtonMove dir="up" />
							</div>
							<span className="d-none d-md-inline fw-500 text-uppercase">MENÚ PRINCIPAL</span>
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
									<span>COMPARTIR</span>
								</div>
								<div>
									<a
										href="whatsapp://send?text=https://discursosvisualesafroperuanos.com/lorry-salcedo"
										data-action="share/whatsapp/share"
										className="d-inline-block color-inherit me-1"
									>
										<FaWhatsapp className="icon" />
									</a>
									<a
										target="_blank"
										rel="noreferrer"
										href="http://www.facebook.com/sharer.php?u=https://discursosvisualesafroperuanos.com/lorry-salcedo&quote="
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
										href="https://twitter.com/intent/tweet?text=https://discursosvisualesafroperuanos.com/lorry-salcedo"
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
									<div className="title-page lorry mb-5 fw-600">
										<img
											src={`${awsUrlTitle}lorry-salcedo-y-el-carmen-titulo.png`}
											alt="lorry-salcedo-y-el-carmen-titulo"
											className="w-100"
										/>
										{/* <img
											loading="lazy"
											className="text-1"
											src="/img/svg/LORRY SALCEDO/LORRY.svg"
											alt="lorry"
										/>
										<img
											loading="lazy"
											className="text-2"
											src="/img/svg/LORRY SALCEDO/SALCEDO.svg"
											alt="salcedo"
										/>
										<div className="wrapper-arrow-text">
											<img
												loading="lazy"
												className="flechas"
												src="/img/svg/LORRY SALCEDO/flechas_moradas(31).svg"
												alt="flechas"
											/>
										</div>
										<img
											loading="lazy"
											className="text-3 text-right"
											src="/img/svg/LORRY SALCEDO/Y EL CARMEN.svg"
											alt="y el carmen"
										/> */}
									</div>
									<div className={`${styles.gridDescImg} ${"gridDescImg"}`}>
										<div className={`${styles.partText} ${"partText"}`}>
											<p className="">
												A mediados de los años ochenta del siglo pasado, Lorry Salcedo Mitrani
												convirtió la vida del distrito de El Carmen, de la provincia de Chincha en
												la región Ica, en el motivo central de su quehacer fotográfico. Su
												producción artística puede interpretarse tanto como un registro documental o
												como una aproximación intrínseca a la vitalidad de los integrantes de la
												comunidad, la que inicialmente se centraba en la familia Ballumbrosio.
												Además del valor histórico y estético, las imágenes de El Carmen entre 1985
												y 1996, son una exploración de gran carga simbólica sobre la cotidianeidad,
												la rutina, el trabajo, las celebraciones o la música.
											</p>
										</div>
									</div>
								</div>
								<div>
									<div className={`${styles.wrapperImg} ${"wrapperImg"}`}>
										<img
											loading="lazy"
											className="img-fluid"
											src={`${awsUrl}` + "lorry-salcedo-portada" + ".png"}
											alt=""
										/>
									</div>
								</div>
							</div>
							{/* <div className="linkDown">
								<LinkScroll
									activeClass="active"
									className=""
									to="section2"d
									smooth={true}
									duration={200}
								>
									<ButtonMove dir="down" />
								</LinkScroll>
							</div> */}
						</div>
						<div className="d-flex flex-column align-items-end">
							<Link href="/en/lorry-salcedo">
								<a className="color-inherit under mb-4">English version</a>
							</Link>
						</div>
					</div>
				</section>
				<section className={styles.section2}>
					<Element name="section2">
						<div className={`${styles.containerGrid3} ${"containerGrid3"}`}>
							<div className={`${"d-none d-md-block ps-0 ps-xl-5"}`}>
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
							<div className={styles.pt}>
								{/* <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                    <img loading="lazy" className="arrow left" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                    <p className="mb-0">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                    </p>
                                    <img loading="lazy" className="arrow right" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                </div> */}
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-1" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">José bailando, 1985</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-2" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Manos sobre la tumba, 1985</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-3" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Bailando El Alcatraz, 1992</p>
									</div>
								</div>
								{/* <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                    <img loading="lazy" className="arrow left" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                    <p className="mb-0">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                    </p>
                                    <img loading="lazy" className="arrow right" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                </div> */}
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-4" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Bailando durante la yunza, 1992</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-5" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Paseando al Santo de día, 1992</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-6" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Rezando a la Virgen, 1992</p>
									</div>
								</div>
								{/* <div className={`${styles.textArrow} ${"textArrow mb-160"}`}>
                                    <img loading="img-fluid lazy" className="arrow left" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                    <p className="mb-0">
                                        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet m dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetdolore magna”
                                    </p>
                                    <img loading="lazy" className="arrow right" src="/img/svg/flechas_piel(18).svg" alt="arrows" />
                                </div> */}
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-7" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Jugando en el cementerio, 1992</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-8" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Sra. Cueto con futbolista, 1992</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-9" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Tila y Roberto, 1992</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-10" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Camilo, 1992</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-11" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Susana Baca, 1994</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-12" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Amador Ballumbrosio, 1996</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-13" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Filomeno tocando para el vecino, 1996</p>
									</div>
								</div>
								<div className={`${styles.grid2} ${"grid2 mb-160"}`}>
									<img
										className="img-fluid mb-4"
										loading="lazy"
										src={`${awsUrl}` + "lorry-salcedo-14" + ".png"}
										alt=""
									/>
									<div>
										<p className="captionInfo mb-0">Filomeno tocando cajón, 1996</p>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</Element>
				</section>
				<section className={styles.section3}>
					<div className={`${styles.fullGrid} ${"fullGrid pb-3 pb-md-5"}`}>
						<div className={`${styles.boxText} ${"mb-3 mb-md-5"}`}>
							<div className="titleHome text-uppercase mb-1">
								SOBRE
								<br />
								LORRY SOLCEDO
							</div>
							<div className="mb-4">
								<img className="underline-arrows" src="/img/svg/flechas_azul(37).svg" alt="" />
							</div>
						</div>
						<div className={`${styles.minWrap} ${"minWrap"}`}>
							<p className="pb-0">
								Fotógrafo y cineasta. Sus temas de investigación y registro están vinculados a la
								historia de la cultura peruana, sus mitos y leyendas, la reflexión sobre lo erótico
								y la muerte, el deseo y la religiosidad. Son notables sus series sobre las
								comunidades afrodescendientes de Perú y Brasil, a manera de testimonio de sobre la
								diversidad y la celebración de la vida. Su trabajo fotográfico se encuentra en
								colecciones del Perú y universidades de Estados Unidos, Francia e Inglaterra e
								instituciones como el Brooklyn Museum of Art, Museum of African American Life and
								Culture, la Biblioteca del Congreso de Estados Unidos y la Biblioteca Nacional de
								Francia.
							</p>
						</div>
					</div>
				</section>
				<section className={styles.section4}>
					<div className={`${styles.fullGrid} ${"fullGrid pb-3 pb-md-5"}`}>
						<div className={`${styles.boxText} ${"mb-3 mb-md-5"}`}>
							<div className="titleHome text-uppercase mb-1">
								¿QUIÉRES SABER MÁS SOBRE
								<br />
								LA PROPUESTA ARTÍSTICA DE
								<br />
								LORRY SALCEDO?
							</div>
							<div className="mb-4">
								<img className="underline-arrows" src="/img/svg/flechas_piel(37).svg" alt="" />
							</div>
						</div>
						<div className={`${styles.containerVideos} ${"containerVideos"}`}>
							<div className={`${styles.video1} ${"wrapperVideo mb-5"}`}>
								<video
									className="w-100"
									src="https://afroperuanos.s3.us-east-2.amazonaws.com/videos/Lorry+Salcedo+Mitrani-1.m4v"
									controls
									poster={`${awsUrlVideo}Video+Lorry+Salcedo-02+1.png`}
								></video>
								<div className={`${styles.infoVideo} ${"infoVideo"}`}>
									<div className={`${styles.mirar} ${"mirar"}`}></div>
									<div className={`${styles.titulo} ${"titulo"}`}>
										<b>Testimonio del artista</b>
										<br />
										<span>Lorry Salcedo. Fotógrafo y cineasta</span>
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

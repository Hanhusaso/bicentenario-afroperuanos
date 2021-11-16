import Layout from "../components/Layout";
import ButtonMove from "../components/ButtonMove";
import styles from "./index.module.scss"
import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <Layout title="Inicio">
                <section className={styles.home1}>
                    <div className={`${styles.containerGrid} ${"containerGrid"}`}>
                        <div></div>
                        <div className="d-flex align-items-center">
                            <div>
                                <div className="mb-5">
                                    <img className="img-fluid w-100" src="/img/home/discursos visuales.jpg" alt="discursos visuales" />
                                </div>
                                <div>
                                    <div className="mb-5">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa deserunt magni rem libero, quod at nihil tempore debitis, architecto odit aut modi reiciendis fuga iusto aperiam temporibus? Ut, esse.
                                        Maiores aut debitis corrupti repellendus soluta deserunt, quaerat fugiat rem vero aliquid aspernatur placeat impedit deleniti tempore ullam beatae nostrum aperiam, laborum repellat, sint praesentium? Debitis quibusdam nisi tenetur delectus.</p>
                                    </div>
                                    <div className="ms-3">
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
                                <div className="d-flex align-items-center justify-content-center">
                                    <div>
                                        <ButtonMove/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="img-fluid logo-bicentenario" src="/img/LOGO HORIZONTAL PEB.png" alt="bicentenario peru" />
                        </div>
                    </div>
                </section>
                <section className={styles.home2}>
                    section home 2
                </section>
                <section className={styles.home3}>
                    section home 3
                </section>
                <section className={styles.home4}>
                    section home 4
                </section>
            </Layout>
        </>
    )
}
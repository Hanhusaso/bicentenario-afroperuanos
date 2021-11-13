import Layout from "../components/Layout";
import styles from "./index.module.scss"

export default function Home() {
    return (
        <>
            <Layout title="Inicio">
                <section className={styles.home1}>
                    section home 1
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
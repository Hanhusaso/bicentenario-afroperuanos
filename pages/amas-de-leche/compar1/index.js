import React, { useEffect, useRef } from 'react'
import Layout from "../../../components/Layout"
import styles from "./compar1.module.scss"

export default function compar1() {
    // const lastImgRef = useRef();
    // const sliderRef = useRef();

    // useEffect(() => {
    //     // console.log(lastImgRef);
    // }, [lastImgRef.current])

    function slide () {
        // let slideValue = lastImgRef.current.value
        // slider.style.clipPath = "polygon(0 0," + slideValue + "% 0, " + slideValue + "% 100%, 0 100%)"
        // console.log("polygon(0 0," + slideValue + "% 0, " + slideValue + "% 100%, 0 100%)")
        // console.log(lastImgRef);
    }

    return (
        <>
            <Layout title="comparison 1">
                <script src="/js/comparison.js"></script>
                <div className={`${styles.body} ${"body"}`}>
                    <div className={`${styles.wrapperComp} ${"wrapperComp"}`}>
                        {/* <img className={`${styles.imgCompImg} ${"imgCompImg"}`} src="/img/amas/matrimonio ascher freymann.jpg" /> */}
                        {/* <img ref={lastImgRef} id="last1" className={`${styles.imgCompImg} ${styles.last} ${"imgCompImg"}`} src="/img/amas/familia ascher freymann.jpg" /> */}
                        {/* <input ref={sliderRef} id="slider" onChange={slide()} className={`${styles.slider} ${"slider"}`} type="range" min="0" max="100" /> */}
                    </div>
                </div>
            </Layout>
        </>
    )
}

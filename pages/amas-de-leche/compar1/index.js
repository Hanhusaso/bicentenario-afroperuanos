import React, { useEffect, useRef, useState } from "react";
import Layout from "../../../components/Layout";
import styles from "./compar1.module.scss";
// const awsUrl = "https://luiscavibotsample.s3.sa-east-1.amazonaws.com/assets/afroperuanos/";
const awsUrl = "https://afroperuanos.s3.us-east-2.amazonaws.com/fotos-amas-de-leche/";

export default function Compar1() {
	const lastImgRef = useRef();
	const sliderRef = useRef();

	const [slideValue, setValueInput] = useState(50);
	const [clipPatchValue, setclipPatchValue] = useState("");

	useEffect(() => {
		console.log(slideValue);
		setclipPatchValue("polygon(0 0," + slideValue + "% 0, " + slideValue + "% 100%, 0 100%)");
		lastImgRef.current.style.clipPath = clipPatchValue;
	}, [slideValue, clipPatchValue]);

	return (
		<>
			{/* <Layout title="comparison 1"> */}
			<div className={`${styles.body} ${"body"}`}>
				<div className={`${styles.wrapperComp} ${"wrapperComp"}`}>
					<img
						className={`${styles.imgCompImg} ${"imgCompImg"}`}
						src={`${awsUrl}` + `amas-de-leche-13` + ".png"}
					/>
					<img
						ref={lastImgRef}
						id="last1"
						className={`${styles.imgCompImg} ${styles.last} ${"imgCompImg"}`}
						src={`${awsUrl}` + `amas-de-leche-14` + ".png"}
					/>
					<input
						ref={sliderRef}
						id="slider"
						onChange={(e) => setValueInput(e.target.value)}
						className={`${styles.slider} ${"slider"}`}
						type="range"
						min="0"
						max="100"
						defaultValue={slideValue}
					/>
				</div>
			</div>
			{/* </Layout> */}
		</>
	);
}

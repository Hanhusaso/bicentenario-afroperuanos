import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const LayoutHome = ({ title, description, children }) => {
	return (
		<div>
			<Head>
				<title>{title} | Bicentenario Afroperuanos</title>
				{/* <link rel="icon" href="/assets/img/favicon/logo.ico" /> */}
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/cropped-logo_bicentenario_2020-32x32.png" />
				<meta property="og:url" content="https://discursosvisualesafroperuanos.com/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Discursos visuales sobre lo afroperuano" />
				<meta property="og:description" content={description} />
				<meta
					property="og:image"
					content="https://cdn.www.gob.pe/uploads/document/file/2022785/standard_Bicentenario%202021.png"
				/>
			</Head>
			{/* <Header></Header> */}
			<main>{children}</main>
		</div>
	);
};

export default LayoutHome;

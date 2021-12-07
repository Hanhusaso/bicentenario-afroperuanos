import { BsShare } from "react-icons/bs";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react'

export default function ShareButtons() {
    const facebookShareRef = useRef();

    function facebookShare() {
        // console.log();
    }

    useEffect(() => {
        // console.log();
        // facebookShareRef.current.addEventListener("click", WhatsShare);
    }, [])

    return (
        <div className="black-text d-inline-flex flex-column align-items-center">
            <div className="mb-3">
                <BsShare className="icon share-icon me-2" />
                <span>COMPARTIR</span>
            </div>
            <div>
                <a href="whatsapp://send?text=https://bicentenario-afroperuanos.vercel.app/lorry-salcedo" data-action="share/whatsapp/share" className="d-inline-block color-inherit me-1">
                    <FaWhatsapp className="icon" />
                </a>
                <a target="" href="http://www.facebook.com/sharer.php?u=https://bicentenario-afroperuanos.vercel.app/lorry-salcedo&quote=Esta es la página de Lorry Salcedo" className="d-inline-block color-inherit me-1">
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
    )
}

import React from 'react'
import Style from './style.module.scss'
import { GrClose } from 'react-icons/gr'

const Lightbox = ({ lightboxState }) => {
    return (
        <>
            <div className={Style.lightbox}>
                <div className={Style.dialog}>
                    {console.log(lightboxState)}
                    <div className={Style.content}>
                    <button className={Style.closeButton} aria-label="close"><GrClose /></button>
                        Lightbox
                    </div>
                </div>
                <div className={Style.overlay}></div>
            </div>
        </>
    )
}

export default Lightbox;
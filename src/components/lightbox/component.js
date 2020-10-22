import React, { useState, useEffect } from 'react'
import Style from './style.module.scss'
import { GrClose } from 'react-icons/gr'

const Lightbox = ({ lightboxState, closeHandler }) => {

    const [ animateLightbox, animate ] = useState('')
    const [ hide, setHidden] = useState(false)

    useEffect(() => {
        if(lightboxState) {
            animate(Style.active)
        } else {
            animate('')
            setHidden(true)
        }
    }, [lightboxState])


    useEffect(() => {
     const timeout = setTimeout(() => {
        setHidden(false)
        animate(Style.hidden)
      }, 200);
  
     return () => clearTimeout(timeout)
    },[hide])

    return (
        <>
            <div className={`${Style.lightbox} ${animateLightbox}`}>
                <div className={Style.dialog}>
                    <div className={Style.content}>
                    <button className={Style.closeButton} onClick={() => closeHandler()} aria-label="close"><GrClose /></button>
                        Lightbox
                        
                    </div>
                </div>
                {/* The <div> element has na iteraction when the user clicks it in order to close it, this is a standard in many lightboxes
                But this is not true button, neither should it be tabbable
                    https://jbutz.github.io/bootstrap-lightbox/ */}
                {/* eslint-disable-next-line */}
                <div role="button" aria-label="close" className={Style.overlay} onClick={closeHandler}></div>
            </div>
        </>
    )
}

export default Lightbox;
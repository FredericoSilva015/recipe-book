import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Style from './style.module.scss'
import { GrClose } from 'react-icons/gr'
import PartialEdit from '../partial-edit/component'
import PartialNew from '../partial-new/component'
import PartialView from '../partial-view/component'

const Lightbox = ({ lightboxState, closeHandler, partial, recipe, newHandler }) => {

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
            <div className={`${Style.lightbox} ${animateLightbox}`} >
                <div className={Style.dialog}>
                    <div className={Style.content}>
                        <button className={Style.closeButton} onClick={closeHandler} aria-label="close"><GrClose /></button>
                        <div className={Style.contentWrapper}>
                            { partial === 'edit' ? <PartialEdit recipe={recipe} newHandler={newHandler} closeHandler={closeHandler}/> : '' }
                            { partial === 'new' ? <PartialNew newHandler={newHandler} closeHandler={closeHandler}/> : '' }
                            { partial === 'view' ? <PartialView recipe={recipe} /> : '' }
                        </div>
                    </div>
                </div>
                {/* The <div> element has a interaction when the user clicks/esc, this is a standard in many lightboxes
                    But this is not a true button, neither should it be tabbable https://jbutz.github.io/bootstrap-lightbox/ */}
                {/* eslint-disable-next-line */}
                <div role="button" aria-label="close" className={Style.overlay} onClick={closeHandler} ></div>
            </div>
        </>
    )
}

Lightbox.propTypes = {
    lightboxState: PropTypes.bool,
}

Lightbox.propTypes = {
    partial: PropTypes.string,
}

Lightbox.propTypes = {
    recipe: PropTypes.object,
}

Lightbox.propTypes = {
    newHandler: PropTypes.func,
}
  
Lightbox.propTypes = {
    closeHandler: PropTypes.func,
}

Lightbox.propTypes = {
    closeHandler: PropTypes.func,
}

Lightbox.defaultProps = {
    lightboxState: false
}

export default Lightbox;
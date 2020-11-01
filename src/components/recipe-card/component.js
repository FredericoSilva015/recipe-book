import React from 'react'
import PropTypes from 'prop-types'
import Style from './style.module.scss'
import Image from '../image/component'
import { GiCookingPot } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md'

const RecipeCard = ({ recipe, lightboxState, deleteHandler, openHandler }) => {
    return (
        <>
            <div role="button" tabIndex={lightboxState ? -1 : 0 } className={`${Style.recipeCard} card-button`} 
                onClick={(e) => openHandler(e, recipe, 'view')} 
                onKeyDown={(e) => { 
                    if ( e.keyCode === 13 ) {
                        openHandler(e, recipe, 'view')
                    }
                }}
            >
                <div className={Style.imgWrapper}>
                    <Image />
                </div>
                <h2 className={Style.title}>{recipe.name}</h2>
                <div className={Style.instructions}>
                    <p className={Style.cookingTime}><GiCookingPot />{recipe.cooking_time}</p>
                    <p className={Style.servings}><BsFillPeopleFill />{recipe.servings}</p>
                </div>
                <button className={Style.edit} disabled={lightboxState} aria-label="edit"onClick={(e) => openHandler( e, recipe, 'edit')}><BiEdit /></button>
                <button className={Style.delete} disabled={lightboxState} aria-label="delete" 
                    onClick={(e) => deleteHandler(e, recipe)}
                >
                    <MdDeleteForever />
                </button>
            </div>
        </>
    )
}

RecipeCard.propTypes = {
    recipe: PropTypes.object,
}
  
RecipeCard.propTypes = {
    lightboxState: PropTypes.bool,
}

RecipeCard.propTypes = {
    deleteHandler: PropTypes.func,
}

RecipeCard.propTypes = {
    openHandler: PropTypes.func,
}

RecipeCard.defaultProps = {
    lightboxState: false
}

export default RecipeCard;
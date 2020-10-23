import React from 'react'
import Style from './style.module.scss'
import Image from '../image/component'
import { GiCookingPot } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdDeleteForever } from 'react-icons/md';

const RecipeCard = ({ recipe, deleteHandler, openHandler }) => {
    return (
        <>
            <div role="button" tabIndex="0" className={Style.recipeCard} 
                onClick={() => openHandler(recipe, 'edit')} 
                onKeyDown={(e) => { 
                    if ( e.keyCode === 13 ) {
                        openHandler(recipe, 'edit')
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
                <button className={Style.delete} aria-label="delete" 
                    onClick={() => deleteHandler(recipe)}
                >
                    <MdDeleteForever />
                </button>
            </div>
        </>
    )
}

export default RecipeCard;
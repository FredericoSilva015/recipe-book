import React from 'react'
import Style from './style.module.scss'
import Image from '../image/component'
import { GiCookingPot } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

const RecipeCard = ({ recipe }) => {
    return (
        <>
            <div className={Style.recipeCard}>
                <div className={Style.imgWrapper}>
                    <Image />
                </div>
                <h2 className={Style.title}>{recipe.name}</h2>
                <div className={Style.instructions}>
                    <p className={Style.cookingTime}><GiCookingPot />{recipe.cooking_time}</p>
                    <p className={Style.servings}><BsFillPeopleFill />{recipe.servings}</p>
                </div>
                <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                <button className={Style.delete} aria-label="delete"><MdDeleteForever /></button>
            </div>
        </>
    )
}

export default RecipeCard;
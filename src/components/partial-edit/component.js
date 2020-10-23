import React from 'react'
import Style from './style.module.scss'
import Image from '../image/component'
import { BiEdit } from 'react-icons/bi';

const PartialEdit = ({ recipe }) => {

    return (
        <>
            <div className="container--full">
                <div className={Style.container}>
                    <div className={Style.imgWrapper}>
                        <Image />
                    </div>
                    <h2 className={Style.name}> 
                        {recipe.name} 
                        <input disabled defaultValue={recipe.name}/> 
                        <div>
                            <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                        </div>
                    </h2>
                    <h3>Ingredients</h3>
                    <ul className={Style.ingredients}>
                        {recipe.ingredients.map( (value, index) => 
                            <li className={Style.ingredientsLine} key={index}>
                                <p>{value}</p>
                                <input disabled defaultValue={value}/>
                                <div className={Style.buttonsWrapper}>
                                    <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                                </div>
                            </li>
                        )}
                    </ul>
                    <h3>Steps</h3>
                    <ol className={Style.steps}>
                        {recipe.steps.map( (value, index) => 
                            <li className={Style.stepsLine} key={index}>
                                <span>{index + 1}</span>
                                <p className={Style.stepsText}>{value}</p>
                                <textarea disabled defaultValue={value}/>
                                <div className={Style.buttonsWrapper}>
                                    <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                                </div>
                            </li>
                        )}
                    </ol>
                    <div className={Style.cookingInfo}>
                        <div className={Style.time}>
                            Prep Time : <p>{recipe.cooking_time}</p> 
                            <input type="number" disabled defaultValue={recipe.cooking_time}/>
                            <div className={Style.buttonsWrapper}>
                                <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                            </div>
                        </div>
                        <div className={Style.serving}>
                            Servings : <p>{recipe.servings}</p> 
                            <input type="number" disabled defaultValue={recipe.servings}/>
                            <div className={Style.buttonsWrapper}>
                                <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default PartialEdit;
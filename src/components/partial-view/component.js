import React from 'react'
import Style from './style.module.scss'
import Image from '../image/component'

const PartialView = ({ recipe }) => {

    return (
        <>
            <div className="container--full">
                <div className={Style.container}>
                    <div className={Style.imgWrapper}>
                        <Image />
                    </div>
                    <h2 className={Style.name}> 
                        {recipe.name}
                    </h2>
                    <h3>Category</h3>
                    <p>{recipe.category}</p>
                    <h3>Ingredients</h3>
                    <ul className={Style.ingredients}>
                        {recipe.ingredients.map( (value, index) => 
                            <li className={Style.ingredientsLine} key={index}>
                                <p>{value}</p>
                            </li>
                        )}
                    </ul>
                    <h3>Steps</h3>
                    <ol className={Style.steps}>
                        {recipe.steps.map( (value, index) => 
                            <li className={Style.stepsLine} key={index}>
                                <span>{index + 1}</span>
                                <p className={Style.stepsText}>{value}</p>
                            </li>
                        )}
                    </ol>
                    <div className={Style.cookingInfo}>
                        <div className={Style.time}>
                            Prep Time : <p>{recipe.cooking_time}</p>
                        </div>
                        <div className={Style.serving}>
                            Servings : <p>{recipe.servings}</p> 
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default PartialView;
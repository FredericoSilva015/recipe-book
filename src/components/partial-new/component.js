import React from 'react'
import Style from './style.module.scss'
import Image from '../image/component'

const PartialNew = () => {

    const save = () => {
        const name = document.querySelector(`.${Style.nameInput} input`).value
        const ingredientsList = document.querySelectorAll(`.${Style.ingredientsLine} input`)
        const stepsList = document.querySelectorAll(`.${Style.stepsLine} textarea`)
        const time = document.querySelector(`.${Style.time}`)
        const serving = document.querySelector(`.${Style.serving} input`).value

        console.log('name', name)
        console.log('ingredientsList', ingredientsList)
        console.log('stepsList', stepsList)
        console.log('time', time)
        console.log('serving', serving)
    }

    return (
        <>
            <div className="container--full">
                <div className={Style.container}>
                    <div className={Style.imgWrapper}>
                        <Image />
                    </div>
                    <h3 className={Style.name}>Title</h3>
                    <div className={Style.nameInput}>
                        <input /> 
                    </div>
                    <h3>Ingredients</h3>
                    <ul className={Style.ingredients}>
                        <li className={Style.ingredientsLine}>
                            <input/>
                        </li>
                    </ul>
                    <h3>Steps</h3>
                    <ol className={Style.steps}>
                        <li className={Style.stepsLine} >
                            <textarea/>
                        </li>
                    </ol>
                    <div className={Style.cookingInfo}>
                        <div className={Style.time}>
                            <label className={Style.label}>
                                Prep Time :
                                <input type="tel" maxLength="2" />
                                <input type="tel" maxLength="2" />
                            </label>
                        </div>
                        <div className={Style.serving}>
                            <label className={Style.label}>
                                Servings :
                                <input type="number"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div><button onClick={save}>Save</button></div>
            </div>
            
        </>
    )
}

export default PartialNew
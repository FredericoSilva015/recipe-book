import React from 'react'
import Style from './style.module.scss'
import Image from '../image/component'
import { BiEdit } from 'react-icons/bi';

const PartialNew = () => {

    return (
        <>
            <div className="container--full">
                <div className={Style.container}>
                    <div className={Style.imgWrapper}>
                        <Image />
                    </div>
                    <h2 className={Style.name}> 
                        <input/> 
                        <div>
                            <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                        </div>
                    </h2>
                    <h3>Ingredients</h3>
                    <ul className={Style.ingredients}>
                        <li className={Style.ingredientsLine}>
                            <input/>
                            <div className={Style.buttonsWrapper}>
                                <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                            </div>
                        </li>
                    </ul>
                    <h3>Steps</h3>
                    <ol className={Style.steps}>
                        <li className={Style.stepsLine} >
                            <textarea/>
                            <div className={Style.buttonsWrapper}>
                                <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                            </div>
                        </li>
                    </ol>
                    <div className={Style.cookingInfo}>
                        <div className={Style.time}>
                            Prep Time :<input type="number"/>
                            <div className={Style.buttonsWrapper}>
                                <button className={Style.edit} aria-label="edit"><BiEdit /></button>
                            </div>
                        </div>
                        <div className={Style.serving}>
                            Servings :<input type="number"/>
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

export default PartialNew
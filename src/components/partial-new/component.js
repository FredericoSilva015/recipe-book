import React, { useState, useRef } from 'react'
import Style from './style.module.scss'
import Image from '../image/component'

const PartialNew = ({newHandler}) => {

    /**
     * Initial state
     */
    const  [ recipe, editRecipe ] = useState({
        "_id": "",
        "category": "",
        "picture": "http://placehold.it/32x32",
        "name": "",
        "ingredients": [''],
        "steps": [''],
        "cooking_time": "",
        "servings": 0
      },
    )

    /**
     * State of input on valid input
     */
    const  [ error, isError ] = useState({
        "initialState": true,
        "category": false,
        "name": false,
        "ingredients": [false],
        "steps": [false],
        "cooking_time": false,
        "servings": false
      },
    )

    /**
     * Form Reference
     */
    const form = useRef(null)

    const save = (e) => {
        e.preventDefault()
        
        // const objsHolder = recipe

        // const valid = validate()

        // if( !valid ) {
        //     console.log('Not valid')
        //     return
        // }

        // const data = new FormData(form.current)

        newHandler(recipe)
    }

    const singleHandler = (e) => {
        const element = e.target
        const elementName = element.name

        editRecipe({...recipe, [elementName]: element.value})
    }

    const nestedHandler = (e, index) => {
        const element = e.target
        const elementName = element.name
        const elementValue = element.value

        let recipeHolder = recipe
        let nestedArray = recipe[elementName]
        nestedArray[index] = elementValue

        editRecipe(recipeHolder)
    }

    // const id = () => {
    //     return '_' + Math.random().toString(36).substr(2, 9);
    //   };

    // const validate = () => {
    //     let valid = true
    //     const errorObj = error
    //     const data = new FormData(form.current)

    //     for (let [key, value] of data.entries()) { 
    //         const nestedArray = key === 'ingredients' || key === 'steps' || key === 'time'

    //         if( !value && !nestedArray ) {
    //             errorObj[key] = true
    //             valid = false
    //         } else if ( value && !nestedArray ) {
    //             errorObj[key] = false
    //         }
    //     }

    //     errorObj.ingredients = arrayBuilder(data.entries(), 'ingredients', valid);
    //     errorObj.steps = arrayBuilder(data.entries(), 'steps', valid);
    //     errorObj.cooking_time = arrayBuilder(data.entries(), 'time', valid);
        
    //     isError({...errorObj})

    //     return valid
    // }

    // const arrayBuilder = (Obj, id, valid) => {
    //     let newArray = []

    //     for (let [key, value] of Obj) {
    //         if( key === id && !value ) {
    //             newArray.push(true)
    //             valid = false
    //         } else if ( key === id ){
    //             newArray.push(false)
    //         }
    //     }

    //     return newArray
    // }

    return (
        <>
            <div className="container--full">
                <div className={Style.container}>
                    <form ref={form} onSubmit={save}>
                        <div className={Style.imgWrapper}>
                            <Image />
                        </div>
                        <h3 className={Style.title}>Title</h3>
                        <input name="name" className={`${Style.nameInput} ${error.name ? Style.warning : ''}`} onChange={singleHandler}/> 
                        <h3 className={Style.title}>Category (only accepts: meat, fish, vegan, dessert, other)</h3>
                        <input name="category" className={`${Style.categoryInput} ${error.category ? Style.warning : ''}`} onChange={singleHandler}/> 
                        <h3 className={Style.title}>Ingredients</h3>
                        <ul className={Style.ingredients}>
                            <li className={Style.ingredientsLine}>
                                <input name="ingredients" 
                                    className={`${Style.ingredientsInput} ${error.ingredients[0] ? Style.warning : ''}`} 
                                    onChange={(e) => nestedHandler(e, 0)}
                                />
                            </li>
                        </ul>
                        <h3 className={Style.title}>Steps</h3>
                        <ol className={Style.steps}>
                            <li className={Style.stepsLine} >
                                <textarea name="steps" 
                                    className={`${Style.stepsInput} ${error.steps[0] ? Style.warning : ''}`} 
                                    onChange={(e) => nestedHandler(e, 0)} />
                            </li>
                        </ol>
                        <div className={Style.cookingInfo}>
                            <div className={Style.time}>
                                <h3>Prep Time :</h3>
                                <input name="cooking_time" 
                                    className={`${Style.timeInput} 
                                    ${error.cooking_time[1] ? Style.warning : ''}`} 
                                    type="time" 
                                    onChange={singleHandler}
                                />  
                            </div>
                            <div className={Style.serving}>
                                <h3>Servings :</h3>
                                <input name="servings" 
                                    className={`${Style.servingInput} 
                                    ${error.servings ? Style.warning : ''}`} 
                                    type="tel" maxLength="2" 
                                    onChange={singleHandler}/>
                            </div>
                        </div>
                        <div><input type="submit" name="Save" /></div>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default PartialNew
import React, { useState, useRef } from 'react'
import Style from './style.module.scss'
import Image from '../image/component'

const PartialNew = ({newHandler}) => {

    /**
     * Initial state
     */
    const  [ recipe, editRecipe ] = useState({
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

    /**
     * Single inputs
     * @param {Event} e 
     */
    const singleHandler = (e) => {
        const elementName = e.target.name
        const elementValue = e.target.value

        editRecipe({...recipe, [elementName]: elementValue })
    }

    /**
     * Radio input
     * @param {Event} e 
     */
    const radioHandler = (e) => {
        const elementValue = e.target.value
        editRecipe({...recipe, 'category': elementValue})
    }

    /**
     * Dynamicly created inputs from nested array
     * @param {Event} e 
     * @param {Number} index 
     */
    const nestedHandler = (e, index) => {
        const elementName = e.target.name
        const elementValue = e.target.value

        let recipeHolder = recipe
        let nestedArray = recipe[elementName]
        nestedArray[index] = elementValue

        editRecipe(recipeHolder)
    }

    /**
     * Add a new entry
     * @param {String} property 
     */
    const addEntry = (property) => {
        let recipeHolder = recipe
        let errorHolder = error

        recipeHolder[property].push('')
        errorHolder[property].push(false)

        console.log(errorHolder)

        editRecipe({...recipeHolder})
        isError({...errorHolder})
    }

    /**
     * Remove Entry
     * @param {String} property 
     * @param {Number} index 
     */
    const removeEntry = (property, index) => {
        let recipeHolder = recipe
        let errorHolder = error

        recipeHolder[property].splice(index, 1)
        errorHolder[property].splice(index, 1)

        console.log(errorHolder)

        editRecipe({...recipeHolder})
        isError({...errorHolder})
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
                        <h3 className={Style.title}>Category</h3>
                        <div onChange={radioHandler}>
                            <label>
                                Meat
                                <input type="radio" name="Category" value="meat"/>
                            </label>
                            <label>
                                Fish
                                <input type="radio" name="Category" value="fish"/>
                            </label>
                            <label>
                                Vegan
                                <input type="radio" name="Category" value="vegan"/>
                            </label>
                            <label>
                                Dessert
                                <input type="radio" name="Category" value="dessert"/>
                            </label>
                            <label>
                                Other
                                <input type="radio" name="Category" value="other"/>
                            </label>
                        </div>
                        <div>
                            <h3 className={Style.title}>Ingredients</h3>
                            <button type="button" onClick={() => addEntry('ingredients')}>add</button>
                        </div>
                        <ul className={Style.ingredients}>
                            {recipe.ingredients.map((value, index) => 
                                <li key={index} className={Style.ingredientsLine}>
                                    <input name="ingredients" 
                                        className={`${Style.ingredientsInput} ${error.ingredients[index] ? Style.warning : ''}`} 
                                        onChange={(e) => nestedHandler(e, index)}
                                    />
                                    <button type="button" onClick={() => removeEntry('ingredients', index)}>Remove</button>
                                </li>
                            )}
                        </ul>
                        <div>
                            <h3 className={Style.title}>Steps</h3>
                            <button type="button" onClick={() => addEntry('steps')}>add</button>
                        </div>
                        <ol className={Style.steps}>
                            {recipe.steps.map((value, index) =>
                                <li key={index} className={Style.stepsLine} >
                                    <textarea name="steps" 
                                        className={`${Style.stepsInput} ${error.steps[index] ? Style.warning : ''}`} 
                                        onChange={(e) => nestedHandler(e, index)} 
                                    />
                                    <button type="button" onClick={() => removeEntry('steps', index)}>Remove</button>
                                </li>
                            )}
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
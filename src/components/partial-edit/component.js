import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Style from './style.module.scss'
import Image from '../image/component'

const PartialEdit = ({recipe, newHandler, closeHandler }) => {

    /**
     * Initial state
     */
    const  [ currentRecipe, editRecipe ] = useState(recipe)

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

    /**
     * On save action
     * @param {*} e 
     */
    const save = (e) => {
        e.preventDefault()

        const check = validate()

        if(check) {
            newHandler(currentRecipe)
            closeHandler()
        }
    }

    /**
     * Single inputs
     * @param {Event} e 
     */
    const singleHandler = (e) => {
        const elementName = e.target.name
        const elementValue = e.target.value

        const check = !elementValue.length || (elementName === "servings" && !Number.isInteger(Number(elementValue)))

        if (check) {
            isError({...error, [elementName]: true})
        } else {
            editRecipe({...currentRecipe, [elementName]: elementValue })
            isError({...error, [elementName]: false})
        }

    }

    /**
     * Radio input Handler
     * @param {Event} e 
     */
    const radioHandler = (e) => {
        const elementValue = e.target.value
        editRecipe({...currentRecipe, 'category': elementValue})
    }

    /**
     * Handler for dynamic created inputs
     * @param {Event} e 
     * @param {Number} index 
     */
    const nestedHandler = (e, index) => {
        const elementName = e.target.name
        const elementValue = e.target.value

        const recipeHolder = currentRecipe
        const errorHolder = error

        const recipeArray = recipeHolder[elementName]
        const errorArray = errorHolder[elementName]

        if (elementValue.length) {
            recipeArray[index] = elementValue
            errorArray[index] = false

            editRecipe({...recipeHolder})
            isError({...errorHolder})
        } else {
            errorArray[index] = true

            isError({...errorHolder})
        }
    }

    /**
     * Add a new entry
     * @param {String} property 
     */
    const addEntry = (property) => {
        let recipeHolder = currentRecipe
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
        let recipeHolder = currentRecipe
        let errorHolder = error

        recipeHolder[property].splice(index, 1)
        errorHolder[property].splice(index, 1)

        console.log(errorHolder)

        editRecipe({...recipeHolder})
        isError({...errorHolder})
    }


    /**
     * On submit validation
     * @returns {Boolean}
     */
    const validate = () => {
        let valid = true
        const errorHolder = error
        const data = new FormData(form.current)

        let ingredientsArray = [];
        let stepsArray = [];
        
        data.forEach( (value, key) => {
            if (key === 'ingredients') {

                ingredientsArray.push(value)
            }

            if (key === 'steps') {

                stepsArray.push(value)
            }

            if (key !== 'ingredients' && key !== 'steps' && !value.length) {
                valid = false
                errorHolder[key] = true
            }

            if(key === 'servings' && !Number.isInteger(Number(value))) {
                valid = false
                errorHolder[key] = true
            }
        })

        ingredientsArray.forEach((value, index) => {
            if (!value.length) {
                valid = false
                errorHolder.ingredients[index] = true
            }
        })

        stepsArray.forEach((value, index) => {
            if (!value.length) {
                valid = false
                errorHolder.steps[index] = true
            }
        })

        isError({...errorHolder})
        
        return valid
    }


    return (
        <>
            <div className="container--full">
                <div className={Style.container}>
                    <form ref={form} onSubmit={save}>
                        <div className={Style.imgWrapper}>
                            <Image />
                        </div>
                        <h3 className={Style.title}>Title</h3>
                        <input name="name" 
                            className={`${Style.nameInput} 
                            ${error.name ? Style.warning : ''}`} 
                            onChange={singleHandler}
                            defaultValue={currentRecipe.name}
                        /> 
                        <h3 className={Style.title}>Category</h3>
                        <div onChange={radioHandler}>
                            <label>
                                Meat
                                <input type="radio" name="Category" value="meat" defaultChecked={currentRecipe.category === 'meat'}/>
                            </label>
                            <label>
                                Fish
                                <input type="radio" name="Category" value="fish" defaultChecked={currentRecipe.category === 'fish'}/>
                            </label>
                            <label>
                                Vegan
                                <input type="radio" name="Category" value="vegan" defaultChecked={currentRecipe.category === 'vegan'}/>
                            </label>
                            <label>
                                Dessert
                                <input type="radio" name="Category" value="dessert" defaultChecked={currentRecipe.category === 'dessert'}/>
                            </label>
                            <label>
                                Other
                                <input type="radio" name="Category" value="other" defaultChecked={currentRecipe.category === 'other'}/>
                            </label>
                        </div>
                        <div>
                            <h3 className={Style.title}>Ingredients</h3>
                            <button type="button" onClick={() => addEntry('ingredients')}>add</button>
                        </div>
                        <ul className={Style.ingredients}>
                            {currentRecipe.ingredients.map((value, index) => 
                                <li key={index} className={Style.ingredientsLine}>
                                    <input name="ingredients" 
                                        className={`${Style.ingredientsInput} ${error.ingredients[index] ? Style.warning : ''}`} 
                                        onChange={(e) => nestedHandler(e, index)}
                                        defaultValue={currentRecipe.ingredients[index]}
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
                            {currentRecipe.steps.map((value, index) =>
                                <li key={index} className={Style.stepsLine} >
                                    <textarea name="steps" 
                                        className={`${Style.stepsInput} ${error.steps[index] ? Style.warning : ''}`} 
                                        onChange={(e) => nestedHandler(e, index)} 
                                        defaultValue={currentRecipe.steps[index]}
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
                                    ${error.cooking_time ? Style.warning : ''}`} 
                                    type="time" 
                                    onChange={singleHandler}
                                    defaultValue={currentRecipe.cooking_time}
                                />  
                            </div>
                            <div className={Style.serving}>
                                <h3>Servings :</h3>
                                <input name="servings" 
                                    className={`${Style.servingInput} 
                                    ${error.servings ? Style.warning : ''}`} 
                                    type="tel" maxLength="2" 
                                    onChange={singleHandler}
                                    defaultValue={currentRecipe.servings}
                                />
                            </div>
                        </div>
                        <div><input type="submit" name="Save" /></div>
                    </form>
                </div>
            </div>
            
        </>
    )
}

PartialEdit.propTypes = {
    recipe: PropTypes.object,
}

PartialEdit.propTypes = {
    newHandler: PropTypes.func,
}
  
PartialEdit.propTypes = {
    closeHandler: PropTypes.func,
}

export default PartialEdit;
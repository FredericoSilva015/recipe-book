import React from 'react'
import Style from './style.module.scss'

class Search extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className={Style.wrapper}>
                {console.log('search', this.props.recipeList)}
                <input type="text" className={Style.input} placeholder="🔍 Search for recipe"/>
            </div>
        )
    }
}

export default Search;
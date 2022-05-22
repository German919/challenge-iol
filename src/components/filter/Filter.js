import React, { useState } from 'react'
import styles from './filter.module.css'

export default function Filter( { characters, setCharacter }) {

    const [ search, setSearch ] = useState()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const res =  characters.filter( character => character.location.name.toLowerCase().includes(search.toLowerCase()))
        console.log(res)
        if( res.length === 0 ){
            return 
        }
        setCharacter(res)
    }

    return (

        <div>
            <form onSubmit= { handleSubmit }>
                <input 
                    className={styles.input} 
                    type= 'text' 
                    placeholder="Filter by Location" 
                    onChange= { handleChange }
                    />
            </form>
        </div>
  )

}
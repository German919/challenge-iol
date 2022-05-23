import React, { useState } from 'react'
import { getCharacters } from '../../services/axios'
import styles from './filter.module.css'

export default function Filter( { characters, setCharacter }) {

    const [ search, setSearch ] = useState()
    const [ error, setError ] = useState()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleRefresh = async () => {

        const res = await getCharacters('/character')
        const { pages } = res.data.info
        const arr = []
        for( let i = 1; i <= pages; i++ ) {
          const res = await getCharacters(`/character/?page=${i}`)
          for( let j = 0; j < res.data.results.length; j++ ) {
            arr.push( res.data.results[j])
          }
        }
        setCharacter( arr )

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) {
            setError("")
            return
        }
        const res =  characters?.filter( character => character.location.name.toLowerCase().includes(search.toLowerCase()))
        
        if( res.length === 0 ){
            setError("No found location")
            return 
        }
        setCharacter(res)
        setError("")
    }

    return (

        <div className= { styles.container }>
            <form onSubmit= { handleSubmit }>
                <input 
                    className={styles.input} 
                    type= 'text' 
                    placeholder="Filter by Location" 
                    onChange= { handleChange }
                    />
                {
                    error !== undefined ? <p style={{color:'white', margin:'0'}}>{error}</p> : ""
                }
            </form>
            <button onClick= { handleRefresh } className={ styles.button } >Refesh page</button>
        </div>
  )

}
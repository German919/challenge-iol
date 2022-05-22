import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from './card.module.css'

export default function Card( {image, name, species, id}) {

    const navigate = useNavigate();
    
    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }
    return (

        <div className={styles.containerCard}>
            <header>
                <h5>FAV</h5>
            </header>
            <figure>
                <img className={styles.image} width="150" height="150" src={ image } alt={ name } />
            </figure>
            <h2 onClick={ () => handleDetails( id ) }className={styles.name} >{ name }</h2>
            <h4 className={styles.species} >{ species }</h4>
        </div>
  )
}

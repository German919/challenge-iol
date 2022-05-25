import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from '../../context/user/UserContext'
import styles from './card.module.css'

export default function Card( {image, name, species, id, fav}) {

    const navigate = useNavigate();

    const { getFav, deleteFav } = useContext( UserContext )
    
    const handleFav = (e) => {
        if(e.target.checked){
            getFav(id)
        }else{
            deleteFav(id)
        }
    }
    
    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }
    
    return (

        <div className={styles.containerCard}>
            <header className={styles.header}>
                <div className={styles.headerContainer}> 
                    <input style={{cursor: 'pointer'}} value={fav} defaultChecked={fav} type='checkbox' onClick= { handleFav } />
                    <h5 style={{margin:'10px 5px'}} >FAV</h5>
                </div>
            </header>
            <figure>
                <img className={styles.image} width="150" height="150" src={ image } alt={ name } />
            </figure>
            <h2 onClick={ () => handleDetails( id ) }className={styles.name} >{ name }</h2>
            <h4 className={styles.species} >{ species }</h4>
        </div>
  )
}

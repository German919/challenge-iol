import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from '../../context/user/UserContext'
import styles from './card.module.css'

export default function CardFavorites( {image, name, species, id}) {

    const navigate = useNavigate();

    const { getFav, deleteFav } = useContext( UserContext )
    
    const handleFav = (e) => {
        if(e.target.checked){
            deleteFav(id)
        }
    }
    
    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }

    return (

        <div className={styles.containerCard}>
            <header className={styles.header}>
                <div className={styles.headerContainerFav}> 
                    <input style={{cursor: 'pointer', marginLeft: '0px', marginTop: '5px'}} type='checkbox' onClick= { handleFav } />
                    <h6 style={{margin:'10px 0px', fontSize: '.75rem'}} >remove</h6>
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

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacters } from '../../services/axios';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import styles from './details.module.css';

export default function Details() {

    const { id } = useParams()
    
    const [ details, setDetails ] = useState()

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }
    useEffect(() => {
        const getDetailsCharacter = async () => {
            const res = await getCharacters(`/character/${id}`)
            setDetails( res.data )
        }
        getDetailsCharacter()
    },[])

    return (
        <div>
            <nav className= { styles.nav } >
                <img width='400' src= { logo } alt='logo' />
            </nav>
            <div className= { styles.containerBtn }>
                <button onClick= { handleBack } className= { styles.button }> back </button>
            </div>
            {
                details &&
                <div className={styles.containerCard}>
                    <header>
                        <h4>FAV</h4>
                    </header>
                    <div className={styles.containerStatus} > 
                        <div className= { details.status === 'Alive' ? styles.Alive 
                                    : details.status === 'Dead' ? styles.Dead : styles.unknown }>
                        </div>   
                        <h4 className={styles.status}>{details.status} </h4>
                    </div>
                    <figure>
                        <img className={styles.image} width="150" height="150" src={ details.image } alt={ details.name } />
                    </figure>
                    <h2 className={styles.name} >{ details.name }</h2>
                    <h4 className={styles.species} >{ details.species }</h4>
                    <h4 className={styles.origin} >{ details.origin.name }</h4>
                    <h4 className={styles.location} >{ details.location.name }</h4>
            </div>

            }
           
        </div>
  
        )
}

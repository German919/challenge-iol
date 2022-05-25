import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/user/UserContext'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import styles from './favorites.module.css'
import CardFavorites from '../cards/CardFavorites';

function Favorites() {

    const { fav } = useContext( UserContext )

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }

    return (

        <>
            <nav className= {styles.nav} >
                <img width='400' src={logo} alt='logo' />
            </nav>
            <div className= { styles.containerBtn }>
                <button onClick= { handleBack } className= { styles.button }> back </button>
            </div>
            <div className={ fav.length < 5 ? styles.flexCharacter : styles.gridCharacter}>
            {
            fav.length !== 0 ? fav.map( character => (
                <CardFavorites 
                    key = { character.id } 
                    id = { character.id }
                    image = { character.image } 
                    name = { character.name } 
                    species = { character.species } />
                ))
                : <h2 style={{color:'#D2DDE5', fontSize:'1.5rem'}}>THERE ARE NO FAVORITES</h2>
            }
            </div>
        </>
    )
}

export default Favorites
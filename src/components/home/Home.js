import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import Card from '../../components/cards/Card';
import Paginado from '../paginado';
import { getCharacters } from '../../services/axios';
import styles from './home.module.css';
import Filter from '../filter/Filter';

export default function Home() {

  const [ characters, setCharacter ] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); 
  const [charactersPerPage, setCharactersPerPage] = useState(15); 
    
  const indexLast = currentPage * charactersPerPage; 
  const indexFirst = indexLast - charactersPerPage;  
    
  const currentCharacters = characters && characters.slice(indexFirst, indexLast);

  const paginado = (page) => {
      setCurrentPage(page)
  }

  useEffect(() =>{

    const getAll = async () => {

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
    getAll()
    
  },[])

  return (
    <>
       <nav className= {styles.nav} >
        <img width='400' src={logo} alt='logo' />
      </nav>
      
      <Filter characters = { characters } setCharacter = { setCharacter }/>
      
      <div>
        <Paginado 
              characters={characters && characters.length} 
              paginado={paginado} 
              charactersPerPage={charactersPerPage}
              currentPage = { currentPage }
        />
      </div>

      <div className={ currentCharacters.length < 5 ? styles.flexCharacter : styles.gridCharacter}>
        {
          currentCharacters.map( character => (
            <Card 
                key = { character.id } 
                id = { character.id }
                image = { character.image } 
                name = { character.name } 
                species = { character.species } />
          ))
        }
      </div>

    </>
  )
}

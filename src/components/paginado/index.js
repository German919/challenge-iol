import React from 'react';
import Pagination from '@mui/material/Pagination';
import styles from './index.module.css';

const Paginado = ({characters, paginado, charactersPerPage, currentPage}) => {

    const pageNumbers = [];
    
    for( let i = 1; i <= Math.ceil(characters / charactersPerPage); i++ ){
        pageNumbers.push(i)
    }
    
    return(
        <nav className={styles.nav}>
            <Pagination defaultValue={currentPage}  
                count={pageNumbers.length} onChange={(e, v) => paginado(v)} color="primary"  shape="rounded" />
        </nav>
    )
}

export default Paginado;
import React from 'react';
import styles from './search.module.scss'


const Search = () =>{
    return (
    <div className={styles.search}>
    <input type="search" placeholder="Введіть назву виду"/>
    <button type="submit"></button>
    </div>
    )
}
export default Search

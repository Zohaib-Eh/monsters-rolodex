//import { Component } from "react";
import './search-box.styles.css';
import { useState } from 'react';

const SearchBar = ({className,placeholder,onSearchChange}) => {
    return (
        <div>
            <input className={`search-box ${className}`} 
            type='search' 
            placeholder={placeholder} 
            onChange={onSearchChange}
            />
        </div>
    )
}

// class SearchBar extends Component{
//     render(){
//         const {onSearchChange} = this.props;
//         const {className} = this.props;
//         const {placeholder} = this.props
//         return (
//             <div>
//                 <input className={`search-box ${className}`} 
//                 type='search' 
//                 placeholder={placeholder} 
//                 onChange={onSearchChange}
//                 />
//             </div>
//         )
//     }
// }

export default SearchBar;
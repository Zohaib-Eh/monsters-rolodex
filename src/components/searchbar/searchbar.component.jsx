import { Component } from "react";
import './search-box.styles.css';

class SearchBar extends Component{
    render(){
        const {onSearchChange} = this.props;
        const {className} = this.props;
        const {placeholder} = this.props
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
}

export default SearchBar;
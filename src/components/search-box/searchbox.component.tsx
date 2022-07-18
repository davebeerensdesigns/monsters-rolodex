import './search-box.style.css';

const name: string = 345154;

const SearchBox = ({className, placeholder, onChangeHandler}) =>  (
            <input
                className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        )

export default SearchBox
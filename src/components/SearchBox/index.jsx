import { useRef } from 'react';
import { ReactComponent as IconArrow } from './icon-arrow.svg'
const className = 'search-box';
import './styles.scss';

const SearchBox = ({ onSearch }) => {
    const inputRef = useRef(null);

    const handleSearch = (searchValue) => {
        if (searchValue) {
            onSearch(inputRef.current.value)
        };
    };

    return (
        <form
            className={className}
            onClick={() => inputRef.current.focus()}
            onSubmit={e => e.preventDefault()}
        >
            <input
                className={`${className}__input`}
                placeholder="Search for any IP address or domain"
                onClick={e => e.target.select()}
                onKeyDown={e => e.key === 'Enter' && handleSearch(inputRef.current.value)}
                ref={inputRef}
                required
            />
            <button
                className={`${className}__button`}
                onClick={() => handleSearch(inputRef.current.value)}
            >
                <IconArrow />
            </button>
        </form>
    );
};

export default SearchBox;

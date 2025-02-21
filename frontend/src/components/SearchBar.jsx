import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return(
        <>
        <div style={styles.wrapper}>
            <input type="text" placeholder="Search..." style={styles.inp}/>
            <span style={styles.icon}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </div>
        </>
    );
}

export default SearchBar;

const styles = {
    wrapper: {
        // background: "green",
        width: "35%",
    },

    inp:{
        border: "2px solid #ddd",
        position: "relative",
        width: "100%",
        borderRadius: "20px",
        fontSize: "1.2em",
        padding: "2px 10px 2px 25px",
        color: "gray",
    },

    icon:{
        position: "relative",
        left:"10px",
        top: "-30px",
        color: "gray",
    },
};
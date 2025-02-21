import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return(
        <>
        <div style={styles.wrapper} className="flex flex-col items-center h-screen">
            
            <div className='flex-grow'>
            <ul role='list' className='my-2'>
                <li className='p-2 my-1' style={styles.active}>
                    <span><FontAwesomeIcon icon={faGear} /></span>
                </li>
                <li className='p-2 my-1'>
                    <span><FontAwesomeIcon icon={faHouse} /></span>
                </li>
                <li className='p-2 my-1'>
                    <span><FontAwesomeIcon icon={faPaperclip} /></span>
                </li>
                <li className='p-2 my-1'>
                    <span><FontAwesomeIcon icon={faBriefcase} /></span>
                </li>
            </ul>
            </div>

            
                <span style={styles.bottomBtn} className='my-2'><FontAwesomeIcon icon={faArrowUpFromBracket} /></span>
            
        </div>
        </>
    );
}

export default Navbar;

const styles = {
    wrapper:{
        background: "#fff",
        height: "86vh",
        width: "45px",
        margin: "6px 2px",
        borderRadius: "25px",
        boxShadow: "1px 2px 10px rgba(0,0,0,0.09)",
    },
    active:{
        background: "#FABB18",
        height: "35px",
        width: "35px",
        paddingTop: "5px",
        paddingLeft: "9px",
        borderRadius: "25px",
        color:"#fff",
    },
    bottomBtn:{
        background: "#DE3163",
        height: "35px",
        width: "35px",
        padding: "5px 0 0 10px",
        borderRadius: "20px",
        transform: "rotate(270deg)",
        color:"#fff",
    }
};
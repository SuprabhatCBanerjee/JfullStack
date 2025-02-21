import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
const UserIcon = () => {
    return(
        <>
        <div>
            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-4 sm:py-1 ..."> 
                   <div className="space-y-0.5">
                        <span className='text-xl'><FontAwesomeIcon icon={faBell} /></span>
                        <span style={styles.badge}></span>
                   </div>
        
                <img className="mx-auto block h-14 rounded-xl sm:mx-0 sm:shrink-0" src="https://placehold.co/50" alt="" />
            </div>
        </div>
        </>
    );
}

export default UserIcon;

const styles = {
    badge:{
        position: "relative",
        display:"block",
        width: "8px",
        height: "8px",
        left: "10px",
        top:"-25px",
        background: "red",
        borderRadius: "10px",
    }
};
// import Background from "../components/Background";
import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import UserIcon from "../components/UserIcon";
import CurrentTaskList from "../components/CurrentTaskList";
import OngoingTaskList from "../components/OngoingTaskList";
import Progress from "../components/Progress";
import MembersList from "../components/MembersList";
const DashBoard = () => {
    return(
        <>
        {/* <CurrentTaskList></CurrentTaskList> */}
        {/* <Progress></Progress> */}
        {/* <MembersList></MembersList> */}
        {/* <SearchBar></SearchBar> */}
        {/* <UserIcon></UserIcon> */}
        
        {/* <OngoingTaskList></OngoingTaskList> */}
        {/* <div style={styles.test}>
        <Navbar></Navbar>
        </div> */}

        <div className="flex w-full m-2 p-2">
            <div className="w-22">
                <Navbar/>
            </div>
            
            {/* <UserIcon/> */}
               <div className="flex flex-col">

                <div className="flex w-full min-w-0 gap-x-4">
                
                <SearchBar/>

                    <div style={styles.user} className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <UserIcon/>
                    </div>
                    
                </div>

               <div className="flex w-full">

                <CurrentTaskList/>

                <OngoingTaskList/>

                </div>

                <div className="flex">
                    <Progress/>

                    <MembersList/>
                </div>

               </div>


            
                
            
        </div>
        </>
    );
}

export default DashBoard;

const styles = {
    test:{
        position: "fixed",
        top: "50px",
        right: "100px",
    },
    user:{
        width:"65%",
        // border:"1px solid #ddd",
    }
};
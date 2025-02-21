import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import UserIcon from "../components/UserIcon";
import SingleContent from "../components/single/SingleContent";
import SinglePageComment from "../components/single/SinglePageComment";

const SinglePage = () => {
    return(
        <>
        <div className="flex w-full m-2 p-2">
            <div className="w-22">
                <Navbar/>
            </div>
            
            {/* <UserIcon/> */}
               <div className="flex flex-col w-full">

                <div className="flex w-full min-w-0 gap-x-4">
                
                <SearchBar/>

                    <div className="hidden w-[65%] shrink-0 sm:flex sm:flex-col sm:items-end">
                        <UserIcon/>
                    </div>
                    
                </div>

               <div className="flex">
                    <div className="flex w-[55%] mx-1 overflow-y-scroll h-[75%]">
                        <SingleContent/>
                    </div>

                    <div className="flex-1 w-[40%] mx-1 h-[75%] ">
                        <h2 className="text-2xl font-semibold m-2 fixed">Comments</h2>
                        <div className="relative top-10 h-[92%] overflow-y-scroll">
                        <SinglePageComment/>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        </>
    );
};

export default SinglePage;
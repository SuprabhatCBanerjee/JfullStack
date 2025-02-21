import { Link } from "react-router-dom";
import HPNavbar from "../components/HPNavbar";
import bgImg from "../assets/images/pattern-randomized.png";
const HomePage = () => {
    return(
    <>
    <div style={{backgroundImage:`url(${bgImg})`, backgroundSize:"cover"}}>
    <HPNavbar/>
        <div className="relative w-full flex justify-center items-center h-[72vh]">
            <div className="flex flex-col w-2/3 p-5 items-center text-center">
                <h1 className="text-6xl font-bold text-gray-700 my-4 mx-10 w-2/3">Lorem ipsum dolor sit amet.</h1>
                    
                    <p className="text-xl text-gray-500 my-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Distinctio maxime excepturi dignissimos mollitia aspernatur a!
                        Accusamus deleniti omnis reprehenderit quos.
                    </p>

                <div className="flex justify-center">    
                    <Link to="/login" className="btn bg-transparent hover:bg-blue-500 hover:text-white rounded py-2 px-4 mx-3 border">Login</Link>
                    <Link to="/signup" className="btn bg-transparent hover:bg-blue-500 hover:text-white rounded py-2 px-4 mx-3 border">Sign Up</Link>
                    <Link to="/dashboard" className="btn bg-transparent hover:bg-blue-500 hover:text-white rounded py-2 px-4 mx-3 border">DashBoard</Link>
                    <Link to="/spa" className="btn bg-transparent hover:bg-blue-500 hover:text-white rounded py-2 px-4 mx-3 border">Single Page</Link>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default HomePage;
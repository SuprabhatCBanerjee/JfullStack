import pic1 from "../assets/images/piiic2.png";
import pic2 from "../assets/images/pattern-randomized.png";
const SignupPage = () => {
    return(
        <>
        <div className="flex h-full">
        <img src={pic2} className="w-full h-full absolute z-1" alt="" />
            <div className="w-1/2 h-full z-3">
                <div className="flex pl-2 justify-center items-center mx-20 my-15 rounded backdrop-filter backdrop-blur-[2px] shadow-md" >
                    
                    <div className="mx-auto w-full max-w-xs my-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2  className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-[#DE3163]">Welcome</h2>
                        </div>
                       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" className="space-y-6">

                                <div className="relative">
                                    <label htmlFor="name" className="text-[#DE3163] font-medium text-xs px-1 bg-white rounded-lg inline-block left-2 -top-2 absolute">Name</label>
                                    <input type="text" className="outline-gray-300 outline-offset-0 outline-1 text-gray-900 p-1 px-3 bg-white rounded-md w-full block" />
                                </div>

                                <div className="relative">
                                    <label htmlFor="email" className="text-[#DE3163] font-medium text-xs px-1 bg-white rounded-lg inline-block left-2 -top-2 absolute">Email</label>
                                    <input type="text" className="outline-gray-300 outline-offset-0 outline-1 text-gray-900 p-1 px-3 bg-white rounded-md w-full block" />
                                </div>

                                <div className="relative">
                                    <label htmlFor="phone" className="text-[#DE3163] font-medium text-xs px-1 bg-white rounded-lg inline-block left-2 -top-2 absolute">Phone</label>
                                    <input type="text" className="outline-gray-300 outline-offset-0 outline-1 text-gray-900 p-1 px-3 bg-white rounded-md w-full block" />
                                </div>

                                <div className="relative">
                                    <label htmlFor="password" className="text-[#DE3163] font-medium text-xs px-1 bg-white rounded-lg inline-block left-2 -top-2 absolute">Password</label>
                                    <input type="text" className="outline-gray-300 outline-offset-0 outline-1 text-gray-900 p-1 px-3 bg-white rounded-md w-full block" />
                                </div>

                                <div className="relative">
                                    <label htmlFor="cpassword" className="text-[#DE3163] font-medium text-xs px-1 bg-white rounded-lg inline-block left-2 -top-2 absolute">Confirm Password</label>
                                    <input type="text" className="outline-gray-300 outline-offset-0 outline-1 text-gray-900 p-1 px-3 bg-white rounded-md w-full block" />
                                </div>

                                <div className="relative">
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-[#DE3163] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#FABB18] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                                </div>

                        </form>

                            <p className="mt-1 text-center text-sm/6 text-[#DE3163]">
                            Have an account
                            <a href="#" className="font-semibold text-indigo-600 hover:text-[#FABB18]"> Click here for sign in</a>
                            </p>

                       </div>
                    </div>
                </div>            
            </div>
            <div className="w-1/2 flex justify-center items-center z-2">
            <img src={pic1} className="h-[65%]" />
            </div>
        </div>
        </>
    );
};

export default SignupPage;
import bgSvg from "../assets/images/waves-2-large.png";
const LoginPage = () => {
    return(
        <>
        <div style={styles.wrapper} className="flex flex-col w-full h-screen">
                <div className="flex-grow">
                <img src={bgSvg} className="w-full absolute" alt="" />

                    <div className="flex w-full justify-center flex-col mt-22">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 style={styles.txt} className="mt-10 text-center text-2xl/9 font-bold tracking-tight">Sign in to your account</h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label style={styles.txt} className="block text-sm/6 font-medium">Email address</label>
                                <div className="mt-2">
                                <input type="email" name="email" style={styles.bd} id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                <label style={styles.txt} className="block text-sm/6 font-medium">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                                </div>
                                <div className="mt-2">
                                <input type="password" style={styles.bd} name="password" id="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                                </div>
                            </div>

                            <div>
                                <button type="submit" style={styles.theme} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                            </form>

                            <p style={styles.txt} className="mt-10 text-center text-sm/6">
                            New Here
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500"> Click here for signup</a>
                            </p>
                        </div>
                    </div>



                </div>
            <img src={bgSvg} className="w-full rotate-180" alt="" />
        </div>
        </>
    );
};

export default LoginPage;

const styles = {
    wrapper:{
        height:"90vh",
    },
    theme:{
        color:"#fff",
        background: "#DE3163",
    },
    txt:{
        color:"#DE3163",
    },
    bd:{
        border:"2px solid #DE3163",
    },
}
const BillBoard = () => {
    return(
        <>
            <div className="flex flex-col items-center justify-center">
                
                <img src="https://placehold.co/100" alt="" className="h-20 m-1"/>
                <h2 className="text-xl font-bold my-1">UI/UX Designer</h2>
                <p className="text-sm text-gray-500">lorem ipsum</p>

                <div className="mt-4">
                    <ul role="list" className="divide-x divide-gray-300">
                        <li className="p-2 text-center inline-block">
                            <h2 className="font-bold">23</h2>
                            <p className="text-xs">lorem</p>
                        </li>
                        <li className="p-2 text-center inline-block">
                            <h2 className="font-bold">#2</h2>
                            <p className="text-xs">ipsum</p>
                        </li>
                        <li className="p-2 text-center inline-block">
                            <h2 className="font-bold">17</h2>
                            <p className="text-xs">dolor</p>
                        </li>
                    </ul>
                </div>
            
            </div>
        </>
    );
};

export default BillBoard;


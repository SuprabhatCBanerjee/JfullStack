const SingleContent = () => {
    return(
        <>
        <div className="flex flex-col">
            
                <img src="https://placehold.co/600x300" alt="" className="m-2 rounded shadow-md" />
            

            <div>
                <div className="px-4 py-2 bg-[#FABB18] text-gray-50">
                    <h2 className="text-2xl font-bold ">Titel 1</h2>
                    <div className="text-xs">
                        <span > 12/12/24</span>
                        <span className="mx-2"> 12/12/24</span>
                        <span > 12/12/24</span>
                    </div>
                </div>

                <div className="text-gray-700 border-[#FABB18] border">
                    <p className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores dolor eligendi adipisci odit possimus, mollitia
                        voluptatem obcaecati ut, illum qui necessitatibus ex
                        facilis reprehenderit nostrum suscipit aut delectus
                        quisquam aperiam recusandae reiciendis eos. 
                        Assumenda alias officiis eligendi? Incidunt numquam unde
                        vero repudiandae provident fuga! Cum voluptatum quae soluta neque nobis!
                    </p>

                    <p className="p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores dolor eligendi adipisci odit possimus, mollitia
                        voluptatem obcaecati ut, illum qui necessitatibus ex
                        facilis reprehenderit nostrum suscipit aut delectus
                        quisquam aperiam recusandae reiciendis eos. 
                        Assumenda alias officiis eligendi? Incidunt numquam unde
                        vero repudiandae provident fuga! Cum voluptatum quae soluta neque nobis!
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default SingleContent;
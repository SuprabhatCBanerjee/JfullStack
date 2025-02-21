const OngoingTaskCard = ({data}) => {
    return(
        <>
        <div style={styles.wrapper}>
            <div style={styles.box} className="flex items-center my-2">

                <div style={styles.Dbox} className="mx-2 text-center">
                    <p className="font-semibold text-white">{data.date}</p>
                    <p className="text-xs text-white">{data.month}</p>
                </div>

                <div className="text-center mx-2">
                    <p className="text-base font-semibold text-black">{data.description}</p>
                    <p className="text-sm text-gray-500">{data.destination}</p>
                </div>

                <div className="mt-1 flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                
            </div>
        </div>
        </>
    );
}

export default OngoingTaskCard;

const styles = {
    wrapper: {
        width: "100%",
        border: "2px solid #ddd",
        borderRadius: "10px",
        padding: "0.2em",
    },

    box:{
        width: "96%",
        margin: "0 auto",
    },

    Dbox:{
        width:"50px",
        background:"#FABB18",
        borderRadius: "10px",
    }
}
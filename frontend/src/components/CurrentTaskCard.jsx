const CurrentTaskCard = ({data}) => {
    return(
        <>
        <div style={styles.wrapper}>
            <div style={styles.box} className="flex flex-col items-center my-2">
                <img src={data.icon}  alt="" />
                <h2 className="text-xl font-bold my-1">{data.title}</h2>
                <p className="text-sm">{data.description}</p>
            </div>
        </div>
        </>
    );
}

export default CurrentTaskCard;

const styles = {
    wrapper: {
        width: "100%",
        boxShadow: "1px 1px 10px rgba(0,0,0,0.08)",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "0.1em",
    },

    box:{
        width: "100%",
    }
}
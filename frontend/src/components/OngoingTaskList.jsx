import OngoingTaskCard from "./OngoingTaskCard";
const OngoingTaskList = () => {
    const datas = [
        {id:1, date:28, month:"Jan", description:"lorem ipsum 1", destination: "Frontend"},
        {id:2, date:28, month:"Jan", description:"lorem ipsum 2", destination: "Backend"},
    ];
    return(
        <>
        <div style={styles.wrapper}>
            <h1 className="text-xl font-bold">Ongoing Task</h1>

            <div className="flex flex-col gap-2 p-4 sm:flex-col sm:items-center sm:gap-6 sm:py-4 ...">
                
             {datas.map(data => (
                <OngoingTaskCard key={data.id} data={data}/>
             ))}  

            </div>
        </div>
        </>
    );
}

export default OngoingTaskList;

const styles = {
    wrapper: {
        width: "40%",
        padding: "0",
        marginLeft: "1%",
    }
}
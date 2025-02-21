import CurrentTaskCard from "./CurrentTaskCard";
const CurrentTaskList = () => {
    const cards = [
        {id:1, title:"Title 1", description:"lorem ipsum dolor sit amet 1", icon:"https://placehold.co/100"},
        {id:2, title:"Title 2", description:"lorem ipsum dolor sit amet 2", icon:"https://placehold.co/100"},
        {id:3, title:"Title 3", description:"lorem ipsum dolor sit amet 3", icon:"https://placehold.co/100"},
    ];
    return(
        <>
            <div style={styles.wrapper}>
                <h1 className="text-2xl font-bold">Current Task</h1>

                <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                    
                    {cards.map(card => (
                        <CurrentTaskCard key={card.id} data={card}/>
                    ))}

                </div>
            </div>
        </>
    );
}

export default CurrentTaskList;

const styles = {
    wrapper: {
        width: "60%",
        padding: "0",
        marginRight: "1%",
    }
}
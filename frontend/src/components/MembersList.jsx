import Members from "./Members";
import BillBoard from "./BillBoard";
const MembersList = () => {
    const members = [
        {id:1,name:"John Doe", email:"john.doe@example.com"},
        {id:2,name:"Leslie Alexander", email:"leslie.alexander@example.com"},
        {id:3,name:"LiL Wanye", email:"lil.wanye@example.com"},
        {id:4,name:"LiL Wanye", email:"lil.wanye@example.com"},
    ];
    return(
        <>
        <div style={styles.wrapper} className="flex gap-2">
            <div style={styles.boxWrap} className="p-1">
                <h2 className="text-xl font-bold">Members</h2>
                <div style={styles.box1} className="flex justify-center m-2">
                    <ul role="list" className="divide-y divide-gray-600">

                        {members.map(member => (
                            <Members key={member.id} data={member}/>
                        ))}

                    </ul>
                </div>
            </div>

            <div style={styles.boxWrap} className="p-1">
                <h2 className="text-xl font-bold">Bill Board</h2>
                <div style={styles.box2} className="flex justify-center m-2">
                        <BillBoard/>
                </div>
            </div>
        </div>
        </>
    );
};

export default MembersList;

const styles = {
    wrapper:{
        width:"42%",
        height: "44vh",
        position:"relative",
        padding: "0",
        // background: "green",
    },
    box1:{
        width:"260px",
        height: "85%",
        overflowY: "scroll",
        boxShadow:"1px 1px 10px rgba(0,0,0,0.1)",
        borderRadius:"15px",
    },
    box2:{
        width:"220px",
        height: "85%",
        boxShadow:"1px 1px 10px rgba(0,0,0,0.1)",
        borderRadius:"15px",
    },
    boxWrap:{
        height: "100%",
    }
};
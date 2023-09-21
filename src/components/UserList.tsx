import UserCard from "./UserCard"

export default function UserList(){
     const users =[1,2,3,4,5]
    return <div className="flex flex-wrap space-x-2 bg-slate-300 px-10">
    {
       
        users.map((_,index:number)=>{
            return <div key={index} >
                <UserCard/>
            </div>
        })
    }

    </div>
}
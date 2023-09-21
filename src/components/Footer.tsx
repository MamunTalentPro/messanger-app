export function Footer(){
    const handleTypeMessage=()=>{

    }

    return <>
    <div className=" bg-white w-4/5 flex  ml-20 mb-10">
        <input placeholder="write a message ......" onChange={handleTypeMessage} className="h-10 ring-1 ring-blue-500 z-10 rounded-md bottom-0 bg-white w-screen shadow-lg px-5
        "     />
        <button className="transition ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ml-1 px-5 rounded-sm">
 Send
</button>
    
        

    </div>
    </>
}
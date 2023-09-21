import { useSelector } from "react-redux"

export function Messages(){
  const messages =useSelector((state:any)=>state?.messenger)
  
    return   <div
    id="messages"
    className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
  >
    {
      messages?.converSation?.map((chatRoom:any,index:number)=>{
        return chatRoom?.sender ?  <div key={index} className="chat-message">
        <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
               {chatRoom?.sender}
              </span>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"

            alt="My profile"

            className="w-6 h-6 rounded-full order-1"
          />


        </div>
      </div>
      :
      <div key={index} className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
            {chatRoom?.receiver}
            </span>
          </div>
        </div>
        <img
           src="/profile.jpeg"
          alt="My profile"
          className="w-6 h-6 rounded-full order-2"
        />
      </div>
    </div>
      })
    }
   
   
    
  </div>
}
import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSockContext } from '../../context/SocketContext';

const Conversation = ({conversation,lastIdx,emoji}) => {
  const{selectedConversation, setSelectedConversation}=useConversation();

  const isSelected = selectedConversation?._id===conversation._id;
  const {onlineUser}= useSockContext();
  const isOnline = onlineUser.includes(conversation._id);
  return <>
  <div
  className={`flex gap-2 items-center text-black bg-slate-950/30 hover:bg-slate-600 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-slate-700" : ""}`}
  onClick={() => setSelectedConversation(conversation)}
>
  <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
    <div className="w-12 rounded-full">
      <img src={conversation.profilePic} alt={conversation.fullName} />
    </div>
  </div>
  <div className="flex flex-col flex-1">
    <div className="flex gap-3 justify-between">
      <p className="font-bold ">{conversation.fullName}</p>
      <span className="text-xl text-black">{emoji}</span>
    </div>
  </div>
</div>
{!lastIdx && <div className="divider my-0 py-0 h-2"></div>}
  </>
}

export default Conversation;

{/*  
    
    import React from 'react';

const Conversation = () => {
  return <>
  <div className="flex gap-2 items-center hover:bg-slate-600 rounded p-2 py-1 cursor-pointer">
    <div className="avatar avatar-online">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
  </div>
</div>

    <div className="flex flex-col flex-1">
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>JohnWike</p>
            <samp className='text-xl'>🎃</samp>
        </div>
    </div>
  </div>
  <div className='divider my-0 py-0 h-1'></div>
  </>
}

export default Conversation;
    
    */}
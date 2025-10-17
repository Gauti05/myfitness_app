import React, { useState,useContext,useEffect } from 'react';
import { FitnessContext } from '../FitnessContext';

function Chat() {
const { user, chat, setChat } = useContext(FitnessContext);
const [message, setMessage] = useState('');
useEffect(() =>{
  if(!user||!user._id) return;
  fetch(`http://localhost:5000/api/chat/${user._id}`)
  .then(res =>{
    if(!res.ok) throw new Error('Failed to fetch chat data');
    return res.json();
  })
  .then(data => setChat(data))
  .catch(err => console.error(err));
} , [user, setChat]);

const sendMessage = async () => {
  if (!message.trim() ) return;  
try{
const res  = await fetch('http://localhost:5000/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ userId: user._id, message }),
})
const data = await res.json();
setChat(prev => [...prev,data]);
setMessage('');
}
catch(err){
console.error('Error sending message:', err);
}
}

return(
  <div className='p-4'>
<h1 className='text-xl font-bold mb-4 '>Chat section</h1>
<div className="border overflow-y-auto h-64 p-2 mb-4 bg-gray-50">
        {chat.map((msg, idx) => (
          <p key={idx} className="mb-2"><strong>{msg.sender}:</strong> {msg.message}</p>
        ))}
      </div>
      <div className='flex'>
<input
type='text'
value={message}
onChange={(e) => setMessage(e.target.value)}
className='border p-2 flex-grow mr-2'
placeholder='Type your message...'
/>
<button onClick={sendMessage} className="bg-blue-600 text-white px-4">Send</button>
      </div>
  </div>
)
}

export default Chat;


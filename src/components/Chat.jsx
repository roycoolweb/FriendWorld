import { useState } from 'react'
import { Client } from '@xmtp/xmtp-js'

export default function Chat({ wallet, address }) {
    const [xmtp, setxmtp] = useState(null)
    const [conversations, setconversations] = useState(null)
    const [text, settext] = useState("null")

    const start_chat = async() => {
        const x = await Client.create(wallet)
        setxmtp(x)
        const conversations = xmtp.conversations
        setconversations(conversations);
    }

    const send_message = async () => {
        const conversation = await xmtp.conversations.newConversation(
            address
        )
        await conversation.send(text)
    }

    return (
        <div className='container'>
            <button className='btn btn-primary btn-lg mt-1' onClick={start_chat}>
                Chat powered by XMTP
            </button>
            {conversations.map(c => (
                <p>{c.content}</p>
            ))}
            <div className="mb-3 row">
                <label for="text" className="col-sm-2 col-form-label">Text</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="text" onChange={(e) => settext(e.target.value)}/>
                </div>
            </div>
            <button className='btn btn-primary btn-lg mt-1' onClick={start_chat}>
               Send
            </button>
        </div>
    )
}
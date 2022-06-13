import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Chat.css';
import { SortMessages } from './SortMessages'
import { ChatMessageSent } from './ChatMessageSent'
import Messages from '../utiles/messages.json'




export const Chat: React.FC = () => {

    type UserMessage = {
        is_received: boolean,
        text: string
    }

    const defaultUserMessage: UserMessage = {
        is_received: false,
        text: ''
    }

    const [usermessage, setUserMessage] = useState(defaultUserMessage)

    const onChange = <P extends keyof UserMessage>(prop: P, value: UserMessage[P]) => {
        setUserMessage({ ...usermessage, [prop]: value });
    }  

    
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const chatbody = document.getElementById('chatbody') as HTMLDivElement
        if (usermessage.text !== '') {
            const newdiv = document.createElement('div')
            newdiv.className = 'col s12 left-align'
            ReactDOM.render(<ChatMessageSent message={usermessage.text} />, newdiv)
            chatbody.appendChild(newdiv)
            setUserMessage(defaultUserMessage)
            chatbody.scrollTop = chatbody.scrollHeight;
        }
    }  
    


    return <>
        <div className="container center-align page-wrapper" >
            <div className="row chat-body" id='chatbody'>
                {
                    Messages.map(item => {
                        return (
                            <SortMessages message={item} />
                        )
                    })
                }
            </div>
            
            <div className="row message-text-field">
                <div className="input-field col s11">
                    <form onSubmit={handleSubmit} >
                        <input id="input"
                                type="text"
                                className="validate"
                                value={usermessage.text}
                                placeholder="Type something..."
                                onChange={(e) => onChange("text", e.target.value)} />
                        <label htmlFor='input'></label>
                        <i className="material-icons prefix send-btn"
                           onClick={handleSubmit}>send</i>
                    </form>
                </div>
            </div>
            
        
        </div>
    </>
}
import React from 'react'
import './Chat.css';

type MessageProps = {
    message: string;
};

export const ChatMessageSent = ({ message }: MessageProps): JSX.Element => {
    return <>
        
        <div className="card-panel messagebox light-blue lighten-4 sent">
                {message}
            
        </div>
    </>
}
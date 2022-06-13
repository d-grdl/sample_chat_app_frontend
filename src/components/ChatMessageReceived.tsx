import React from 'react'

type MessageProps = {
    message: string;
};

export const ChatMessageReceived = ({ message }: MessageProps): JSX.Element => {
    return <>
        <div className="card-panel messagebox amber lighten-5 received">
                {message}
            </div>
        
    </>
}
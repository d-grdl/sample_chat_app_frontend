import React, { useState } from 'react'
import './Chat.css';
import { ChatMessageReceived } from './ChatMessageReceived'
import { ChatMessageSent } from './ChatMessageSent'

type MessageProps = {
    message: {is_received: boolean, text: string}
};

export const SortMessages = ({ message }: MessageProps): JSX.Element => {
    if (message.is_received) {
        return <>
            <div className="col s12 left-align">
                <ChatMessageReceived message={message.text} />
            </div>
        </>
    }
    else {
        return <>
            <div className="col s12 left-align">
                <ChatMessageSent message={message.text} />
            </div>
        </>
    }
}
import ReactDOM from 'react-dom'
import { NavBarSignedIn } from '../components/NavBarSignedIn';
import { Chat } from '../components/Chat';
import { Footer } from '../components/Footer';


export const ChatPage: React.FC = () => {
    return <>
        <NavBarSignedIn />
        <Chat />
        <Footer />
    </>
}
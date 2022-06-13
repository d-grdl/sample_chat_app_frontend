import ReactDOM from 'react-dom'
import { NavBarSignedIn } from '../components/NavBarSignedIn'
import { UserProfile } from '../components/UserProfile'
import { Footer } from '../components/Footer'
import { FloatingButton } from '../components/FloatingButton'

export const UserProfilePage: React.FC = () => {
    return <>
        <NavBarSignedIn />
        <UserProfile />
        <FloatingButton />
        <Footer />
    </>
}
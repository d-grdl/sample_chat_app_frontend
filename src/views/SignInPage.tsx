import ReactDOM from 'react-dom'
import { NavBarSignedOut } from '../components/NavBarSignedOut';
import { Footer } from '../components/Footer';
import { FloatingButton } from '../components/FloatingButton';
import { SignInForm } from '../components/SignInForm';

export const SignInPage: React.FC = () => {
    return <>
        <NavBarSignedOut />
        <SignInForm />
        <FloatingButton />
        <Footer />
    </>
}
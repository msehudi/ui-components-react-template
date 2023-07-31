import { useNavigate } from "react-router-dom";
import './Nav.css'
import { useAuth } from "react-oidc-context";
import { hasResourceRole } from "../Keycloak";
export const Nav = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    return (
        <section>
            <button className="nav-button" onClick={() => navigate('/')}>Home</button>
            {auth.isAuthenticated && <button className="nav-button" onClick={() => navigate('/secure-page')}>Secure Page</button>}
            {!auth.isAuthenticated && <>
                <button className="nav-button" onClick={() => void auth.signinRedirect()}>Sign In</button>
            </>}
            {auth.isAuthenticated && <>
                <span className="user-name">
                    {auth.user?.profile.name}
                </span>
                <button className="nav-button" onClick={() => void auth.signoutSilent()}>Sing Out</button>
            </>}
        </section>
    )
};


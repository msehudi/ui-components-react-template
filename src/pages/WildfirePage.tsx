import "./WildfirePage.css"
import apiService from "../services/apiService";
import { useState } from "react";
import { useAuth } from "react-oidc-context";
import { hasResourceRole } from "../Keycloak";
import { WildfireTable } from "../components/WildfireTable";

const resource = 'wildfire-demo-api'
export const WildfirePage = () => {
    const auth = useAuth();

    return (
        <>{auth?.user?.access_token &&
            <div className="page-wrapper">
                <div className="card2">
                    <section>
                        <h5>
                        This page is secured with keycloak
                        </h5>                   
                        <WildfireTable />
                    </section>

                </div>
            </div>
        }</>
    )
};
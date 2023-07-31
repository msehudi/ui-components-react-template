import { useState, useEffect } from "react";
import { GoAButton, GoATable } from "@abgov/react-components"
import { Wildfire } from "../models/Wildfire";
import apiService from "../services/apiService";
import { useAuth } from "react-oidc-context";
import { hasResourceRole } from "../Keycloak";
export const WildfireTable = (props: any) => {
    const resource = 'wildfire-demo-api';
    const [wildfires, setWildfires] = useState<Wildfire[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const auth = useAuth();
    const loadData = () => {
        setIsLoading(true);
        apiService.getWildfireRecord(auth?.user?.access_token || '').then(data => {
            setWildfires(data.$values || [])
            setIsLoading(false);
        });
    }
    useEffect(() => {
        loadData();
    }, []);
    function sortData(sortBy: string, sortDir: number) {
        const _wildfires = [...wildfires];
        _wildfires.sort((a: any, b: any) => {
            return (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir;
        });
        setWildfires(_wildfires);
    }
    return (
        <>
            {!isLoading &&
                <div>
                    {hasResourceRole(resource, "create_wildfire_record", auth?.user?.access_token || '') && <>
                        <GoAButton onClick={() => apiService.createWildfireRecord(auth?.user?.access_token || '').then(record => {
                            loadData();
                        })}>Add Wildfire record</GoAButton> <br />
                    </>}
                    <GoATable onSort={sortData}>
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Fire Number</th>
                                <th>Fire Year</th>
                                <th>Fire status</th>
                                <th>Area Estimate</th>
                                {/* <th>Assessment Date</th> */}
                                {/* <th>General Cause</th> */}
                                <th>Latitude</th>
                                <th>Longitude</th>
                                {/* <th>Fire Type</th> */}
                                {/* <th>Incident Type</th> */}
                                {/* <th>Responsible Area</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wildfires.map(wildfire =>
                                <tr key={wildfire.id}>
                                    <td>{wildfire.label}</td>
                                    <td>{wildfire.fireNumber}</td>
                                    <td>{wildfire.fireYear}</td>
                                    <td>{wildfire.fireStatus}</td>
                                    <td>{wildfire.areaEstimate}</td>
                                    {/* <td>{wildfire.assessmentDate}</td> */}
                                    {/* <td>{wildfire.generalCause}</td> */}
                                    <td>{wildfire.latitude}</td>
                                    <td>{wildfire.longitude}</td>
                                    {/* <td>{wildfire.fireType}</td> */}
                                    {/* <td>{wildfire.incidentType}</td> */}
                                    {/* <td>{wildfire.responsibleArea}</td> */}
                                    <td>
                                        {/* {!hasResourceRole(resource, 'update_wildfire_record', auth?.user?.access_token || '') && <> */}
                                        <GoAButton onClick={() => {
                                            apiService.updateWildfireRecord(auth?.user?.access_token || '', wildfire).then(record => {
                                                loadData();
                                            }).catch(error => {
                                            })
                                        }}>Update</GoAButton>  &nbsp;
                                        {/* </>} */}
                                        {hasResourceRole(resource, 'delete_wildfire_record', auth?.user?.access_token || '') && <>
                                            <GoAButton onClick={() => {
                                                debugger;
                                                apiService.deleteWildfireRecord(auth?.user?.access_token || '', wildfire.id as string).then(record => {
                                                    loadData();
                                                });
                                            }}>Delete</GoAButton> <br />
                                        </>}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </GoATable>
                </div>

            }
        </>
    );
}
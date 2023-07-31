import axios from "axios";
import { Wildfire } from "../models/Wildfire";

export default class apiService { 
  public static  createWildfireRecord = (access_token: string) => {
    return axios.post('http://localhost:5004/api/wildfire/create', {}, {
        headers: {
            'authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return (res.data);
    })
};
public static getWildfireRecord = (access_token: string) => {
    return axios.get('http://localhost:5004/api/wildfire/read/3', {
        headers: {
            'authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data;
    }).catch(error => {
        alert(error?.message)
    });
};
public static updateWildfireRecord = (access_token: string, wildfire: Wildfire) => {
    return axios.put('http://localhost:5004/api/wildfire/update', wildfire, {
        headers: {
            'authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data;
    })
};
    public static deleteWildfireRecord = (access_token: string, id: string) => {
        debugger;
    return axios.delete(`http://localhost:5004/api/wildfire/delete/${id}`, {
        headers: {
            'authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data;
    }).catch(error => {
        alert(error?.message)
    });
}
public static createAtrRecord = (access_token: string) => {
    return axios.post('http://localhost:5004/api/atr/create', {}, {
        headers: {
            'authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data;
    }).catch(error => {
        alert(error?.message)
    });
};
public static getAtrRecord = (access_token: string) => {
    return axios.get('http://localhost:5004/api/atr/read/3', {
        headers: {
            'authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data;
    }).catch(error => {
        alert(error?.message)
    });
};
public static updateAtrRecord = (access_token: string) => {
    return axios.put('http://localhost:5004/api/atr/update', {}, {
        headers: {
            'authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data;
    }).catch(error => {
        alert(error?.message)
    });
};
    public static deleteAtrRecord = (access_token: string) => {
        debugger;
    return axios.delete('http://localhost:5004/api/atr/delete', {
        headers: {
            'authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.data;
    }).catch(error => {
        alert(error?.message)
    });
};

}
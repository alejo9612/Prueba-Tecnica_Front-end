import { useState } from "react";

export const UserApi = () => {
    
    const [dataShow, setDataShow] = useState([])

    
    const buscar = async ({ values }) => {
        const userGitHub = `https://api.github.com/search/users?q=${values}`;
        const search = await fetch(userGitHub);
        const resp = await search.json()
        const data = await resp.items
        console.log('mostrar', data)
        setDataShow(data)
    }

    return { buscar, dataShow }
}

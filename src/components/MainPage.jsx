import React, { useState } from 'react'
import Swal from 'sweetalert2';
import '../css/index.css';

export const MainPage = () => {

    const [mostrar, setMostrar] = useState([])
    const [Values, setValues] = useState('');
    const [ver, setVer] = useState(false)

    // const {q = ''} = queryString.parse(location.search);
    //console.log(window.location)
    const handleInputChange = ({ target }) => {
        setValues(target.value);
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        if (Values !== 'iseijasunow') {
            setVer(true);
            buscar(Values);
        }
        else if (Values === undefined || Values === '') {
            Swal.fire({
                icon: 'Succes',
                title: 'Data determinada',
                text: 'Data inicial',
                footer: 'Volver a intentar'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario no encontrado!',
                footer: 'Volver a intentar'
            });
        }
        console.log('Se envio', Values)
    }

    const buscar = async ({ Values }) => {
        const userGitHub = `https://api.github.com/search/users?q=${Values}`;
        console.log(userGitHub)
        const search = await fetch(userGitHub);
        const resp = await search.json()
        const data = await resp.items
        console.log('mostrar', data)
        setMostrar(data)
    }



    return (
        <div className='my'>
            <form className="form"
                onSubmit={handleOnClick}
            >
                <div>
                    <input type='text'
                        value={Values}
                        onChange={handleInputChange}
                    />
                    <label className='lbl-buscar'>
                        <span className='text-name'>Buscar</span>
                    </label>
                </div>

                <div>
                    <button className="button"
                        type="submit"
                    >
                        Buscar..
                    </button>
                </div>
            </form>
            {/* <ListUser name={Values}/> */}

            <div className="container2">
                {
                    mostrar.map((item, index) => {
                        return (
                            <>
                                <div key={index}
                                    className='card'
                                >
                                    <a href={item.html_url} target='_blank'>
                                        <img src={item.avatar_url} alt={item.login} />
                                    </a>
                                    <div>
                                        <p><i class="fa-solid fa-user"></i>  {item.login}</p>
                                        <p><i class="fa-solid fa-id-card"></i> {item.id}</p>
                                        <p><i class="fa-solid fa-circle-nodes"></i> {item.node_id}</p>
                                    </div>
                                </div>
                                <div className='grafica'>
                                    <tr>
                                        <td>
                                            <input
                                                value={item.followers_url}
                                            />
                                        </td>
                                    </tr>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

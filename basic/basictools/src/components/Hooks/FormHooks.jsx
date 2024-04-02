import React, { useState } from 'react'

const FormHooks = () => {
    const [list] = useState(['Leticia', 'Enzo', 'Pedro', 'João'])
    const [number, setNumber] = useState(15)
    const [user, setUser] = useState(
        [
            {id:1, nome:"Jose Carlos", idade: 44},
            {id:2, nome:"Jose Aldo", idade: 25},
            {id:3, nome:"Pedro H", idade: 21},
            {id:4, nome:"Joao V", idade: 19},
            {id:5, nome:"Enzo G", idade: 20},
            {id:6, nome:"Nicolas C", idade: 34},
            {id:7, nome:"Czar Romano", idade: 1900},
            {id:8, nome:"Julio Cesar", idade: 123}
        ]
    )
    const deleteRandonUser =()=>{
        const randomNumber = Math.floor(Math.random() * user.length)
        setUser((prevUsers)=> {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id )


        })
    }
    return (
        <>
            <div>
                <p>
                    <strong>Valor de numero</strong> {number}
                </p>
                <button onClick={() => { setNumber(32); console.log(number) }}>Mudar</button>
            </div>
            <div>
                <ul>{
                    list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
                </ul>
            </div>
            <div>
                <table>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            nome
                        </th>
                        <th>
                             idade
                        </th>
                    </tr>
                    {
                        user.map((pessoa)=>(
                            <tr key={pessoa.id}>
                                <td>{pessoa.id}</td>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.idade}</td>
                            </tr>
                        ))
                    }
                </table>
                <button onClick={deleteRandonUser}>Excluir Randomicamente</button>
            </div>
            
        </>
    )
}

export default FormHooks
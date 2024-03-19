import React from 'react'

var teste = 8
const Form = () => {
    const handleMyEvent =() =>{
        console.log()
        console.log("Ativou o evento")
    }
    const renderButton = (x) =>{
        if(x){
            return <h1>Renderizou bonitinho</h1>
        } else{
            return <h1>Renderizou lindinho</h1>
        }
    }
  return (
    <>
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
        <div>
            <button onClick={()=> {console.log("Yes! apertou em mim")}}>Clique em mim tambem</button>
        </div>
        <div>
            <button onClick={()=>{
                if (true){
                    console.log("isso nao deveria acontecer")
                }
            }}>Sera que voce clicaria aqui?</button>
        </div>
        <div>
            {renderButton(true)}
            {renderButton(false)}
        </div>
    </div>
    <div>
        <strong>Valor:</strong>{teste}
        <button onClick={() => {teste = 12; console.log(teste)}}>Aperte e mude</button>
        <strong>Valor:</strong>{teste}
    </div>
    </>

  )
}

export default Form
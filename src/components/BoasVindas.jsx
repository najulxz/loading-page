import { useState } from "react";

function BoasVindas() 
{
    const [ nome , setNome ] = useState('');

    return(
        <>
        <div>
        <input type="text" onChange={ (e) => {setNome( e.currentTarget.value) } }/>
        </div>
        <div>
            <span>{nome}</span>
        </div>
        </>
    )
}
export default BoasVindas;
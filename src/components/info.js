import Style from "./info.module.css";

function Info (props)
{
    return(
        <div className={Style.info}>
            <span className="info">Se você costuma cantar e vibrar com o palmeiras no estádio, esse plano é pra você! Descontos de até 100%!</span>
            <p></p>
            <hr></hr>
                <br></br>
            <h1>Você conhece o clube? 
                 Fundado por imigrantes italianos, seu primeiro nome foi Società Sportiva Palestra Italia.
                Em 1942 quando estava estabelecida como uma força do futebol paulista, a equipe foi obrigada a trocar de nome,
                passando a se chamar Sociedade Esportiva Palmeiras em decorrência da Segunda Guerra Mundial.</h1>
        
        </div>
       
    )
}
export default Info;
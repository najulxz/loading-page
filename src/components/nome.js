import Style from "./nome.module.css";

function Nome (props)
{
    return(
        <section className={Style.nome}>
            <h1>{props.nome}</h1>
        </section>
    )
}
export default Nome;
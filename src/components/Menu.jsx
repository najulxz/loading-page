import Style from "./Menu.module.css";

function Menu(props)
{
    return(
        <>
        <div className={Style.logo}>
            <img className="tamanho2" src={props.logo}/>
        </div>
        </>
    )
}
export default Menu;
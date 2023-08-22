import Style from "./texto.module.css";

function Info (props)
{
    return(
        <>
             <div className={Style.texto}>
                    <div className={Style.titulo}>
                        <span>{props.p1}</span>
                        <span>{props.d1}</span>
                        <span>{props.t1}</span>


                    </div>
                    <div className={Style.titulo}>
                        <span>{props.p2}</span>
                        <span>{props.d2}</span>
                        <span>{props.t2}</span>

                    </div>
                    <div className={Style.titulo}>
                        <span>{props.p3}</span>
                        <span>{props.d3}</span>
                        <span>{props.t3}</span>


                    </div>
                    <div className={Style.titulo}>
                        <span>{props.p4}</span>
                        <span>{props.d4}</span>
                        <span>{props.t4}</span>


                    </div>
             </div>
        </>
    )
}
export default Info;
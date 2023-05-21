import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = (props) => {
    return (
        <div className={style.container}>
            <Link to = {`/recipes/${props.id}`} className={style.link}>    
                <div className={style.card}>
                    <img className={style.image} src={props.image} alt="img not found" />
                    <h3 className={style.name}>{props.name}</h3>  
                    
                    <h5 className={style.diets}>Diets: {props.diets.join(', ')}</h5>

                    {/* <p>imagen: {props.image}</p>
                    <p>name: {props.name}</p>
                    <p>diets: {props.diets}</p> */}
                    {/* <p>steps: {props.steps}</p> */}
                </div>
            </Link>
        </div>
    )
}

export default Card;
import style from "./Landing.module.css"
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>  <div className={style.container}>
            <h2 className={style.make}> HENRY </h2>    
                <h1 className={style.title}> SEARCH YOUR ACTIVITY </h1>
                <Link to = "/home">
                    <button className={style.button} > Welcome </button> 
                </Link>
                
            </div>
                
            
        </>       
        
    )
}
 
export default Landing;
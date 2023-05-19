import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postAct } from "../../redux/actions";
import style from "../Form/Form.module.css"

const Form =  () => {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getCountries())
    },[dispatch])

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "vacio",
        countries: []
    });

    const [errors, setErrors] = useState({})

    const validate = (form) => {
        let e = {
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        }

        // Duration
        if (form.duration === "")
            e.duration = "Required field";
        else if ( form.duration < 0 || form.duration > 24 )
            e.duration = "The duration must be between 0 to 24";

        // Difficulty
        if (form.difficulty === "")
            e.difficulty = "Required field";
        else if( 0 > form.difficulty || 5 < form.difficulty )
            e.difficulty = "The difficulty must be between 1 to 5";

        // Name
        if( form.name === "")
            e.name = "Required field";
        else if (/[^A-Za-z0-9 ]+/g.test(form.name))
            e.name = "Must not contain special keys";

        // Season
        if (form.season === "vacio")
            e.season = "Required field";

        // Country
        if (form.countries.length === 0)
            e.countries = "Required field";

        setErrors({...e})

    }

    const submitHandler = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3001/activities",form)
        .then(res => alert("Creado exitosamente"))
        .catch(err => alert(err))

    }

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;


        validate( {...form, [property]: value } )
        setForm( {...form, [property]: value } )  
    }

    const countriess = useSelector( (state) => state.paises);

    const handleSelect = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate( {...form, [property]: value } )
        if(property === "countries") {
            setForm ({
                ...form,
                countries: [...form.countries, value]
            })
        } else {
            setForm ({
                ...form,
                [property]: value
            })
        }
    }

    const handleDelete = (e) => {
        setForm({...form, countries: form.countries.filter( i => e !== i) })
    }   

    // useEffect( () => {
    //     console.log(form)
    //     console.log(errors)
    // },[form,errors])

    return (
        <form onSubmit={submitHandler} className={style.box}>

            <div className={style.cont}>
                <label className={style.campos}> Name: </label>
                <input className={style.inputs} type="text" value={form.name} onChange={changeHandler} name="name" /> 
                { errors.name && <p className={style.error}> {errors.name} </p> }    
            </div>

            <div className={style.cont}>
                <label className={style.campos}> Difficulty: </label>
                <input className={style.inputs} type="text" value={form.difficulty} onChange={changeHandler} name="difficulty" /> 
                { errors.difficulty && <p className={style.error}> {errors.difficulty} </p> }  
            </div>

            <div className={style.cont}>
                <label className={style.campos}> Duration: </label>
                <input className={style.inputs} type="text" value={form.duration} onChange={changeHandler} name="duration" />
                { errors.duration && <p className={style.error}> {errors.duration} </p> }
            </div>

            
            <div className={style.cont}>
                <label className={style.campos}> Season:  </label>
                <select className={style.inputs} name="season" value={form.season} onChange={(e) => handleSelect(e)} >
                <option value="vacio"> </option>
                        <option value={"Summer"}>Summer </option>
                        <option value={"Winter"}>Winter </option>
                        <option value={"Spring"}>Spring </option>
                        <option value={"Autumn"}>Autumn </option>
                </select>
                { errors.season && <p className={style.error}> {errors.season} </p> }
            </div>


            <div className={style.cont} >
                    <label className={style.campos}> Choose the country for your activity: </label>
                    <select className={style.inputs} name="countries" onChange={(e) => handleSelect(e)}>
                            <option> </option>                      
                        { countriess ?
                          countriess.map((con) => (
                            <option value={con.id}>{con.name}</option>
                        )): <option> Countries not found </option>}
                    </select>
                    {errors.countries && (<p className={style.error}>{errors.countries}</p>)}
                    
                
                </div>

                <div>
                    {form.countries.map( con => 
                        (
                            <div>
                                <input className={style.btnS} type="button" value="X" onClick={ () => handleDelete(con)} />
                                <h3> {con} </h3>
                            </div>
                        )
                        )}
                </div>
            
            <button type="submit" className={style.btnS}> Submit </button>

        </form>
    )
}

export default Form;
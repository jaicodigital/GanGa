import React, { useState, useEffect } from 'react'
import { getCategories, getSubcategory, postProducts } from '../Redux/Actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import s from './createProducts.module.css'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import Boton from '../Nav/boton'


function validate(input) {
    let errores = {};
    if (!input.name) {

        errores.name = "Se requiere un Nombre"
    } else if (!input.mark) {

        errores.mark = 'Se requiere una Marca'
    } else if (!input.description) {

        errores.description = 'Se requiere una Descripción'
    } else if (input.price <= 0) {

        errores.price = 'Se requiere un precio mayor a 0'
    } else if (input.status) {
        errores.status = 'Se requiere un status'

    } else if (!input.image) {
        errores.image = 'Es obligatorio una imagen del prducto'

    } else if (!input.idCategory) {
        errores.idCategory = 'es obligatorio una Categoria'
    }
    return errores
}




export default function CreateProducts() {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories)
    const getInfoGoogle = useSelector((state) => state.getInfoGoogle)

    const subcategories = useSelector((state) => state.subcategories)

    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const navigate = useNavigate();


    const [input, setInput] = useState({
        name: " ",
        mark: " ",
        description: " ",
        price: " ",
        status: " ",
        stock: " ",
        image: " ",
        idUser: getInfoGoogle.id,
        idCategory: " ",
        subcategories: " ",
    });
    console.log(input)

    function handleChange(e) {
        setInput(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelect(e) {
        setInput({
            ...input,
            status: e.target.value,
        })
    }
    function handleSelect1(e) {
        setInput({
            ...input,
            idCategory: e.target.value,
        })
        e.preventDefault();
        dispatch(getSubcategory(e.target.value))
    }
    function handleSelect2(e) {
        setInput({
            ...input,
            subcategories: [e.target.value]
        })
    }
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "htnah6yo");
        setLoading(true);

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/djrddcab5/image/upload",
            {
                method: "POST",
                body: data,
            }
        );

        const file = await res.json();
        setImage(file.secure_url);
    };


    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);



    function handleSubmit(e) {
        e.preventDefault();
        console.log("Soy input de la function", input)
        dispatch(postProducts(input))
        setInput({
            name: " ",
            mark: " ",
            description: " ",
            price: " ",
            status: " ",
            stock: " ",
            image: " ",
            idUser: " ",
            idCategory: " ",
            subcategories: " ",
        })
        alert("Producto Subido con exito, Esperando aprobacion del Administrador")
        navigate("/");
    }


    return (
        <div className={s.body}>
            <Boton
                parametro={"/panel"}
                icono={<BsFillArrowLeftSquareFill />} />

            <form className={s.form} onSubmit={handleSubmit}>

                <div className={s.grid1}>
                    <div className={s.derec}>
                        <div className={s.name}>
                            <label ><span >Nombre: </span ></label>
                            <div>
                                <input className="text-center bg-gray-700 text-white" onChange={handleChange} type='text' name="name" autoComplete="off" required />
                                {error.name && (
                                    <p>{error.name}</p>
                                )}
                            </div>
                        </div>
                        <div className={s.price}>
                            <label><span >Precio: </span ></label>
                            <div>
                                <input className="text-center bg-gray-700 text-white" onChange={handleChange} type='Number' name="price" autoComplete="off" required />
                                {error.price && (
                                    <p >{error.price}</p>
                                )}
                            </div>
                        </div>

                        <div className={s.product}>
                            <label><span>Tu producto es: </span></label>
                            <select className="text-center bg-gray-700 text-white" name="status" onChange={handleSelect}>
                                <option value="" >Nuevo o Usado</option>
                                <option value="true">Nuevo </option>
                                <option value="false">Usado </option>
                            </select>
                        </div>

                        {(input.status === "true") ?
                            (<div className={s.stock}>  <label><span>Stock: </span></label>
                                <input className="text-center bg-gray-700 text-white" onChange={handleChange} type="number" name="stock" autoComplete="off" />
                            </div>) : <p></p>

                        }
                    </div>

                    <div className={s.izq}>
                        <div className={s.grid2}>
                            <div>
                                <div className={s.marca}>
                                    <label><span >Marca: </span ></label>
                                    <div>
                                        <input className="text-center bg-gray-700 text-white" onChange={handleChange} type='text' name="mark" autoComplete="off" required />
                                        {error.mark && (
                                            <p >{error.mark}</p>
                                        )}
                                    </div>
                                </div>

                                <div className={s.descri}>
                                    <label><span >Descripción: </span ></label>
                                    <div >
                                        <input className="text-center bg-gray-700 text-white" onChange={handleChange} type='text' name="description" autoComplete="off" required />
                                        {error.description && (
                                            <p >{error.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>






                            <div className={s.cate}>
                                <label > Categoria: </label>
                                <select className="text-center bg-gray-700 text-white" name="idCategory" onChange={handleSelect1} >
                                    {
                                        categories.map((p, i) => (
                                            <option key={i} value={p.id}>{p.name}</option>
                                        ))

                                    }
                                </select >
                            </div>

                            <div className="text-center bg-gray-700 text-white">
                                {
                                    (input.idCategory === " ") ?
                                        (<h1>Debes Seleccionar una Categoria</h1>) :
                                        (
                                            <div>
                                                <label > SubCategoria: </label>
                                                <select className="text-center bg-gray-700 text-white" name="subcategories" onChange={handleSelect2} >
                                                    {(
                                                        subcategories[0].subcategories.map((p, i) => (
                                                            <option key={i} value={p}>{p}</option>
                                                        ))
                                                    )}
                                                </select >
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>



                <div className={s.grid5}>
                    <div className={s.grid3}>
                        <div>
                            <div className="pt-0 pb-2">
                                <label>Imagen</label>
                            </div>
                            <div className="text-center bg-gray-700 text-white">
                                <input

                                    className={s.inputs}
                                    onChange={uploadImage}
                                    type="file"
                                    name="image"
                                    required="required"
                                    accept="image/png,image/jpeg"
                                />
                                {error.image ? <p>{error.image}</p> : null}
                            </div>
                            <div className={s.imgName}>{(input.image = image)}</div>
                            <label>
                                {loading ? (
                                    <img className={s.imagenSubida} src={image} alt="No hay imagen" />
                                ) : (
                                    <p>Aun no has subido una imagen</p>
                                )}
                            </label>
                        </div>
                        <div className="p-5">
                            <button className={s.crear} type='submit'>Publicar Producto</button>
                        </div>
                    </div>
                </div>
            </form>


        </div >
    )

}


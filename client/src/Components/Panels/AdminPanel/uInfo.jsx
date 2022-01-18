import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import Nav from "../../Nav/NavBar/nav";

import { updateUser, getAllUsers } from "../../Redux/Actions/actions";
import s from './admin.module.css';
import VendorProducts from "./vendorProducts";


export default function UserInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allUsers = useSelector((state) => state.allUsers);
  
    // const userfil = useSelector((state) => state.getInfoGoogle)
    const { id } = useParams()
    const userfil = allUsers.filter((el) => el.id === id)
   
    

    
    const name = userfil[0]?.name;
    const surname = userfil[0]?.surname;
    const mail = userfil[0]?.mail;
    const cellphone = userfil[0]?.cellphone;
    const birthdate = userfil[0]?.birthdate;
    const address = userfil[0]?.address;
    const country = userfil[0]?.country;
    const province = userfil[0]?.province;
    const cp = userfil[0]?.cp;
    const seller = userfil[0]?.seller;
    const officialStore = userfil[0]?.officialStore;
    // const image = userfil[0]?.image;

    const [input, setInput] = useState({
        id: userfil[0]?.id,
        name: name,
        surname: surname,
        mail: mail,
        cellphone: cellphone,
        address: address,
        birthdate: birthdate,
        country: country,
        province: province,
        cp: cp,
        seller: seller,
        officialStore: officialStore
        // image: image,
    })


    useEffect(() => {
        dispatch(updateUser(input))
        dispatch(getAllUsers())
    }, [dispatch, input])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log('soy el input del submit: ', input)
        dispatch(updateUser(input));
        navigate("/panel")
        window.location.reload();
    }

    return (
        <div>
            <Nav />
            <div className="p-5">
                <Link to="/panel">
                    <button type="button">
                        {"<-Volver"}
                    </button>
                </Link>
            </div>
            <h3 className="text-center text-3xl">Modificar tus datos</h3>
            <form className="text-center" onSubmit={submit}>
                <div className="p-4">
                    <div>
                        <label> Nombre </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.name}
                        name="name"
                        placeholder="Nombre"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> Apellido </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.surname}
                        name="surname"
                        placeholder="Apellido"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> Correo </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.mail}
                        name="mail"
                        placeholder="Correo"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> Número de celular </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="number"
                        value={input.cellphone}
                        name="cellphone"
                        placeholder="Núnero de celular"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> Fecha de Nacimiento </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="date"
                        value={input.birthdate}
                        name="birthdate"
                        placeholder="Fecha de Nacimiento"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> Dirección </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.address}
                        name="address"
                        placeholder="Dirección"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> País </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.country}
                        name="country"
                        placeholder="País"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> Provincia </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.province}
                        name="province"
                        placeholder="Provincia"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> Código Postal </label>
                    </div>
                    <input className="text-center bg-gray-700 text-white"
                        onChange={handleChange}
                        type="text"
                        value={input.cp}
                        name="cp"
                        placeholder="Código postal"
                    />
                </div>
                <div className="p-4">
                    <div>
                        <label> Tienda Oficial </label>
                    </div>
                    <select className="text-center bg-gray-700 text-white" name="officialStore" onChange={handleChange}>
                        <option selected="true" disabled="disabled" >Seleccionar </option>
                        <option value="true" >true </option>
                        <option value="false" >false </option>
                    </select>
                </div>
                <div className="p-4">
                    <div>
                        <label> Hacer vendedor / Deshacer vendedor </label>
                    </div>
                    <select className="text-center bg-gray-700 text-white" name="seller" onChange={handleChange}>
                        <option selected="true" disabled="disabled" >Seleccionar </option>
                        <option value="true" >true </option>
                        <option value="false" >false </option>
                    </select>
                </div>
                <div className="p-5">
                    <button className={s.btnActualizar} type="submit">
                        Actualizar
                    </button>
                </div>

            </form >
            {!seller?  null : <VendorProducts id={id}/>}
        </div >
    )
}
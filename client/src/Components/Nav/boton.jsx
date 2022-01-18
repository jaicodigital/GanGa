import React from 'react'

import { Link } from 'react-router-dom'
export default function Boton({ parametro, icono }) {


    return (
        <div>
            <Link to={parametro} className="absolute left-10 top-10 bg-gray-700  text-4xl text-gray-50 p-2 rounded-full hover:bg-gray-500"
                > {icono} </Link>
        </div>
    )
}

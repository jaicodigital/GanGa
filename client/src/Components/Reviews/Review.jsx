import React, { useState, useEffect } from "react";
import { /*useSelector,*/ useDispatch } from "react-redux";
import { addReview, getUserInfoGoogle } from '../Redux/Actions/actions.js'

export function Review ({idUser, idProduct}){
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        description: "",
        qualificacion: "",
        idUser: idUser,
        idProduct: idProduct
      });

      
      useEffect(() => {
        dispatch(getUserInfoGoogle());
      }, [dispatch]);

      const [errors, setErrors] = useState({});

      function validate(input) {
        let errors = {};
        if (!input.description) {
          errors.description = "Ingrese el correo con el que se ha registrado";
        } else if (!input.qualificacion) {
          errors.qualificacion = "Ingrese su contraseña.";
        }
        return errors;
      }
    
      function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
        setErrors(
          validate({
            ...input,
            [e.target.name]: e.target.value,
          })
        );
      }
    
      function handleSubmitReviewProduct(e) {
        e.preventDefault();
        dispatch(addReview({description: input.description,
        qualificacion: input.qualificacion,
        idProduct: input.idProduct,
        }));
        setInput({        
        description: "",
        qualificacion: "",
        })

      } 

      function handleSubmitReviewUser(e) {
        e.preventDefault();
        dispatch(addReview({description: input.description,
        qualificacion: input.qualificacion,
        idUser: input.idUser,
        }))
        setInput({        
        description: "",
        qualificacion: "",
})
      }  

    return (
        <div>
            <form>

        <div class="flex item-center content-center justify-center my-1">
          <textarea
            className="h-19 border-gray-400 border-2 rounded pl-2 resize-none"
            name="description"
            type="text"
            placeholder="¿Que te parecio el producto?"
            value={input.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <p>{errors.description}</p>}
        <button
          className="border-gray-400 border-2 rounded ml-1 px-1 text-s"
          type="text"
          value="submit"
          onClick={handleSubmitReviewProduct}
          disabled={!(input.qualificacion && input.description)}
        >
          Agregar
        </button>
        </div>

        <div class="flex item-center content-center justify-center my-1">
          <textarea
            className="h-19 border-gray-400 border-2 rounded pl-2 resize-none"
            name="qualificacion"
            type="text"
            placeholder="Califica al Vendedor"
            value={input.qualificacion}
            onChange={handleChange}
          ></textarea>
          {errors.qualificacion && <p>{errors.qualificacion}</p>}
        <button
          className="border-gray-400 border-2 rounded ml-1 px-1 text-s"
          type="text"
          value="submit"
          onClick={handleSubmitReviewUser}
          disabled={!(input.qualificacion && input.description)}
        >Calificar</button>
        </div>

      </form>
        </div>
    )
}

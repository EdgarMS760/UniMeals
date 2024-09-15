import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { postHTTP, urlBase } from "../utils/Services";
import { AuthContext } from '../Context/AuthContext';

export const FormLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    const response = await postHTTP(`${urlBase}/usuarios/logIn`, JSON.stringify({ email: data.email, password: data.password }))
    if (response.error) {
      return setErrorMsgLogIn(response)
    }

    localStorage.setItem("User", JSON.stringify(response.userData))
  };
  console.log()
  return (
    <div className="bg-primary flex items-center justify-center rounded-lg ">
      <div className="w-full max-w-sm p-8 rounded-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Inicio de sesion</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Correo Electronico</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Ingrese su correo electronico' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">Contraseña</label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Ingrese su contraseña' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className=" border-solid border-2 border-secondary w-full py-2 px-4 hover:bg-secondary text-white font-semibold rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Continuar
          </button>
        </form>
        <NavLink
          to="/register"
          className=' text-secondary'
        >
          <span className=' text-slate-200'> ¿No tienes cuenta?</span>
          <span className='text-white font-bold'> Registrate</span>
        </NavLink>
      </div>
    </div>
  );
};


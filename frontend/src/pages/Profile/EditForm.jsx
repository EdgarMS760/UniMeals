import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const EditForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="flex items-center justify-center rounded-lg min-h-screen">
            <div className="w-full max-w-sm p-8 rounded-lg h-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-primary">Editar Perfil</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">Correo Electronico</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', { required: 'Ingrese su correo electronico' })}
                            className="mt-1 block w-full px-3 py-1 border rounded-md shadow-sm ring-black border-black focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-black">Nombre</label>
                        <input
                            id="nombre"
                            type="text"
                            {...register('nombre', { required: 'Ingrese su nombre' })}
                            className="mt-1 block w-full px-3 py-1 border  rounded-md shadow-sm ring-black border-black focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="apellido" className="block text-sm font-medium text-black">Apellido</label>
                        <input
                            id="apellido"
                            type="text"
                            {...register('apellido', { required: 'Ingrese su apellido' })}
                            className="mt-1 block w-full px-3 py-1 border ring-black border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-black">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', { required: 'Ingrese su contraseña' })}
                            className="mt-1 block w-full px-3 py-1 border ring-black border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirmar Contraseña</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            {...register('confirmPassword', { required: 'Ingrese su contraseña' })}
                            className="mt-1 block w-full px-3 py-1 border ring-black border-black rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className=" border-solid bg-primary border-2 border-primary w-full py-2 px-4 hover:bg-secondary text-white font-semibold rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Guardar Cambios
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditForm;

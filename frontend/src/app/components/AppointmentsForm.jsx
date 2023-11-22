"use client";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AppointmentsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const response = await fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: data.title,
                start: data.start,
                end: data.end,
                userId: data.userId,
            }),
        });
        if (response.ok) {
            toast.success("Cita creada correctamente");
        } else {
            toast.error("Error al crear la cita");
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto mt-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                    >
                        Título:
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Título de la cita"
                        {...register("title", { required: true })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="start"
                    >
                        Inicio:
                    </label>
                    <input
                        type="datetime-local"
                        id="start"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("start", { required: true })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="end"
                    >
                        Fin:
                    </label>
                    <input
                        type="datetime-local"
                        id="end"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("end", { required: true })}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="userId"
                    >
                        ID de Usuario:
                    </label>
                    <input
                        type="text"
                        id="userId"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="ID de usuario"
                        {...register("useId", { required: true })}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Guardar
                    </button>
                </div>
            </form>
            <Toaster />
        </>
    );
};

export { AppointmentsForm };

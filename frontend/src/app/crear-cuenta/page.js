"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
const crearCuenta = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL / users}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        email: data.email,
        password: data.password,
      }),
    });
    data = await res.json();
    if (data.message) {
      router.push("/");
    } else {
      toast.error("Email o contraseña incorrectos");
    }
  };
  return (
    <div className="flex flex-col items-center mt-14">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Crear una cuenta
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[30%]">
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-700  uppercase">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="border-2 w-full p-2 mt-2 rounded-md"
            {...register("nombre", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700  uppercase">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 w-full p-2 mt-2 rounded-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block text-gray-700  uppercase">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border-2 w-full p-2 mt-2 rounded-md"
            name="password"
            {...register("password", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white 
                    uppercase font-bold hover:bg-indigo-700 cursor-pointer"
        >
          Crear cuenta
        </button>
        <p className="text-center text-sm text-gray-500 mt-6">
          Ya estás registrado?{" "}
          <Link href="/" className="underline">
            Iniciar sesión
          </Link>
        </p>
      </form>
      <Toaster />
    </div>
  );
};

export default crearCuenta;

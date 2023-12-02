import React from "react";
import Link from "next/link";

const NotFoundAppointments = () => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-md max-w-md mx-auto mt-8 grid">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        ¡Opaaa! No hay turnos reservados
      </h1>
      <p className="text-lg text-center text-gray-600">
        Parece que no reservaste ningún turno. Hacelo ahora piolín!
      </p>

      <Link
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-center"
        href="/home"
      >
        Reservar ahora
      </Link>
    </div>
  );
};

export { NotFoundAppointments };

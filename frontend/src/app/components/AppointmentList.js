import { AppointmentItem } from "./AppointmentItem";

const AppointmentList = ({ appointments }) => {
  return (
    <div className="container mx-auto my-8 p-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-500">
        Lista de Turnos
      </h1>
      <section className="flex justify-center">
        <ul className="p-4">
          {appointments.map((appointment, key) => (
            <AppointmentItem key={key} appointment={appointment} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export { AppointmentList };

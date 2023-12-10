import { cookies } from "next/headers";
import { AppointmentList } from "../components/AppointmentList";
import { NotFoundAppointments } from "../components/NotFoundAppointments";

const getData = async () => {
  const cookieStore = cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore,
    },
  });
  const data = await res.json();
  return data;
};
const appointments = async () => {
  const appointments = await getData();
  return (
    <>
      <div className="my-8 p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Turnos Disponibles
        </h1>
        <section>
          {appointments.length > 0 ? (
            <AppointmentList appointments={appointments} />
          ) : (
            <NotFoundAppointments />
          )}
        </section>
      </div>
    </>
  );
};

export default appointments;

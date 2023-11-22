import { AppointmentsForm } from "@/app/components/AppointmentsForm";

const home = () => {
    return (
        <>
            <h1 className="text-center mt-12 text-2xl">
                Panel de Administración
            </h1>
            <AppointmentsForm />
        </>
    );
};

export default home;

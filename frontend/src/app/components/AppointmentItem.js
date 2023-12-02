import formatTime from "../lib/formatTime";
const AppointmentItem = ({ appointment }) => {
  const { title, start, end } = appointment;

  const startDate = new Date(start);
  const endDate = new Date(end);

  const day = startDate.toLocaleDateString();
  const startTime = formatTime(startDate);
  const endTime = formatTime(endDate);

  return (
    <>
      <li className="border rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 font-semibold">{day}</p>
        <p className="text-gray-600">
          {startTime} - {endTime}
        </p>
      </li>
    </>
  );
};

export { AppointmentItem };

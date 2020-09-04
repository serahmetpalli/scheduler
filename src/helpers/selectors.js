export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find((element) => element.name === day);

  if (!selectedDay) {
    return [];
  }

  const appointment = selectedDay.appointments.map(
    (element) => state.appointments[element]
  );

  console.log("selectedDay", selectedDay);

  return appointment;
}

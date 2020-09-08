export const getAppointmentsForDay = function (state, day) {
  const days = state.days.find((d) => d.name === day);

  if (!state.days.length || days === undefined) {
    return [];
  }

  // console.log("days", days.appointments);
  // console.log("state", state);

  const appointments = days.appointments.map((id) => state.appointments[id]);

  console.log("appointments", appointments);

  return appointments;
};

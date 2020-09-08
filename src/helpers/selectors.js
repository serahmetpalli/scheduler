import Interviewer from "components/InterviewerList";

export const getAppointmentsForDay = function (state, day) {
  const days = state.days.find((d) => d.name === day);

  if (!state.days.length || days === undefined) {
    return [];
  }

  const appointments = days.appointments.map((id) => state.appointments[id]);

  console.log("appointments", appointments);

  return appointments;
};

export const getInterview = function (state, interview) {
  if (!interview) {
    return null;
  }

  // const interviewData = state.interviewers.find(
  //   (i) => i.id === interviewers.id
  // );

  for (const apt in state.appointments) {
    if (state.appointments[apt].interview.interviewer === interview.interviewer) {
    }
  }
};

//add interviewers data to the fake state object.

/*

 "interviewer": {
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    }

    */


    /*

APPOINTMENTS: 
4: {
  id: 4,
  time: "3pm",
  interview: {
  student: "Archie Cohen",
  interviewer: "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    }
  }
},
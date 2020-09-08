import React from "react";
import DayListItem from "./DayListItem.js";

export default function DayList(props) {
  const myDays = props.days || [];
  console.log("myDays: ", myDays);
  return (
    <ul>
      {myDays.map((day) => (
        <DayListItem
          // id={day.id}
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.day}
          setDay={props.setDay}
        />
      ))}
    </ul>
  );
}
// const Days = myDays.map((day) => {
//   return (
//     <DayListItem
//       // id={day.id}
//       key={day.id}
//       name={day.name}
//       spots={day.spots}
//       selected={day.name === props.day}
//       setDay={props.setDay}
//     />
//   );
// });
// return <ul> {Days} </ul>;

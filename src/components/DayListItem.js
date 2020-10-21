import React from "react";
import "components/DayListItem.scss";
import classnames from "classnames/bind";

export default function DayListItem(props) {
  const formatSpots = function (props) {
    return props.spots === 0
      ? "no spots remaining"
      : props.spots === 1
      ? "1 spot remaining"
      : `${props.spots} spots remaining`;
  };

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  return (
    <li
      onClick={() => props.setDay(props.name)}
      data-testid="day"
      className={dayClass}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>
  );
}

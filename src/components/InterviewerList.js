import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function Interviewer(props) {
  const Interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={() => {
          console.log("interviewerList.setInterviewer()", interviewer.id);
          props.onChange(interviewer.id);
        }}
      />
    );
  });

  return (
    <section onClick={props.setInterviewer} className={props.array}>
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{Interviewers}</ul>
    </section>
  );
}

import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

export default function InterviewerList(props) {
  // console.log("interviewers", props.interviewers);
  const interviewers = props.interviewers.map((interviewer) => {
    // console.log("int.id", interviewer.id);
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={() => {
          console.log("interviewerList.setInterviewer()", interviewer.id);
          props.setInterviewer(interviewer.id);
        }}
      />
    );
  });
  console.log("interviewers", props.interviewers);
  console.log("interviewer", props.interviewer);
  return (
    <section className={props.array}>
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}

//prop types
InterviewerList.propTypes = {
  interviewer: PropTypes.number,
  setInterviewer: PropTypes.func.isRequired,
};

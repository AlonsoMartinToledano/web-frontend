import React from 'react';

import "./Styles.css"

const student = (props) => {
    return (
        <div className="Student">
            <p>
                <h2>Alumnos:</h2>
                <p onClick={props.onClickGrade1}>{props.studentName1} {props.studentGradeView1 ? "- " + props.studentGrade1 : ""}</p>
                <p onClick={props.onClickGrade2}>{props.studentName2} {props.studentGradeView2 ? "- " + props.studentGrade2 : ""}</p>
                <p onClick={props.onClickGrade3}>{props.studentName3} {props.studentGradeView3 ? "- " + props.studentGrade3 : ""}</p>
            </p>
        </div>
    )
}

export default student;
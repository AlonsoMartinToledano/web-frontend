import React from 'react';

import "./Styles.css"

const student = props => {
    const student1 = props.student[0].studentName;
    const student2 = props.student[1].studentName;
    const student3 = props.student[2].studentName;

    const grade1 = props.student[0].studentGrade;
    const grade2 = props.student[1].studentGrade;
    const grade3 = props.student[2].studentGrade;

    const view1 = props.student[0].view;
    const view2 = props.student[1].view;
    const view3 = props.student[2].view;

    const subjectName = props.subjectName;
    const onClickGrade = props.onClickGrade;

    return (
        <div className="Student">
            <span onClick={() => onClickGrade(subjectName, student1)}>
                {student1} {view1 ? grade1 : ""}
            </span>
            <br />
            
            <span onClick={() => onClickGrade(subjectName, student2)}>
                {student2} {view2 ? grade2 : ""}
            </span>
            <br />

            <span onClick={() => onClickGrade(subjectName, student3)}>
                {student3} {view3 ? grade3 : ""}
            </span>
            <br />
        </div>
    )
}

export default student;
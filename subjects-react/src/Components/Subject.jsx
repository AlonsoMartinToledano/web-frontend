import React from 'react';

import Teacher from './Teacher';
import Student from './Student';

import "./Styles.css"

const subject = (props) => {
    if(props.view){
        return (
            <div className="Subject">
                <h1 onClick={props.onClickSubject}>Asignatura: {props.subject}</h1>
                <Teacher teacher={props.teacher}/>
                <Student 
                    studentName1={props.studentName1}
                    studentName2={props.studentName2}
                    studentName3={props.studentName3}
                    studentGrade1={props.studentGrade1}
                    studentGrade2={props.studentGrade2}
                    studentGrade3={props.studentGrade3}
                    studentGradeView1={props.studentGradeView1}
                    studentGradeView2={props.studentGradeView2}
                    studentGradeView3={props.studentGradeView3}
                    onClickGrade1={props.onClickGrade1}
                    onClickGrade2={props.onClickGrade2}
                    onClickGrade3={props.onClickGrade3}
                />
            </div>
        )
    }
    else {
        return (
            <div className="Subject">
                <h1 onClick = {props.onClickSubject}>Asignatura: {props.subject}</h1>
            </div>
        )
    }
}

export default subject;

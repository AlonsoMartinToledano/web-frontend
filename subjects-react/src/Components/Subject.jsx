import React from 'react';

import Teacher from './Teacher';
import Student from './Student';

import "./Styles.css"

const subject = props => {
    const {subjectName, view, teacherName, student} = props.subject;
    const {onClickSubject, onClickGrade} = props;

    if(view){
        return (
            <div className="Subject">
                <h1 onClick={() => onClickSubject(subjectName)}>Asignatura: {subjectName}</h1>
                <Teacher teacher={teacherName}/>
                <Student 
                    student={student}
                    subjectName={subjectName}
                    onClickGrade={onClickGrade}
                />
            </div>
        )
    }
    else {
        return (
            <div className="Subject">
                <h1 onClick={() => onClickSubject(subjectName)}>Asignatura: {subjectName}</h1>
            </div>
        )
    }
}

export default subject;

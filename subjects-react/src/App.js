import React, { Component } from 'react';
import './App.css';
import cloneDeep from "clone-deep";

import Subject from './Components/Subject';

class App extends Component {
  state = {
    subject: [
      {
        subjectName: "Programación I",
        view: false,
        teacherName: "Alberto Valero",
        student: [
          { studentName: "Alonso Martín-Toledano", studentGrade: 8, view: false },
          { studentName: "Andres Bravo", studentGrade: 6, view: false },
          { studentName: "Laura Rodríguez", studentGrade: 7, view: false }
        ]
      }, 
      {
        subjectName: "Programación II",
        view: false,
        teacherName: "Alberto Valero",
        student: [
          { studentName: "Alonso Martín-Toledano", studentGrade: 7, view: false },
          { studentName: "Jose Luis de la Hoz", studentGrade: 9, view: false },
          { studentName: "Alvaro Velázquez", studentGrade: 8, view: false }
        ]
      }
    ]
  }

  clickSubjectHandler = name => {
    const subject = cloneDeep(this.state.subject);
    const subj = subject.find(s => s.subjectName === name);

    if(subj){
      subj.view = !subj.view;
    }

    this.setState({subject});
  }

  clickGradeHandler = (searchSubjectName, searchStudentName) => {
    const subject = cloneDeep(this.state.subject);
    const subj = subject.find(s => s.subjectName === searchSubjectName);

    if(subj){
      const student = subj.student.find(stud => stud.studentName === searchStudentName);
      if(student) student.view = !student.view;
    }

    this.setState({subject});
  }

  render() {
    return (
      <div className="App">
        <Subject 
          subject={this.state.subject[0]}
          onClickSubject={this.clickSubjectHandler}
          onClickGrade={this.clickGradeHandler}
        />
        <Subject 
          subject={this.state.subject[1]}
          onClickSubject={this.clickSubjectHandler}
          onClickGrade={this.clickGradeHandler}
        />
      </div>
    );
  }
}

export default App;

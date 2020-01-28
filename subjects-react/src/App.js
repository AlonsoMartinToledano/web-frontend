import React, { Component } from 'react';
import './App.css';

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
    this.state.subject.forEach(element => {
      if (element.subjectName === name){
        const i = this.state.subject.indexOf(element);
        this.state.subject[i].view = !this.state.subject[i].view;
        this.setState(this.state.subject);
      }
    })
  }

  clickGradeHandler = (searchSubjectName, searchStudentName) => {
    this.state.subject.forEach(element => {
      if (element.subjectName === searchSubjectName) {
        element.student.forEach(elem =>{
          if (elem.studentName === searchStudentName){
            const i = this.state.subject.indexOf(element);
            const j = this.state.subject[i].student.indexOf(elem);
            this.state.subject[i].student[j].view = !this.state.subject[i].student[j].view;
            this.setState(this.state.subject);
          }
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Subject 
          subject={this.state.subject[0].subjectName}
          view={this.state.subject[0].view}
          teacher={this.state.subject[0].teacherName}
          studentName1={this.state.subject[0].student[0].studentName}
          studentName2={this.state.subject[0].student[1].studentName}
          studentName3={this.state.subject[0].student[2].studentName}
          studentGrade1={this.state.subject[0].student[0].studentGrade}
          studentGrade2={this.state.subject[0].student[1].studentGrade}
          studentGrade3={this.state.subject[0].student[2].studentGrade}
          studentGradeView1={this.state.subject[0].student[0].view}
          studentGradeView2={this.state.subject[0].student[1].view}
          studentGradeView3={this.state.subject[0].student[2].view}

          onClickSubject={this.clickSubjectHandler.bind(this, this.state.subject[0].subjectName)}
          onClickGrade1={this.clickGradeHandler.bind(this, this.state.subject[0].subjectName, this.state.subject[0].student[0].studentName)}
          onClickGrade2={this.clickGradeHandler.bind(this, this.state.subject[0].subjectName, this.state.subject[0].student[1].studentName)}
          onClickGrade3={this.clickGradeHandler.bind(this, this.state.subject[0].subjectName, this.state.subject[0].student[2].studentName)}
        />
        <Subject 
          subject={this.state.subject[1].subjectName}
          view={this.state.subject[1].view}
          teacher={this.state.subject[1].teacherName}
          studentName1={this.state.subject[1].student[0].studentName}
          studentName2={this.state.subject[1].student[1].studentName}
          studentName3={this.state.subject[1].student[2].studentName}
          studentGrade1={this.state.subject[1].student[0].studentGrade}
          studentGrade2={this.state.subject[1].student[1].studentGrade}
          studentGrade3={this.state.subject[1].student[2].studentGrade}
          studentGradeView1={this.state.subject[1].student[0].view}
          studentGradeView2={this.state.subject[1].student[1].view}
          studentGradeView3={this.state.subject[1].student[2].view}

          onClickSubject={this.clickSubjectHandler.bind(this, this.state.subject[1].subjectName)}
          onClickGrade1={this.clickGradeHandler.bind(this, this.state.subject[1].subjectName, this.state.subject[1].student[0].studentName)}
          onClickGrade2={this.clickGradeHandler.bind(this, this.state.subject[1].subjectName, this.state.subject[1].student[1].studentName)}
          onClickGrade3={this.clickGradeHandler.bind(this, this.state.subject[1].subjectName, this.state.subject[1].student[2].studentName)}
        />
      </div>
    );
  }
}

export default App;

import { Component, OnInit } from '@angular/core';
import quizz_question from '../../../../public/data/quizz_question.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
  title:string = "";

  questions:any
  questionsSelected:any

  answers:string[] = []
  answerSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  ngOnInit() {
    if (quizz_question) {
      this.finished = false
      this.title = quizz_question.title

      this.questions = quizz_question.questions
      this.questionsSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }
  }

  playChoose(value:string){
    this.answers.push(value)
    this.nextStep()
  }

  nextStep(){
    this.questionIndex+=1

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionsSelected =  this.questions[this.questionIndex]
    } else {
      this.finished = true
    }
  }
}

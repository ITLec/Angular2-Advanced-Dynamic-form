import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>
  @Input() form: FormGroup

  constructor() { }

  ngOnInit() {
  }

  get isValid(){
    return this.form.controls[this.question.key].valid;
  }
  get isInvalidRequired() {
    let _retValue = false;

    if (this.form.controls[this.question.key].errors) {
      if (this.form.controls[this.question.key].errors.required) {
        _retValue = true;
      }
    }
    return _retValue;
  }
  get isInvalidRange() {
    let _retValue = false;

    if (this.form.controls[this.question.key].errors) {
      if (this.form.controls[this.question.key].errors.range) {
        _retValue = true;
      }
    }
    return _retValue;
  }
  get isInvalidPattern() {
    let _retValue = false;

    if (this.form.controls[this.question.key].errors) {
      if (this.form.controls[this.question.key].errors.pattern) {
        _retValue = true;
      }
    }
    return _retValue;
  }
}

import { Component } from '@angular/core';
import { TextboxQuestion } from './dynamic-question/question-textbox';
import { DateQuestion } from './dynamic-question/question-date';
import { SelectQuestion, OptionSetItem } from './dynamic-question/question-select';
import { NumberQuestion } from './dynamic-question/question-number';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  questions:any[];

  constructor(){
    this.questions  = [

      new NumberQuestion({
        key: 'numberId',
        label: 'Number (Required, 5=>10 Range)',
        value: '4',
        required: true,
        order: 1,
        min:5,
        max:10
      }),
      new SelectQuestion({
        key: 'selectId',
        label: 'SelectNumber(Dropdown)',
        value: "2",
        required: true,
        order: 1,
        optionSetItems:[
          new OptionSetItem("1", "one"),
          new OptionSetItem("2", "two"),
          new OptionSetItem("3", "three"),
        ]
      }),
      new SelectQuestion({
        key: 'boolId',
        label: 'Boolean(Dropdown)',
        value: "2",
        required: false,
        order: 1,
        optionSetItems:[
          new OptionSetItem("", ""),
          new OptionSetItem("true", "True"),
          new OptionSetItem("false", "False"),
        ]
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name (Required)',
        value: 'Rasheed',
        required: true,
        order: 1
      }),
      new DateQuestion({
        key: 'dateid',
        label: 'Birthdate',
        value:new Date(2000,2,2),
        required: false,
        order: 1
      }),


    new TextboxQuestion({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2,
      pattern:"^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$"
    })
  ];
  }
}

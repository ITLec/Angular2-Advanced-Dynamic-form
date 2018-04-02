import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormControl, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { NumberQuestion } from './question-number';
import { TextboxQuestion } from './question-textbox';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
debugger;
    questions.forEach(question => {
      // group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
      //                                         : new FormControl(question.value || '');

     var arrVAlidators = [];


      if( question.required )
      {
        arrVAlidators.push( Validators.required);
      }

      if(question.controlType== "number")
      {
        let _numberControl =  question as NumberQuestion;
        if(_numberControl.min && _numberControl.max)
        {
          arrVAlidators.push( NumberRage(_numberControl.min , _numberControl.max));
        }
      }
      
      if(question.controlType== "textbox")
      {
        let _textboxQuestion =  question as TextboxQuestion;
        if(_textboxQuestion.pattern)
        {
          arrVAlidators.push(Validators.pattern(_textboxQuestion.pattern));
        }
      }
      
      group[question.key] =               new FormControl(question.value || '', arrVAlidators);
    });
    return new FormGroup(group);
  }
}

function NumberRage(min: number, max:number):ValidatorFn{

  return (c:AbstractControl):{[key:string]:boolean}| null => {
    if(c.value !== undefined && (isNaN(c.value)|| c.value<min || c.value > max)){
      return {'range':true};
    };
    return null;
  };

}
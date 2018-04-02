import { QuestionBase } from "./question-base";

export class SelectQuestion extends QuestionBase<string>{
    debugger;
     controlType='select';
     type:string;
     optionSetItems: OptionSetItem[];
     constructor(options:{}={}){
         super(options);
         this.type = options['type'] || '';

         this.optionSetItems = options['optionSetItems'] ;
     }
}

export class OptionSetItem
{
    value: string;
    viewValue: string;

    constructor(value, viewValue)
    {
        this.value = value;
        this.viewValue = viewValue;
    }
}
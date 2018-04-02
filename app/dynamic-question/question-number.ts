import { QuestionBase } from "./question-base";

export class NumberQuestion extends QuestionBase<string>{
    controlType = 'number';
    type: string;
    min: number;
    max: number;
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        if (isNaN(this.min)) {
            this.min = -9999;
        }

        if (isNaN(this.max)) {
            this.max = 9999;
        }

        
        this.min = options['min'];
        
        this.max = options['max']
    }
}
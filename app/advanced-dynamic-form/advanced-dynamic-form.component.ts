import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../dynamic-question/question-base';
import { FormGroup, ValidationErrors, FormControl } from '@angular/forms';
import { QuestionControlService } from '../dynamic-question/question-control.service';

@Component({
  selector: 'app-advanced-dynamic-form',
  templateUrl: './advanced-dynamic-form.component.html',
  styleUrls: ['./advanced-dynamic-form.component.css'],
  providers:[QuestionControlService]
})
export class AdvancedDynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[]=[];
  form: FormGroup;


  constructor(private qcs:QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);

  //  this.setSummaryDiv(this.form);


  }

  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }
   /*creatingWarningDiv() {
    if (document.getElementById('divallmsgs-warning') == null) {
      
    var parent = document.getElementById('divallmsgs');
    var warning = document.createElement('div');
    warning.className = "alert alert-warning col-sm-6 col-sm-offset-1";
    warning.id = "divallmsgs-warning";
    parent.insertBefore(warning, parent.firstChild);
    document.getElementById('divallmsgs-warning').style.visibility = "visible";
    }
}


  setSummaryDiv(_form: FormGroup): void {

    Object.keys(_form.controls).forEach(key => {
      let _control = this.form.get(key);
      _control.valueChanges.subscribe(va => this.setValidation());
    });
  }
  setValidation():void{
    this.creatingWarningDiv();
    Object.keys(this.form.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
              console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            });
          }
        });
  }*/

}

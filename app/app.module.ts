import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatNativeDateModule, MatDatepickerModule, MatButtonModule  } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



import { AppComponent } from './app.component';
import { AdvancedDynamicFormComponent } from './advanced-dynamic-form/advanced-dynamic-form.component';
import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';


@NgModule({
  declarations: [
    AppComponent,
    AdvancedDynamicFormComponent,
    DynamicQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,


    BrowserAnimationsModule,FlexLayoutModule,
    MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatInputModule
, MatSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

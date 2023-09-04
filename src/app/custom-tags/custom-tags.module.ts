import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCameraComponent } from './custom-camera/custom-camera.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [CustomCameraComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [
        
      ],
      types: [
        {
          name: 'custom-camera',
          component: CustomCameraComponent,
        },
        {
          name: 'custom-input',
          component: CustomInputComponent,
        },





      ]



    }),
    IonicModule,

  ]
})
export class CustomTagsModule { }

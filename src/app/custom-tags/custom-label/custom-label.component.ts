import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-custom-label',
  templateUrl: './custom-label.component.html',
  styleUrls: ['./custom-label.component.scss'],
})
export class CustomLabelComponent   extends FieldType<FieldTypeConfig>{

  fieldvalue: any
  typeoffile: boolean = false
  fileUrl = environment.API_ROOT_FILE_URL;
  ngOnInit(): void {
    this.fieldvalue = this.formControl.value
    if (this.formControl.value != null) {
      let file = this.formControl.value.includes("pdf");
      if (file) {
        this.typeoffile = true
        this.fieldvalue = this.fileUrl + this.formControl.value
      }
      else
        this.typeoffile = false
    }
  }
}

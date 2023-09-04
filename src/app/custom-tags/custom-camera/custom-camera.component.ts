import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Camera, CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';

import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-custom-camera',
  templateUrl: './custom-camera.component.html',
  styleUrls: ['./custom-camera.component.scss'],
})
export class CustomCameraComponent extends FieldType<FieldTypeConfig> {

  capturedImageName: string | null = null;
  capturedImageBlob: Blob | null = null; 
  image: SafeUrl | null = null;
  dataSource: [] | any;
  constructor(private domSanitizer: DomSanitizer, private changeDetectorRef: ChangeDetectorRef) {
    super();
}
  getPhoto(index: number) {
    if (
      this.dataSource &&
      this.dataSource[index] &&
      this.dataSource[index].image
    ) {
      return this.dataSource[index].image;
    }
    // Add a default return statement
    return '';
  }
  takePicture = async () => {
    try {
      const image = await Camera['getPhoto']({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
      });
      if (image && image.webPath) {
        const response = await fetch(image.webPath);
        const blob = await response.blob();
        // Check if the image size is within the limit (10 MB)
        const maxSizeBytes = 10 * 1024 * 1024; // 10 MB in bytes
        if (blob.size <= maxSizeBytes) {
          // Save the Blob and image name to variables in your component
          this.capturedImageBlob = blob;
          this.capturedImageName = `image_${new Date().getTime()}.jpeg`;
  
          // Created an object URL from the Blob and assign it to the image property
          const objectURL = URL.createObjectURL(blob);
          this.image = objectURL;
          this.changeDetectorRef.detectChanges();
          console.log(this.capturedImageBlob)
          console.log(this.capturedImageName)
          // Assign the capturedImageData and update the form control
          this.formControl.setValue(this.capturedImageBlob);
        } else {
          console.error('Image size exceeds 10 MB limit.');
        }
      }
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  }
  removePicture() {
    // Reset the image property to discard the image
    this.image = null; 
    // to reset other related properties like this.capturedImageBlob and this.capturedImageName if necessary
    this.capturedImageBlob = null;
    this.capturedImageName = '';
    // Clear the form control value if needed
    this.formControl.setValue(null);
  }
}

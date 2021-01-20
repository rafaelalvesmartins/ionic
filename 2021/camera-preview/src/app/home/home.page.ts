// home.page.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CameraPreview,CameraPreviewOptions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  smallPreview: boolean;
  IMAGE_PATH: any;
  colorEffect = 'none';
  setZoom = 1;
  flashMode = 'off';
  isToBack = false;
  constructor(
    private cameraPreview: CameraPreview
  ) { }


  ngOnInit() {
  }

  startCameraAbove() {

    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 80, //0
      y: 450, //0
      width: 250, //window.screen.width
      height: 300, //window.screen.height
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true, //true
      toBack: false //true
    
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        this.isToBack = false;
        console.log(res);
      },
      (err) => {
        console.log(err)
      });
  }

  startCameraBelow() {

    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0, //0
      y: 0, //0
      width: window.screen.width, //window.screen.width
      height: window.screen.height, //window.screen.height
      camera: 'front',
      tapPhoto: true,
      previewDrag: false, //true
      toBack: true //true
    };

  // start camera
   this.cameraPreview.startCamera(cameraPreviewOpts).then(
    (res) => {
      this.isToBack = false;
      console.log(res);
    },
    (err) => {
      console.log(err)
    });

  }


  stopCamera() {
    this.cameraPreview.stopCamera();
  }

  takePicture() {
    this.cameraPreview.takePicture({
      width: 1280,
      height: 1280,
      quality: 85
    }).then((imageData) => {
      this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.IMAGE_PATH = 'assets/img/test.jpg';
    });
  }

  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  show() {
    this.cameraPreview.show();
  }

  hide() {
    this.cameraPreview.hide();
  }

  changeColorEffect() {
    this.cameraPreview.setColorEffect(this.colorEffect);
  }

  changeFlashMode() {
    this.cameraPreview.setFlashMode(this.flashMode);
  }

  changeZoom() {
    this.cameraPreview.setZoom(this.setZoom);
  }

  showSupportedPictureSizes() {
    this.cameraPreview.getSupportedPictureSizes().then((sizes) => {
      console.log(sizes);
    }, (err) => {
      console.log(err);
    });
  }

}
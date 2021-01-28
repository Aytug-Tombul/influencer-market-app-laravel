import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Output('fileUploaded') fileUploadedEmitter = new EventEmitter<string>();
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }


  upload(files: FileList){
    const file: any = files.item(0);

    const data = new FormData()
    data.append('image',file);
    
    this.imageService.upload(data).subscribe(
      (res:any)=>{
        this.fileUploadedEmitter.emit(res.url);
      }
    );
  }
}

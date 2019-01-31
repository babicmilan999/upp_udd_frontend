import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from '../services/http-service.service';
import {HttpResponse} from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    selectedFiles: FileList;
    currentFileUpload: File;

    constructor(private httpService: HttpServiceService) {
    }

    selectFile(event) {
        this.selectedFiles = event.target.files;
    }

    ngOnInit() {
    }

    onNext() {
        this.httpService.getTry().subscribe(
            (data) => {
                const text = JSON.parse(data['_body']);
                alert(text);
            }
        );
    }

    upload() {
        this.currentFileUpload = this.selectedFiles.item(0);
        this.httpService.upload(this.currentFileUpload).subscribe(event => {
            if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SampleService } from './sample.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cardData: any;
  mycustomForm!: FormGroup;
  name: string = 'Subbulu ';
  showValue: boolean = true;
  date: any = new Date();
  obj = [{
    name: 'anusha',
    age: 20,
  },
  {
    name: 'sumedha',
    age: 20,

  },
  ];

  private apiUrl = 'https://randomuser.me/api/?results=60';

  constructor(public formBuilder: FormBuilder,
    public myservice: SampleService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.mycustomForm = this.formBuilder.group({
      name: '',
      place: '',
      feedback: ''
    })
    console.log(this.myservice.shareData);
    this.name = this.myservice.shareData;
    this.fetchData();
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  saveFormData() {
    console.log(this.mycustomForm.value)
  }
  setFormData() {
    this.mycustomForm.get('name')?.setValue('sumedha');
    this.mycustomForm.get('place')?.setValue('hyd');
    this.mycustomForm.get('feedback')?.setValue('painting');
  }

  fetchData(): void {
    this.getData().subscribe(
      (response) => {
        this.cardData = response;
        console.log(this.cardData);
      },
      (error) => {
        console.error('Error fetching cardData', error);
      }
    );
  }

}

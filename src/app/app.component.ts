import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class MyComponent implements OnInit {

  mycustomForm!: FormGroup;
name: string ='frontend development';

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.mycustomForm = this.formBuilder.group({
      name: '',
      place: '',
      feedback: ''
    })

  }
  saveFormData() {
    console.log(this.mycustomForm.value)
  }
  setFormData() {
    this.mycustomForm.get('name')?.setValue('sumedha');
    this.mycustomForm.get('place')?.setValue('hyd');
    this.mycustomForm.get('feedback')?.setValue('panting');
  }

}

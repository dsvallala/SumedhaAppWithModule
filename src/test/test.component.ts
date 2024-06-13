import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrl: './test.component.css'
})
export class TestComponent {
    @Input() data: any;
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
        private http: HttpClient,
    ) { }

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
                this.cardData = response.results;
                console.log(this.cardData);
            },
            (error) => {
                console.error('Error fetching cardData', error);
            }
        );
    }

}

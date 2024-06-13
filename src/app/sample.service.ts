import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SampleService {
    shareData: string = 'Sumedha Service';
    shareValue() {
        return 'function value from service';
    }
}

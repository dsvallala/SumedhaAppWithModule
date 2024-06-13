import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'samplepipe'
})
export class SamplePipe implements PipeTransform {
    transform(value: any): any {
        console.log(value)
        return value.slice(0, 2).toLowerCase() + value.slice(2).toUpperCase();
    }
}
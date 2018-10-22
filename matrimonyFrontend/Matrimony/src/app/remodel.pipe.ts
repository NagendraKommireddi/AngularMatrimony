import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'remodel'})
export class RemodelPipe implements PipeTransform {
    transform(value: string): string {
        let newStr = value[0].toUpperCase();
        return newStr + value.substr(1,value.length).replace(/\-./g,c=>' '+c[1].toUpperCase());
      }
    }
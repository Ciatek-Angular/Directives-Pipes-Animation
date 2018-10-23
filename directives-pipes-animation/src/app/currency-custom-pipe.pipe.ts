import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCustomPipe'
})
export class CurrencyCustomPipePipe implements PipeTransform {

  transform(value: any, type?: any): any {
    if(type == '$'){
      return value + '$'
    }else if(type == 'l.l.'){
      return value + 'l.l.'
    }else{
      return value + '$'
    }
  }

}

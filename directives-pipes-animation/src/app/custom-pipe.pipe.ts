import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, type?: string): string {

    // first step
    
    // second step
    if(type == 'mail'){
      return `mailto://${value}`;
    }else if(type == 'phone'){
      return `tell://${value}`;
    }else{
       return `mailto://${value}`;
    }

  }

}

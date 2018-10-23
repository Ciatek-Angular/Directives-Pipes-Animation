import { Component } from '@angular/core'


@Component({
    selector:'app-mypipes',
    template:`
        <h1> Pipes </h1>

        <li class="list-group-item">
            Today Date without date pipe: {{ todayDate }} <br>
        </li>
        <li class="list-group-item">
            Today Date with date pipe: {{ todayDate | date }} <br>
        </li>
        <li class="list-group-item">
            Today Date with date pipe, params and uppercase: {{ todayDate | date: 'full' | uppercase }} <br>
        </li>
    `
})
export class PipesComponent {

    todayDate: string

    constructor(){
        this.todayDate = new Date().toDateString()
    }
}
import { Component, OnInit } from '@angular/core'


@Component({
    selector:'app-car',
    template: `

        <h4> NgIf and NgFor </h4>

        <button (click)="toggleVisibility()" class="btn-primary">Toggle</button>
        
        <h1 *ngIf="isVisible">I m a Ferari Car</h1>

        <div *ngIf="isVisible">
            <ul class="list-group">
                <li *ngFor="let car of cars" class="list-group-item "> {{ car }} </li>
            </ul>
        </div>
    `
})
export class CarComponent implements OnInit {
    isVisible = true

    cars = ['Ferari','Lexus','BMW','Mercedes','Infinity']

    ngOnInit() {
        // this.isVisible = true
    }

    toggleVisibility() {
        this.isVisible = !this.isVisible
    }
 } 
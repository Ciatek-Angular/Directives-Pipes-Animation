import { Component, OnInit } from '@angular/core'


@Component({
    selector:'app-company',
    template: `

    <h4> NgClass and NgStyle </h4>
    <button (click)="toggleColor()" class="btn-primary">Toggle</button>

    <h3 [ngClass]="toggledColor ? 'redGoogle' : 'BlueGoogle'"> Google </h3>

    <button (click)="changeColor()" class="btn-primary">Make it red</button>

    <h3 [ngStyle]={color:myColor} >Linux</h3>

    <h3 appHighlight >Microsoft</h3>
        
      
    `,
    styles:['.redGoogle {color:red;} .BlueGoogle {color:blue} ']
})
export class CompanyComponent implements OnInit {

    // ng class
    toggledColor = false
    
    // ng style
    myColor


    ngOnInit() {
        // this.isVisible = true
        // this.color = 'red';
    }

    changeColor() {
        this.myColor = 'red'
    }

    toggleColor() {
        this.toggledColor = !this.toggledColor
    }


   
 } 
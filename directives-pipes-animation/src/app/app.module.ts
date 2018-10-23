import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car.component';
import { CompanyComponent } from './company.component';
import { PipesComponent } from './pipes.component' 
import { HighlightDirective } from './highlight.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
import { AnimationsComponent } from './animations/animations.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyCustomPipePipe } from './currency-custom-pipe.pipe';
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CompanyComponent,
    PipesComponent,
    HighlightDirective,
    CustomPipePipe,
    AnimationsComponent,
    CurrencyCustomPipePipe,
    AnimateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

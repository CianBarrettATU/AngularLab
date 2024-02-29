import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponentComponent } from './list-component/list-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  counter:number = 0;
  hide:boolean = true;
  hideBtnCounter:number = 0;

  btnCounter(){
    this.counter++;
  }

  showHeader(){
    this.hide = !this.hide; // switch, shorter than if statement

  }
}

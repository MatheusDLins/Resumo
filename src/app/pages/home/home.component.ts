import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  placeholder: string = "email"
  placepass= "senha"
  color:string= "red"

  quantidade = 0

  adicionar(){
    this.quantidade ++;
  }

  diminuir(){
    this.quantidade --;
  }
}

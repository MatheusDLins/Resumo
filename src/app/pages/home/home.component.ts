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

  ativo: boolean = true;

  quantidade = 0

  produtos : string[] = []

  estilo: string = "disable"

  constructor(){
    this.produtos = ["carro", "moto", "avião"]
  }

  adicionar(){
    this.quantidade ++;
  }

  diminuir(){
    this.quantidade --;
  }

  mostrar(){
    this.ativo = true
  }

  esconder(){
    this.ativo = false
  }

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }
}

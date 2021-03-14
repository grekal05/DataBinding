import { Component, OnInit } from '@angular/core';
//import { threadId } from 'node:worker_threads';

@Component({
selector: 'app-data-binding',
 templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
 url: string ='https://toti.site';
urlImagem:string = 'https://picsum.photos/400';
nome_curso:string =' Introdução ao Angular';
campo_texto: string ='';
valor_salvo : string ='';
nome:string ='';
botaoClicado(){
  console.log ("Ai, doeu ! você me clicou!");
}


salvarValor(valor){
  this.valor_salvo = valor ;
}
 
saiuDocampo(){

  console.log('poxa, voce saiu do campo ! vou chorar:(');
}

passeiMouse(){
  console.log(' olá, voce passou mouse aqui')
}

onKeyUp(valor){
this.campo_texto = valor;

}

getValor():number{

  return 1 ; 
}

valorSelecionado(nome){

this.nome = nome ;
}

  constructor() { } 
  


  ngOnInit(): void {
  }

}


import { Injectable } from "@angular/core";
import { from, Subject } from "rxjs";
import { Livro } from "./livro.model"
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LivroService{
  private livros: Livro[] = [];
  private listaLivrosAtualizada = new Subject<Livro[]>();

  constructor (private httpClient: HttpClient){
  }

  getLivros(): void {
    this.httpClient.get <{mensagem: string, livros:any}>
    ('http://localhost:3000/api/livros')
    .pipe(map((dados) => {
      return dados.livros.map(( cliente ) => {
          return {
              id: cliente._id,
              nome: cliente.nome,
              fone: cliente.fone,
              email: cliente.email
          }
      })
  }))
    .subscribe(
            (dados) => {
              this.livros = dados.livros;
              this.listaLivrosAtualizada.next([...this.livros]);
            }
          )
  }

  adicionarLivro(id: string, titulo: string, autor: string, numero_paginas: number) : void{
    const livro: Livro = {
      id: id,
      titulo: titulo,
      autor: autor,
      numero_paginas: numero_paginas
    };
    this.httpClient.post<{mensagem: string}> ('http://localhost:3000/api/livros',
      livro).subscribe(
            (dados) => {
              console.log(dados.mensagem);
              this.livros.push(livro);
              this.listaLivrosAtualizada.next([...this.livros]);
            }
          )
  }

  removerLivro(id: string): void{
    this.httpClient.delete(`http://localhost:3000/api/livros/${id}`)
    .subscribe(() => {
        console.log(`livro com o id: ${id} removido`)
    })
}

  getListaDeLivrosAtualizadaObservable(){
    return this.listaLivrosAtualizada.asObservable()
  }
}

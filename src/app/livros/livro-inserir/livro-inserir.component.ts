import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
    selector: 'app-livro-inserir',
    templateUrl: './livro-inserir.component.html',
    styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent{



    constructor(public livroService: LivroService){

    }

    // id: number;
    // titulo: string;
    // autor: string;
    // numero_paginas: number;

    onAdicionarLivro(form: NgForm){
      this.livroService.adicionarLivro(
        form.value.id,
        form.value.titulo,
        form.value.autor,
        form.value.numero_paginas
      )
      form.resetForm();

        // const livro: Livro = {
        //     id: form.value.id,
        //     titulo: form.value.titulo,
        //     autor: form.value.autor,
        //     numero_paginas: form.value.numero_paginas
        // }

        // this.livroAdicionado.emit(livro);
    }

}

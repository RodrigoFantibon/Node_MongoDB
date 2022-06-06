import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { LivroInserirComponent } from './livros/livro-inserir/livro-inserir.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LivroService } from './livros/livro.service';


import { LivroListaComponent } from './livros/livro-lista/livro-lista.component';




@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    LivroInserirComponent,
    LivroListaComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers:[LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

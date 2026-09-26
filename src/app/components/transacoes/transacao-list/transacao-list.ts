import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Subscription } from 'rxjs';
import { Transacao } from '../../../models/transacao.model';
import { TransacaoService } from '../../../services/transacao.service';

@Component({
  imports: [
    DatePipe,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
  selector: 'app-transacao-list',
  styleUrl: './transacao-list.css',
  templateUrl: './transacao-list.html',
})
export class TransacaoList {
  displayedColumns: string[] = ['numero', 'descricao', 'categoria', 'tipo', 'escopo', 'data', 'valor'];
  dataSource = new MatTableDataSource<Transacao>();
  pageIndex = 0;
  pageSize = 10;
  totalItems = 0;
  filtro = '';
  carregou = false; // evita mostrar "nenhuma transação" antes da primeira resposta

  readonly rotulosTipo: Record<string, string> = { RECEITA: 'Receita', DESPESA: 'Despesa' };
  readonly rotulosEscopo: Record<string, string> = { PESSOAL: 'Pessoal', EMPRESA: 'Empresa' };
  readonly moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  private consulta?: Subscription;

  constructor(
    private transacaoService: TransacaoService,
    private snack: MatSnackBar,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loadTransacoes();
  }

  loadTransacoes() {
    // Cancela a consulta anterior: só a resposta da última página/filtro pedido vale.
    this.consulta?.unsubscribe();

    this.consulta = this.transacaoService
      .findAll(this.pageIndex, this.pageSize, this.filtro)
      .subscribe({
        next: (response) => {
          this.dataSource.data = response.items;
          this.pageIndex = response.page;
          this.pageSize = response.pageSize;
          this.totalItems = response.totalItems;
          this.carregou = true;
          this.cdr.markForCheck();
        },
        error: (error: HttpErrorResponse) => {
          this.dataSource.data = [];
          this.totalItems = 0;
          this.exibirMensagem(this.mensagemDeErro(error));
          console.error('Erro ao buscar transações:', error);
          this.cdr.markForCheck();
        },
      });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadTransacoes();
  }

  // Filtro por descrição feito no servidor (LIKE, case-insensitive), sempre voltando para a 1ª página.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim();

    if (filterValue === this.filtro) {
      return;
    }

    this.filtro = filterValue;
    this.pageIndex = 0;
    this.loadTransacoes();
  }

  exibirMensagem(mensagem: string): void {
    this.snack.open(mensagem, 'Ok', {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  private mensagemDeErro(error: HttpErrorResponse): string {
    if (error.status === 401 || error.status === 403) {
      return 'Acesso restrito a administradores.';
    }
    if (error.status === 0) {
      return 'Não foi possível conectar ao servidor.';
    }
    // O back responde em RFC 7807: o texto útil vem em "detail".
    return error.error?.detail ?? 'Erro ao buscar transações!';
  }
}

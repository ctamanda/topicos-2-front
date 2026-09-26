import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from '../models/page-response.model';
import { Transacao } from '../models/transacao.model';

type TransacaoPayload = Transacao & {
    idCategoria?: number;
};

@Injectable({providedIn: 'root'})
export class TransacaoService {
    private readonly apiUrl: string = 'http://localhost:8080/admin/transacoes';

    constructor(private http: HttpClient) {}

    private toPayload(transacao: Transacao): TransacaoPayload {
        return {
            ...transacao,
            idCategoria: transacao.categoria?.id,
        };
    }

    // page é base 0, igual ao back. descricao vazia = sem filtro.
    findAll(page: number = 0, pageSize: number = 10, descricao: string = ''): Observable<PageResponse<Transacao>> {
        let params = new HttpParams().set('page', page).set('pageSize', pageSize);

        if (descricao.trim()) {
            params = params.set('descricao', descricao.trim());
        }

        return this.http.get<PageResponse<Transacao>>(this.apiUrl, { params });
    }

    findById(id: number | string): Observable<Transacao> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Transacao>(url);
    }

    create(transacao: Transacao): Observable<Transacao> {
        return this.http.post<Transacao>(this.apiUrl, this.toPayload(transacao));
    }

    update(id: number, transacao: Transacao): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<void>(url, this.toPayload(transacao));
    }

    delete(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'app/shared/models/category';
import { BaseApi } from 'app/shared/core/base-api';

@Injectable({
    providedIn: 'root',
})
export class CategoriesService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }
    addCategory(category: Category): Observable<Category> {
        return this.post('categories', category);
    }

    getCategories(): Observable<Category[]> {
        return this.get('categories');
    }

    updateCategory(category: Category, id: number): Observable<Category> {
        return this.put(`categories/${id}`, category);
    }
}

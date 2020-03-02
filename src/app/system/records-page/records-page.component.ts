import { Component, OnInit } from '@angular/core';
import { Category } from 'app/shared/models/category';
import { CategoriesService } from '../../shared/services/categories.service';

@Component({
    selector: 'app-records-page',
    templateUrl: './records-page.component.html',
    styleUrls: ['./records-page.component.scss'],
})
export class RecordsPageComponent implements OnInit {
    categories: Category[] = [];
    isLoad = false;

    constructor(private categoriesService: CategoriesService) {}

    ngOnInit() {
        this.categoriesService.getCategories().subscribe((categories: Category[]) => {
            this.categories = categories;
            this.isLoad = true;
        });
    }
    newCategoryAdded(category: Category) {
        this.categories.push(category);
    }
    categoryEditted(category: Category) {
        const index = this.categories.findIndex(item => item.id == category.id);
        this.categories[index] = category;
    }
}

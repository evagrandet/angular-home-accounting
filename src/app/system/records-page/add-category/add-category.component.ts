import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../../shared/services/categories.service';
import { Category } from 'app/shared/models/category';

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
    category: Category;
    @Output() categoryAdd = new EventEmitter<Category>();

    constructor(private categoryService: CategoriesService) {}

    onSubmit(form: NgForm) {
        this.categoryService.addCategory(form.value).subscribe(value => {
            form.reset();
            this.categoryAdd.emit(this.category);
        });
    }
}

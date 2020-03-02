import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'app/shared/models/category';
import { CategoriesService } from 'app/shared/services/categories.service';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
    @Input() categories: Category[];
    @Output() categoryEdit = new EventEmitter<Category>();
    currentCategoryId = 1;
    currentCategory: Category;
    successEdit = false;

    constructor(private categoriesService: CategoriesService) {}

    ngOnInit() {
        this.onCategoryChanged();
    }

    onSubmit(form: NgForm) {
        let { capacity, name } = form.value;
        if (capacity < 0) {
            capacity *= -1;
        }
        this.currentCategory.name = name;
        this.currentCategory.capacity = capacity;
        this.categoriesService
            .updateCategory(this.currentCategory, +this.currentCategoryId)
            .subscribe((category: Category) => {
                this.categoryEdit.emit(category);
                this.successEdit = true;
            });
    }

    onCategoryChanged() {
        this.currentCategory = this.categories.find((c: Category) => c.id == this.currentCategoryId);
    }
}

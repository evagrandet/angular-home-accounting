import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/shared/models/category';

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

    constructor() {}

    ngOnInit() {
        this.onCategoryChanged();
    }

    onSubmit(form: NgForm) {
        let { capacity, name } = form.value;
        if (capacity < 0) {
            capacity *= -1;
        }
    }

    onCategoryChanged() {
        this.currentCategory = this.categories.find(c => c.id == this.currentCategoryId);
    }

    updateCa;
}

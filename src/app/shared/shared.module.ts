import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthErrorComponent } from './components/modals/auth-error/auth-error.component';

@NgModule({
  declarations: [AuthErrorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

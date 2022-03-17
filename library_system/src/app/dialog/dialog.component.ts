import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  productForm!: FormGroup;
  actionBtn: string = 'save';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      isbn: ['', Validators.required],
      book_name: ['', Validators.required],
      author: ['', Validators.required],
      number_pages: ['', Validators.required],
      copies: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.productForm.controls['isbn'].setValue(this.editData.isbn);
      this.productForm.controls['book_name'].setValue(this.editData.book_name);
      this.productForm.controls['author'].setValue(this.editData.author);
      this.productForm.controls['number_pages'].setValue(
        this.editData.number_pages
      );
      this.productForm.controls['copies'].setValue(this.editData.copies);
    }
  }

  addProduct() {
    if (!this.editData) {
      if (this.productForm.valid) {
        this.api.postProduct(this.productForm.value).subscribe({
          next: (res) => {
            alert('Product Added successfully');
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding the product');
          },
        });
      }
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Product updated Successfully');
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('Error while updating the record');
      },
    });
  }
}

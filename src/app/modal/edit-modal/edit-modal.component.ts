import {Component, Inject, Input, OnInit} from '@angular/core';
import {TodoModel} from '../../model/todo.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TodoListComponent} from '../../todo/todo-list/todo-list.component';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: TodoModel) { }

  ngOnInit(): void {}

  onUpdateItem(form: NgForm) {
    this.dialogRef.close(form.value);
  }

}

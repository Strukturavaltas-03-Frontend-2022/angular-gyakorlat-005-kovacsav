import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  dataRow: User = new User;

  @Input() dataList: User[] = [];

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectClick(): void {
    this.selectClick.emit(this.dataRow);
  }

  onUpdateClick(): void {
    this.updateClick.emit(this.dataRow);
  }

  onDeleteClick(): void {
    this.deleteClick.emit(this.dataRow)
  }

  // onSelectClick(dataRow: User): void {
  //   this.selectClick.emit(dataRow);
  // }

  // onUpdateClick(dataRow: User): void {
  //   this.updateClick.emit(dataRow);
  // }

  // onDeleteClick(dataRow: User): void {
  //   this.deleteClick.emit(dataRow)
  // }

}

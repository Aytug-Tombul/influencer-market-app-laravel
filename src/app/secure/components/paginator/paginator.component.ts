import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input('lastPage') lastPage!:number ;
  @Output('pageChanged') pageChanged = new EventEmitter<number>();
  currentPage=1;

  constructor() { }

  ngOnInit(): void {
  }


  prev(){
    if(this.currentPage===1)  return;
    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }

  next(){
    if(this.currentPage===this.lastPage) return;
    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }

}

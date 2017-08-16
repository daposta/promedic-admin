import {Component} from '@angular/core';

@Component({
    selector: 'pagination',
    template: `
    <ul>
      <li class="page-item" *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
    </ul>

    <pagination-controls (pageChange)="p = $event"></pagination-controls>
    `
})
export class PaginationComponent {
     collection: any[] ;  

     constructor(){

     }
}
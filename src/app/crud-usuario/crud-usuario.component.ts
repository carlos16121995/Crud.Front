import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './crud-usuario.component.html',
  styleUrls: ['./crud-usuario.component.css']
})

export class CrudUsuarioComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: string;
}
const actions : string = "<button mat-flat-button color='accent'>Novo usuário</button>";
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions: actions},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', actions: actions},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', actions: actions},
];

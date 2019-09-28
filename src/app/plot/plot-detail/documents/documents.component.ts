import { Component, OnInit } from '@angular/core';
import { Document } from "./Document";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: Document[] = [
    { id: 1, name: 'Квитанция Объединённая за АПРЕЛЬ 2019', date: new Date(), downloadUrl:'' },
    { id: 2, name: 'Квитанция Объединённая за МАРТ 2019', date: new Date(), downloadUrl:'' },
    { id: 3, name: 'Квитанция Объединённая за ФЕВРАЛЬ 2019', date: new Date(), downloadUrl:'' },
    { id: 4, name: 'Квитанция Объединённая за ЯНВАРЬ 2019', date: new Date(), downloadUrl:'' },
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from './Doc'
import { DOCS } from './mock-dock'
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(private toastr: ToastrService, private route: ActivatedRoute) { }

  plotId:Number;
  docs:Doc[] = DOCS;
  activeDocUrl:String;
  activeDoc:Doc|null;
  closeResult: string;

  ngOnInit() {
    if (this.docs.length != 0)
      this.activeDoc = this.docs[0];
    this.activeDoc;
    this.route.params.subscribe(params => {
      this.plotId = +params['plotId']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }
  public activate(event: any, item: Doc) {
    this.activeDoc = item;
  }
  public removeDoc(doc:Doc)
  {
    if (doc == this.activeDoc)
      this.activeDoc = null; 
    for( var i = 0; i < this.docs.length; i++){ 
      if ( this.docs[i] == doc) {
        this.docs.splice(i, 1); 
      }
    }
    this.toastr.success("Документ удален", 'Информация');
  }
}

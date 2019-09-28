import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plot-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {
  plotId:Number;
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.plotId = +params['plotId']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

}

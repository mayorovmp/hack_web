import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plot } from '../Plot'
@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: ['./plot-detail.component.css']
})
export class PlotDetailComponent implements OnInit {

  plotId:Number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.plotId = +params['plotId']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

}

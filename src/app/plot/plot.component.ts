import { Component, OnInit } from '@angular/core';  
import { ToastrService } from 'ngx-toastr';
//import { PLOTS } from './mock-plot';
import { Plot } from './Plot'
import { PlotService } from "./plot.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {
  plots: Plot[];
  constructor(private plotService: PlotService, private toastr: ToastrService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
    this.getPlots()
  }

  getPlots(): void {
    this.plotService.getPlot(10, 0).subscribe(plots => this.plots = plots);
  }

}

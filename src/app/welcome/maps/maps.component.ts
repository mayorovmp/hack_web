import { Component, OnInit } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  public map: any;
  constructor() { }

  ngOnInit() {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [55.751253, 37.618558],
        zoom: 12
      });

    const myPieChart = new ymaps.Placemark([
      55.751253, 37.618558
    ], {
        // Данные для построения диаграммы.
        data: [
            {weight: 8, color: '#0E4779'},
            {weight: 6, color: '#1E98FF'},
            {weight: 4, color: '#82CDFF'}
        ],
        iconCaption: "Пункт сбора"
    }, {
        // Зададим произвольный макет метки.
        iconLayout: 'default#pieChart',
        // Радиус диаграммы в пикселях.
        iconPieChartRadius: 30,
        // Радиус центральной части макета.
        iconPieChartCoreRadius: 10,
        // Стиль заливки центральной части.
        iconPieChartCoreFillStyle: '#ffffff',
        // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
        iconPieChartStrokeStyle: '#ffffff',
        // Ширина линий-разделителей секторов и внешней обводки диаграммы.
        iconPieChartStrokeWidth: 3,
        // Максимальная ширина подписи метки.
        iconPieChartCaptionMaxWidth: 200
    });
    this.map.geoObjects
    .add(myPieChart);

    });
  }

}

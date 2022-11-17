import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-region',
  templateUrl: './ranking-region.component.html',
  styleUrls: ['./ranking-region.component.scss']
})
export class RankingRegionComponent implements OnInit {
  @Input() rankings: any[];

  rankingsName: string[] = ['VERVIERS', 'HUY_WAREMME', 'LIEGE'];

  constructor() { }

  ngOnInit() {
  }

}

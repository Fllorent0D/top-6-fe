import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rankings: Observable<any>;
  public weekName: number;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.rankings = this.db
      .list('/tops')
      .valueChanges()
      .pipe(
        map((everyWeekRanking) => everyWeekRanking.pop()),
        tap((rankings: {rankings: any; week: number}) => this.weekName = rankings.week),
        map(rankings => rankings.rankings)
      )
  }
}

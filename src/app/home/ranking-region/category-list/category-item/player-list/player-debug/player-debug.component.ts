import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-player-debug',
  templateUrl: './player-debug.component.html',
  styleUrls: ['./player-debug.component.scss']
})
export class PlayerDebugComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: { uniqueIndex: number }, private db: AngularFireDatabase) {
  }

  playerData: Observable<any>;
  displayedColumnsVictoryHistory = ['weekName', 'matchId', 'divisionCategory', 'forfeit', 'victoryCount', 'pointsWon'];
  displayedColumnsRankingEvolution = ['weekName', 'rankingCategory', 'points'];

  ngOnInit() {
    this.playerData = this.db.object(`/debug/playersStats/${this.data.uniqueIndex}`).valueChanges();
  }
  getSumPoints(){
    return this.playerData.pipe(
      map(ranking => ranking.rankingEvolution.pop().points),
      tap((a)=> console.log(a))
    )
  }

}

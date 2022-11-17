import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-debug',
  templateUrl: './player-debug.component.html',
  styleUrls: ['./player-debug.component.scss']
})
export class PlayerDebugComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: { uniqueIndex: number }, private db: AngularFirestore) {
  }

  playerData$: Observable<any>;
  displayedColumnsVictoryHistory = ['weekName', 'matchId', 'divisionCategory', 'forfeit', 'victoryCount', 'pointsWon'];
  displayedColumnsRankingEvolution = ['weekName', 'rankingCategory', 'points'];

  ngOnInit() {
    this.playerData$ = this.db.doc(`/players-points-details/${this.data.uniqueIndex}`).valueChanges().pipe(take(1), tap(a => console.log(a)));
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material';
import { PlayerDebugComponent } from '@app/home/ranking-region/category-list/category-item/player-list/player-debug/player-debug.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  @Input() players: any[];
  displayedColumns: string[] = ['position', 'name', 'club', 'points', 'action'];

  constructor(private db: AngularFireDatabase, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  showDebug(uniqueIndex: number) {
    this.dialog.open(PlayerDebugComponent, {
      data: { uniqueIndex: uniqueIndex },
      height: '75vh',
      width: '75vw',
    });
  }
}

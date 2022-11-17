import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rankings: Observable<any>;
  public weekName: number;
  public isLoading: boolean = true;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {

  }
}

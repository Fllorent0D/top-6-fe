import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() region: string;

  results: Observable<any[][]>;

  constructor(private readonly db: AngularFirestore) {
  }

  async ngOnInit() {
    const order = ['NAT_WB', 'Provincial 1', 'Provincial 2', 'Provincial 3', 'Provincial 4', 'Provincial 5', 'Provincial 6'];

    this.results = this.db
      .collection('/tops')
      .doc(this.region)
      .get()
      .pipe(
        take(1),
        map((v) =>
          // @ts-ignore
          Object.entries(v.data().levels).sort(([levelA]: [string, any], [levelB]: [string, any]) => order.indexOf(levelA) > order.indexOf(levelB))
        )
      );

  }

}

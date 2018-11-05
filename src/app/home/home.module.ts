import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { RankingRegionComponent } from './ranking-region/ranking-region.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryListComponent } from './ranking-region/category-list/category-list.component';
import { CategoryItemComponent } from './ranking-region/category-list/category-item/category-item.component';
import { PlayerListComponent } from './ranking-region/category-list/category-item/player-list/player-list.component';
import { PlayerItemComponent } from './ranking-region/category-list/category-item/player-list/player-item/player-item.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerDebugComponent } from './ranking-region/category-list/category-item/player-list/player-debug/player-debug.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    NgbModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    HomeComponent,
    RankingRegionComponent,
    CategoryListComponent,
    CategoryItemComponent,
    PlayerListComponent,
    PlayerItemComponent,
    PlayerDebugComponent
  ],
  entryComponents: [PlayerDebugComponent],
  providers: [QuoteService]
})
export class HomeModule {
}

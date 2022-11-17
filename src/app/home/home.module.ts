import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RankingRegionComponent } from './ranking-region/ranking-region.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryListComponent } from './ranking-region/category-list/category-list.component';
import { CategoryItemComponent } from './ranking-region/category-list/category-item/category-item.component';
import { PlayerListComponent } from './ranking-region/category-list/category-item/player-list/player-list.component';
import { PlayerItemComponent } from './ranking-region/category-list/category-item/player-list/player-item/player-item.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerDebugComponent } from './ranking-region/category-list/category-item/player-list/player-debug/player-debug.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    MatDialogModule,
    MatProgressBarModule
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
})
export class HomeModule {
}

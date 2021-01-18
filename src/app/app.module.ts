import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionStatsComponent } from './components/conversion-stats/conversion-stats.component';
import { HeroComponent } from './components/hero/hero.component';
import { ImageComparisonComponent } from './components/image-comparison/image-comparison.component';
import { SubjectExtractionComponent } from './components/subject-extraction/subject-extraction.component';
import { AdBgRemoverComponent } from './components/ad-bg-remover/ad-bg-remover.component';
import { BgApplicationsComponent } from './components/bg-applications/bg-applications.component';
import { LastNotesComponent } from './components/last-notes/last-notes.component';
import { InViewportModule } from 'ng-in-viewport';

@NgModule({
  declarations: [
    AppComponent,
    ConversionStatsComponent,
    HeroComponent,
    ImageComparisonComponent,
    SubjectExtractionComponent,
    AdBgRemoverComponent,
    BgApplicationsComponent,
    LastNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

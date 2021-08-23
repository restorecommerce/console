import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VCLButtonModule, VCLNavigationModule, VCLMaterialDesignModule, VCLLayerModule, VCLEmbeddedInputGroupModule, VCLSelectModule, VCLInputModule } from '@vcl/ng-vcl';
import { RcUiComponentsModule } from '@restorecommerce/ui-components';

import { NoopComponent } from './pages/noop/noop.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { OverflowComponent } from './pages/overflow/overflow.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NoopComponent,
    HomeComponent,
    LayoutComponent,
    OverflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VCLButtonModule,
    VCLNavigationModule,
    VCLMaterialDesignModule,
    VCLLayerModule,
    VCLEmbeddedInputGroupModule,
    VCLSelectModule,
    VCLInputModule,
    RcUiComponentsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

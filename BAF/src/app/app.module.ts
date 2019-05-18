import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponComponent } from './header/coupon/coupon.component';
import { MiniNavComponent } from './header/mini-nav/mini-nav.component';
import { LogoComponentComponent } from './header/logo-component/logo-component.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { MoreInfoComponent } from './header/more-info/more-info.component';
import { LocationBarComponent } from './header/location-bar/location-bar.component';
import { SectionHeadingComponent } from './body/section-heading/section-heading.component';
import { IndustriesComponent } from './body/industries/industries.component';
import { Footer1Component } from './footer/footer1/footer1.component';
import { Footer2Component } from './footer/footer2/footer2.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CouponComponent,
    MiniNavComponent,
    LogoComponentComponent,
    MainNavComponent,
    MoreInfoComponent,
    LocationBarComponent,
    SectionHeadingComponent,
    IndustriesComponent,
    Footer1Component,
    Footer2Component,
    CopyrightComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

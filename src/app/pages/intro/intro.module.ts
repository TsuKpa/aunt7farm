import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StoreComponent } from './store/store.component';

@NgModule({
    declarations: [
        IntroComponent,
        PageNotFoundComponent,
        WelcomeComponent,
        AboutComponent,
        ContactComponent,
        StoreComponent
    ],
    imports: [BrowserModule, IntroRoutingModule],
    providers: [],
    bootstrap: [IntroComponent]
})
export class IntroModule {}

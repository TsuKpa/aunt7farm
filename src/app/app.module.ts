import { IntroModule } from './pages/intro/intro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, IntroModule],
    declarations: [AppComponent, FooterComponent, HeaderComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

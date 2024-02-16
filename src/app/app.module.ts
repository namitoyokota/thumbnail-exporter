import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExportAsModule } from 'ngx-export-as';
import { MonoButtonModule, MonoSpinnerModule, MonoTextareaModule } from 'ngx-monochrome';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, ExportAsModule, MonoButtonModule, MonoSpinnerModule, MonoTextareaModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

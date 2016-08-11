import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { DashboardComponent } from './dashboard.component';

import { HeroesComponent } from './heroes.component';

import { HeroService } from './hero.Service';

@NgModule ({
    imports: [
        BrowserModule,
        FormModule,
        routing
    ],
    declaration: [
        AppComponent,
        HeroesComponent,
        DashboardComponent
    ],
    provider: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    
}


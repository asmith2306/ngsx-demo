import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';

import {CounterComponent} from './components/counter/counter.component';
import {CounterStateActions} from './states/counter.state';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxsModule.forRoot([CounterStateActions], {developmentMode: true}),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

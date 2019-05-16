import {Component} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Store} from '@ngxs/store';
import {Increment, Decrement, Log} from './states/counter.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ngsx-demo';

    constructor(private store: Store) {}

    ngOnInit() {

    }

    incrementCounter() {
        this.store.dispatch(new Increment());
    }

    decrementCounter() {
        this.store.dispatch(new Decrement());
    }

    logCounter() {
        this.store.dispatch(new Log());
    }
}

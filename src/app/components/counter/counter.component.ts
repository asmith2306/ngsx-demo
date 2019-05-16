import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {CounterStateActions, CounterState} from 'src/app/states/counter.state';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

    @Select(CounterStateActions)
    counter$: Observable<CounterState>;

    constructor() {}

    ngOnInit() {
    }

}

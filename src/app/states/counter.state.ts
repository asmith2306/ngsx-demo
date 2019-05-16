import {State, Store, StateContext, Action} from '@ngxs/store';

export interface CounterState {
    value: number;
}

export class Increment {
    static readonly type = '[Counter] Increment';
    constructor() {}
}

export class Decrement {
    static readonly type = '[Counter] Decrement';
    constructor() {}
}

export class Log {
    static readonly type = '[Counter] Log';
    constructor() {}
}

@State<CounterState>({
    name: 'counterState',
    defaults: {
        value: 0
    }
})
export class CounterStateActions {

    constructor(private store: Store) {}

    @Action(Increment)
    Increment(stateContext: StateContext<CounterState>) {
        const value = stateContext.getState().value;
        stateContext.patchState({value: value + 1});
    }

    @Action(Decrement)
    Decrement(stateContext: StateContext<CounterState>) {
        const value = stateContext.getState().value;
        stateContext.patchState({value: value - 1});
    }

    @Action(Log)
    Log(stateContext: StateContext<CounterState>) {
        const value = stateContext.getState().value;
        console.log(value);
    }
}
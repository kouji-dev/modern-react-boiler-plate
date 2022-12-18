import {Component} from "@common/types";
import {withLazyNess} from "@common/layout";

export const CounterModule: Component = () => {

    return <div>Counter module</div>
}

export default withLazyNess(CounterModule);
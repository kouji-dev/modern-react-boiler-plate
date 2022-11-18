import {Component} from "@common/types";
import {MuiConfig} from "@config/mui.config";
import {ReduxConfig} from "@config/redux.config";
import {RouterConfig} from "@config/router.config";

export const EntryComponent: Component = () => {

    return (
        <MuiConfig>
            <ReduxConfig>
                <RouterConfig/>
            </ReduxConfig>
        </MuiConfig>
    )
}
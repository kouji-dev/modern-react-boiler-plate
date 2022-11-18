import {configureStore} from "@reduxjs/toolkit";
import {homeReducer} from "@modules/home/home.reducer";
import {ComponentWithChildren} from "@common/types";
import {Provider} from "react-redux";
import {axios} from "@config/axios.config";

const rootReducer = {
    home: homeReducer
}

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: {extraArgument: {axios}}})
})

export type IDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>

export const ReduxConfig: ComponentWithChildren<unknown> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
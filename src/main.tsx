import React from 'react'
import ReactDOM from 'react-dom/client'
import {EntryComponent} from "@config/entry.component";

ReactDOM
    .createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <React.StrictMode>
            <EntryComponent />
        </React.StrictMode>
    )

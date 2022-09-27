import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import { App, AppProvider } from "./components";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <AppProvider>
        <App/>
    </AppProvider>
);

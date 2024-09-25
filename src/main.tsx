import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import { LoginPage } from './auth/pages/LoginPage';


const root = createRoot(document.getElementById('root')!);


root.render(
    <React.StrictMode>
        <LoginPage />
    </React.StrictMode>
)



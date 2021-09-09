import React from 'react';
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import {Tasks} from "./components/Tasks";

export const App = () => (
        <div className="App">
            <Header />
            <Content />
        </div>
    );
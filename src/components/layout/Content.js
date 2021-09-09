import React from 'react';
import { Sidebar } from './Sidebar';
export {Tasks} from '../Tasks';

export const Content = () => (
    <section>
        <Sidebar/>
        <Tasks/>
    </section>
);
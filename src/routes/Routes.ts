import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    "to": string;
    "path": string;
    "Component": LazyExoticComponent<JSXComponent> | JSXComponent;
    "name": string;
}



const LazyLayoutComponent = lazy(() => import(/* webpackChunkName: "LazyLayoutComponent" */ '../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        "to": '/home',
        "path": '/home',
        "Component" : LazyLayoutComponent,
        "name": 'LazyLayout - Dashboard'
    },
    {
        "to": '/noLazy',
        "path": 'noLazy',
        "Component" : NoLazy,
        "name": 'NoLazy'
    }
];
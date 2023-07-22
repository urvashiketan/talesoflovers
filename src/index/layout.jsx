import { Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';


import { Home } from './home';
import { DaysLayout } from '../days/dayslayout';


export class Index extends Component {
    render() {
        return (
            <HashRouter basename='/'>
                <Routes>
                    <Route path = '/' element = { <Home /> } />
                    <Route path = '/:page' element = { <DaysLayout /> } />
                </Routes>
            </HashRouter>
        );
    }
}

// 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
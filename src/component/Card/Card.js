import React from 'react';
import '@shopify/polaris';
import './style.css';

export default function Card() {
    return (

        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="card">Card 1</div>
                </div>
                <div className="column">
                    <div className="card">Card 2</div>
                </div>
                <div className="column">
                    <div className="card">Card 3</div>
                </div>
                <div className="column">
                    <div className="card">Card 4</div>
                </div>
            </div>
        </div>


    )
};
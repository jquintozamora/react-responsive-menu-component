import React, { Component } from 'react';
import { getNavItems } from './../utils/mock/mockApi.js';



export default class ResponsiveMenu extends Component {

    constructor() {
        super();

        this.state = {
        }

    }

    render() {
        return (
            <div id="responsiveMenu" className="responsiveMenuContainer">
                <div className="responsiveMenu__mobile">
                    <span className="responsiveMenu__mobile__Text">Navigation</span>
                </div>
                <div className="responsiveMenu__Items">
                    <ul className="responsiveMenu__List">
                        <li className="static">
                            <a className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/intranet">
                                <span className="additional-background ms-navedit-flyoutArrow">
                                    <span className="menu-item-text">Company</span>
                                </span>
                            </a>
                        </li>
                        <li className="static">
                            <a className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/intranet">
                                <span className="additional-background ms-navedit-flyoutArrow">
                                    <span className="menu-item-text">Products</span>
                                </span>
                            </a>
                        </li>
                        <li className="static">
                            <a className="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/intranet">
                                <span className="additional-background ms-navedit-flyoutArrow">
                                    <span className="menu-item-text">Safety</span>
                                </span>
                            </a></li>
                        <li className="static selected">
                            <a className="static selected menu-item ms-core-listMenu-item ms-displayInline ms-core-listMenu-selected ms-navedit-linkNode" href="/sites/intranet">
                                <span className="additional-background ms-navedit-flyoutArrow">
                                    <span className="menu-item-text">Supply</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="u_divClear"></div>
            </div>
        );
    }
}
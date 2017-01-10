import React, { Component } from 'react';
import { getNavItems } from './../utils/mock/mockApi.js';

export default class GlobalNav extends Component {

    constructor() {
        super();

        this.state = {
            nav: undefined
        }

    }

    componentDidMount() {

        getNavItems("nav")
            .then((response) => {
                //console.log(response.data);
                this.setState({ nav: response.data });
            })
            .catch((err) => {
                console.error(err);
            })

    }

    _normalizeUrl(url) {
        if (url !== undefined && url !== "") {
            return url;
        } else {
            return "javascript:void(0);";
        }
    }

    _getThirdLevel(thirdLevelItems) {
        if (thirdLevelItems.children && thirdLevelItems.children.length > 0) {
            const items = thirdLevelItems.children.map((child, i) => {
                return (
                    <li key={i} className="groupMenu__ThirdLevel">
                        <a href={this._normalizeUrl(child.href)} title={child.title} className="">
                            <span>{child.text}</span>
                        </a>
                    </li>
                );
            });
            return (
                <ul className="groupMenu__SecondLevel__List">
                    {items}
                </ul>
            );
        }
    }

    _getGroupMenu(item) {
        if (item.children && item.children.length > 0) {
            const items = item.children.map((child, i) => {
                return (
                    <li key={i} className="groupMenu__SecondLevel">
                        <div className="groupMenu__SecondLevel__Title">
                            <a href={this._normalizeUrl(child.href)} title={child.title} className="">
                                <span>{child.text}</span>
                            </a>
                        </div>
                        {
                            this._getThirdLevel(child)
                        }

                    </li>
                );
            });
            return (
                <ul className="globalNav__groupMenu" >
                    {items}
                </ul>
            );
        }
    }

    _parseNavItems(nav) {
        return nav.map((item, i) => {
            return (
                <li key={i}>
                    <a href={this._normalizeUrl(item.href)} className="globalNav__FirstLevel__Item" title={item.title}>{item.text}</a>
                    {
                        this._getGroupMenu(item)
                    }
                </li>
            );
        });
    }

    render() {

        const { nav } = this.state;

        let retItems = null;
        if (nav !== undefined) {
            retItems = this._parseNavItems(nav);
        }

        return (
            <div id="globalNavRoot" className="globalNav">
                <div id="mobile-navigation-menu" className="globalNav__Mobile" >
                    <div id="mobile-menu">
                        <a className="burger" href="javascript:void(0);">
                            <span></span>
                        </a>
                    </div>
                </div>
                <div id="global-navigation" className="globalNav__Items">
                    <ul className="globalNav__FirstLevel">
                        {retItems}
                    </ul>
                </div>
                <div className="u_divClear"></div>
            </div>
        );
    }
}
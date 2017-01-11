import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getNavItems } from './../utils/mock/mockApi.js';



export default class ResponsiveMenu extends Component {

    constructor() {
        super();

        this.state = {
            menu: undefined,
            mobileCSSClass: "responsiveMenu__mobile"
        }

    }

    componentWillMount() {
        getNavItems("menu")
            .then((response) => {
                this.setState({ menu: response.data });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate");
    //     //var $this = $(ReactDOM.findDOMNode(this));
    //     var links = document.querySelectorAll('.responsiveMenuContainer a[href="'+document.URL+'"]');
    //     console.log(links);
    // }

    _normalizeUrl(url) {
        if (url !== undefined && url !== "") {
            return url;
        } else {
            return "javascript:void(0);";
        }
    }

    _isActiveMenuItem(href) {
        let path = window.location.href;
        if (path.substring(0, href.length) === href) {
            return true;
        }
        return false
    }

    _parseNavItems(menu) {
        return menu.map((item, i) => {
            var cssClass = "responsiveMenu__Item ";
            if (this._isActiveMenuItem(item.href)) {
                cssClass += "selected";
            }
            return (
                <li key={i}>
                    <a href={this._normalizeUrl(item.href)} className={cssClass} title={item.title}>
                        <span>{item.text}</span>
                    </a>
                </li>
            );
        });
    }

    handleOpenMenu = () => {
        let node = ReactDOM.findDOMNode(this.refs.openMenu);
        node.classList.toggle('responsiveMenu__mobile-open');

        let listNode = ReactDOM.findDOMNode(this.refs.menuList);
        listNode.classList.toggle('responsiveMenu__List-open');

        //var css = (this.state.mobileCSSClass === "responsiveMenu__mobile") ? "responsiveMenu__mobile-open" : "responsiveMenu__mobile";
        //this.setState({"mobileCSSClass":css});
    }

    render() {
        console.log("render ResponsiveMenu");

        const { menu, mobileCSSClass } = this.state;
        let retItems = null;
        if (menu !== undefined) {
            retItems = this._parseNavItems(menu);
        }


        return (
            <div id="responsiveMenu" className="responsiveMenuContainer">
                <div ref="openMenu" className={mobileCSSClass} onClick={this.handleOpenMenu}>
                    <span className="responsiveMenu__mobile__Text">Navigation</span>
                </div>
                <div className="responsiveMenu__Items">
                    <ul ref="menuList" className="responsiveMenu__List">
                        {retItems}
                    </ul>
                </div>
                <div className="u_divClear"></div>
            </div>
        );
    }
}
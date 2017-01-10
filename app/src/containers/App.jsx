import React, { Component } from 'react';
import GlobalNav from './../components/GlobalNav.jsx';
import ResponsiveMenu from './../components/ResponsiveMenu.jsx';


export default class App extends Component {
    render() {
        return (
          <div className="appContainer">
            <div className="appContainer__Title">React Responsive Menu Sample.</div>
            <header className="pageHeader">
              <div className="pageHeader__Logo">Logo</div>
              <section className="pageHeader__TitleNav">
                <h1 className="pageHeader__Title" >Header Site Title</h1>
                <nav className="globalNavContainer">
                  <GlobalNav />
                </nav>
              </section>
              <div className="u_divClear"></div>
            </header>
            <menu>
              <ResponsiveMenu />
            </menu>
            <section className="content" >
              <h2 className="content__Title">Welcome to the Site</h2>
              <div className="content__Body" >
                Content of the Site.
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="u_divClear"></div>
            </section>
            <footer className="footer">Site footer</footer>
          </div>
        );
    }
}
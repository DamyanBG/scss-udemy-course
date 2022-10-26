 import React from "react";
import "./Main.scss"

const Main = () => {
    return (
    <React.Fragment>
        <body>
            <header id="header">
                <nav id="main-menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Me</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Get in Touch</a></li>
                    </ul>
                </nav>
            </header>
        </body>
        <div id="main" role="main">
            <article id="content">
                <h1>Welcome to My Site!</h1>
                <section id="introduction">
                    <h2>Hi, I am Mr. Website!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="/">Incidunt</a>, quaerat quisquam odit minus ut esse tenetur blanditiis porro ipsa. Ipsum illo harum non. Magni amet rerum iure cum nesciunt quasi?</p>
                    <button className="warning-button" id="warning-button">Something went wrong</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quaerat <a href="/">quisquam</a> odit minus ut esse tenetur blanditiis porro ipsa. Ipsum illo harum non. Magni amet rerum iure cum nesciunt quasi?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quaerat quisquam odit minus ut esse tenetur blanditiis porro ipsa. Ipsum illo harum non. Magni amet rerum iure cum nesciunt quasi?</p>
                </section>
                <section id="promo">
                    <h2>Check Out My Work</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis, tempore officia pariatur in dolor labore voluptas saepe illo odit quidem quis distinctio illum. Magni voluptatum error dolor eligendi incidunt.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis, tempore officia pariatur in dolor labore voluptas saepe illo odit quidem quis distinctio illum. Magni voluptatum error dolor eligendi incidunt.</p>
                </section>
            </article>

            <aside id="sidebar">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </aside>
        </div>

        <footer id="footer">
            Some Footer Info 
        </footer>
    </React.Fragment>
    )
}

export default Main;
import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
			<header id="header" className="alt">

					<div className="logo">
            <h2>Keyio</h2>
          </div>

					<nav id="nav">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li>
                <a href="#" className="icon fa-angle-down">Dropdown</a>
                <ul>
                  <li><a href="#">Option One</a></li>
                  <li><a href="#">Option Two</a></li>
                  <li><a href="#">Option Three</a></li>
                  <li>
                    <a href="#">Submenu</a>
                    <ul>
                      <li><a href="#">Option One</a></li>
                      <li><a href="#">Option Two</a></li>
                      <li><a href="#">Option Three</a></li>
                      <li><a href="#">Option Four</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="generic.html">Generic</a></li>
              <li><a href="elements.html">Elements</a></li>
            </ul>
          </nav>

        </header>

			<section id="banner">
          <div className="inner">
            <span className="icon fa-laptop"></span>
            <h1>Ipsum dolor sit amet feugiat et veroeros adipiscing</h1>
            <ul className="actions special">
              <li><a href="#one" className="button wide scrolly">Get Started</a></li>
            </ul>
          </div>
        </section>

			<section id="one" className="wrapper">
          <div className="inner">
            <div className="split style1 centered reversed">
              <section>
                <span className="image fit portrait"><img src="images/pic02.jpg" alt="" /></span>
              </section>
              <section>
                <h2>Adipiscing ornare risus morbi est est blandi magna vel euismod tempus</h2>
                <div className="features">
                  <article className="icon fa-diamond">
                    <h3>Sed veroeros</h3>
                    <p>Lorem ipsum dolor sit amet nulla etiam feugiat sed adipiscing.</p>
                  </article>
                  <article className="icon fa-file-o">
                    <h3>Magna etiam</h3>
                    <p>Lorem ipsum dolor sit amet nulla etiam feugiat sed adipiscing.</p>
                  </article>
                  <article className="icon fa-clone">
                    <h3>Nulla consequat</h3>
                    <p>Lorem ipsum dolor sit amet nulla etiam feugiat sed adipiscing.</p>
                  </article>
                  <article className="icon fa-envelope-o">
                    <h3>Euismod morbi</h3>
                    <p>Lorem ipsum dolor sit amet nulla etiam feugiat sed adipiscing.</p>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </section>

			<section id="two" className="wrapper style1 special">
          <div className="inner">
            <div className="stats">
              <article>
                <h3><span>128</span> Sed magna</h3>
                <p>Lorem ipsum dolor nulla feugiat adipiscing.</p>
              </article>
              <article>
                <h3><span>640</span> Etiam dolor</h3>
                <p>Lorem ipsum dolor nulla feugiat adipiscing.</p>
              </article>
              <article>
                <h3><span>256</span> Nullam amet</h3>
                <p>Lorem ipsum dolor nulla feugiat adipiscing.</p>
              </article>
              <article>
                <h3><span>768</span> Sit euismod</h3>
                <p>Lorem ipsum dolor nulla feugiat adipiscing.</p>
              </article>
            </div>
          </div>
        </section>

			<section id="three" className="wrapper">
          <div className="inner">
            <ul className="tabs">
              <li>
                <h3>Aliquam</h3>
                <div className="split reversed">
                  <div className="content">
                    <h2>Lorem ipsum dolor sit magna feugiat etiam sed dolor</h2>
                    <p>Maecenas id feugiat nunc. Integer gravida augue libero, quis pellentesque amet pharetra a. Ut sagittis ipsum nec velit porttitor, sed convallis ligula pellentesque. Mauris et dignissim sem lacinia lorem ipsum dolor.</p>
                    <ul className="actions">
                      <li><a href="#" className="button">Learn More</a></li>
                    </ul>
                  </div>
                  <div className="image"><img src="images/pic05.jpg" alt="" /></div>
                </div>
              </li>
              <li>
                <h3>Consequat</h3>
                <div className="split reversed">
                  <div className="content">
                    <h2>Ipsum lorem accumsan sed nullam feugiat veroeros</h2>
                    <p>Veritatis, accusantium, nemo. Officia neque explicabo nihil! Sunt vero reprehenderit, necessitatibus atque, enim autem animi illum quaerat at, corporis dolore ipsam. Voluptatem culpa sapiente sed veroeros.</p>
                    <ul className="actions">
                      <li><a href="#" className="button">Learn More</a></li>
                    </ul>
                  </div>
                  <div className="image"><img src="images/pic05.jpg" alt="" /></div>
                </div>
              </li>
              <li>
                <h3>Feugiat</h3>
                <div className="split reversed">
                  <div className="content">
                    <h2>Adipiscing sed impedit volutpat magna cursus lorem</h2>
                    <p>Perspiciatis saepe, mollitia itaque magna etiam dolor sit amet. Sed rerum porro sint iure illo accusantium in amet totam, est. Ipsa nobis ad optio impedit quidem inventore libero, aperiam, nesciunt dolor sit amet.</p>
                    <ul className="actions">
                      <li><a href="#" className="button">Learn More</a></li>
                    </ul>
                  </div>
                  <div className="image"><img src="images/pic05.jpg" alt="" /></div>
                </div>
              </li>
            </ul>
          </div>
        </section>

			<section id="four" className="quotes">
          <article className="icon fa-quote-left">
            <span className="image"><img src="images/pic03.jpg" alt="" data-position="center" /></span>
            <h2>"Sed ultrices consequat dolor nulla fringilla dignissim"</h2>
            <div className="author">
              <span className="name">Jane Doe</span>
              <span className="title">Ipsum dolor nullam</span>
            </div>
          </article>
          <article className="icon fa-quote-left">
            <span className="image"><img src="images/pic04.jpg" alt="" data-position="left" /></span>
            <h2>"Nam velit et lorem porta quis at pulvinar tellus nibh"</h2>
            <div className="author">
              <span className="name">John Doe</span>
              <span className="title">Ipsum dolor nullam</span>
            </div>
          </article>
        </section>

			<section id="five" className="wrapper">
          <div className="inner">
            <div className="split">
              <section>
                <h2>Feugiat lorem ipsum dolor velit amet dolor dignissim pharetra</h2>
                <span className="image fit"><img src="images/pic06.jpg" alt="" /></span>
                <p>Maecenas id feugiat nunc. Integer gravida augue libero, quis pellentesque amet pharetra a. Ut sagittis ipsum nec velit porttitor, sed convallis ligula pellentesque. Mauris et dignissim sem lacinia lorem ipsum dolor.</p>
                <ul className="actions">
                  <li><a href="#" className="button">Learn More</a></li>
                </ul>
              </section>
              <section>
                <div className="ratings">
                  <article>
                    <h3>Ipsum amet</h3>
                    <div className="progress" data-progress="60">60%</div>
                  </article>
                  <article>
                    <h3>Adipiscing feugiat</h3>
                    <div className="progress" data-progress="90">90%</div>
                  </article>
                  <article>
                    <h3>Dolor ligula</h3>
                    <div className="progress" data-progress="75">75%</div>
                  </article>
                  <article>
                    <h3>Libero magna</h3>
                    <div className="progress" data-progress="45">45%</div>
                  </article>
                  <article>
                    <h3>Nec lacinia</h3>
                    <div className="progress" data-progress="55">55%</div>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </section>

			<footer id="footer">
          <div className="inner">
            <div className="split style1">
              <div className="contact">
                <h2>Contact</h2>
                <ul className="contact-icons">
                  <li className="icon fa-home"><a href="#">1234 Fictional Street #5432 Nashville, TN 00000-0000</a></li>
                    <li className="icon fa-phone"><a href="#">(000) 000-0000</a></li>
                    <li className="icon fa-envelope-o"><a href="#">info@untitled.tld</a></li>
                </ul>
                  <ul className="icons-bordered">
                    <li><a className="icon fa-facebook" href="#">
                      <span className="label">Facebook</span>
                    </a></li>
                    <li><a className="icon fa-twitter" href="#">
                      <span className="label">Twitter</span>
                    </a></li>
                    <li><a className="icon fa-instagram" href="#">
                      <span className="label">Instagram</span>
                    </a></li>
                    <li><a className="icon fa-github" href="#">
                      <span className="label">GitHub</span>
                    </a></li>
                    <li><a className="icon fa-linkedin" href="#">
                      <span className="label">LinkedIn</span>
                    </a></li>
                  </ul>
						</div>
                <form action="#" method="post">
                  <h2>Email Us</h2>
                  <div className="fields">
                    <div className="field half">
                      <input name="name" id="name" placeholder="Name" type="text" />
                    </div>
                    <div className="field half">
                      <input name="email" id="email" placeholder="Email" type="email" />
                    </div>
                    <div className="field">
                      <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li><input value="Send Message" className="button" type="submit" /></li>
                  </ul>
                </form>
              </div>
              <div className="copyright">
                <p>&copy; Untitled. All rights reserved.</p>
              </div>
            </div>
			</footer>
      </div>
    );
  }
}

export default Home;

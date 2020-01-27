import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <section class="works section-padding" data-scroll-index="2">
            <div class="container">
                <div class="row">
                    <div class="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Creative</span> Portfolio</h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design and web development services.</p>
                    </div>

                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="filtering text-center mb-30 col-sm-12">
                        <div class="filter">
                            <span data-filter='*' class="active">All</span>
                            <span data-filter='.brand'>Brand</span>
                            <span data-filter='.web'>Design</span>
                            <span data-filter='.graphic'>Graphic</span>
                        </div>
                    </div>

                    <div class="clearfix"></div>
                    <div class="gallery full-width">
                        <div class="col-lg-3 col-md-6 items graphic">
                            <div class="item-img">
                                <img src="img/portfolio/1.jpg" alt="image" />
                                <div class="item-img-overlay">
                                    <div class="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href="img/portfolio/1.jpg" class="popimg">
                                            <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 items web">
                            <div class="item-img">
                                <img src="img/portfolio/2.jpg" alt="image" />
                                <div class="item-img-overlay">
                                    <div class="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href="img/portfolio/2.jpg" class="popimg">
                                            <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 items brand">
                            <div class="item-img">
                                <img src="img/portfolio/3.jpg" alt="image" />
                                <div class="item-img-overlay">
                                    <div class="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href="img/portfolio/3.jpg" class="popimg">
                                            <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 items graphic">
                            <div class="item-img">
                                <img src="img/portfolio/4.jpg" alt="image" />
                                <div class="item-img-overlay">
                                    <div class="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href="img/portfolio/4.jpg" class="popimg">
                                            <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 items web">
                            <div class="item-img">
                                <img src="img/portfolio/5.jpg" alt="image" />
                                <div class="item-img-overlay">
                                    <div class="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href="img/portfolio/5.jpg" class="popimg">
                                            <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 items brand">
                            <div class="item-img">
                                <img src="img/portfolio/6.jpg" alt="image" />
                                <div class="item-img-overlay">
                                    <div class="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href="img/portfolio/6.jpg" class="popimg">
                                            <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 items brand">
                            <div class="item-img">
                                <img src="img/portfolio/7.jpg" alt="image" />
                                <div class="item-img-overlay">
                                    <div class="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href="img/portfolio/7.jpg" class="popimg">
                                            <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 items graphic">
                            <div class="item-img">
                                <img src="img/portfolio/8.jpg" alt="image" />
                                <div class="item-img-overlay">
                                    <div class="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href="img/portfolio/8.jpg" class="popimg">
                                            <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;

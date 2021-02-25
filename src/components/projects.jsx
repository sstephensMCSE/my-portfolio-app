import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://arcane-ridge-76824.herokuapp.com" rel="noreferrer" target="_blank">Workout Tracker</a></h3>										
											<span>log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise</span>
											<p className="icon">
												<span><a href="https://github.com/sstephensMCSE/Workout-Tracker" rel="noreferrer" target="_blank"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://limitless-brushlands-19435.herokuapp.com/" rel="noreferrer" target="_blank">Budget Tracker</a></h3>
											<span>Progressive Web App that tracks spending over time.</span>
											<p className="icon">
												<span><a href="https://github.com/sstephensMCSE/PWA-Budget-Tracker" rel="noreferrer" target="_blank"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://murmuring-peak-36493.herokuapp.com/">Eat the Burger</a></h3>
											<span>Node Express Handlebars app that demonstrates the functionality of those tools.</span>
											<p className="icon">
											<span><a href="https://github.com/sstephensMCSE/burger" rel="noreferrer" target="_blank"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="https://github.com/sstephensMCSE/Employee-Management-System" rel="noreferrer" target="_blank">Employee Management System</a></h3>
											<span>My first full stack webapp created from scratch. Runs on Node JS, inquirer, and mysql</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="https://morning-tor-88290.herokuapp.com/" rel="noreferrer" target="_blank">Note Taker</a></h3>
											<span>Simialr functionality to Google Keep, this demonstrates the capabilities of whats possible with browser local storage.</span>
											<p className="icon">
												<span><a href="https://github.com/sstephensMCSE/Note-Taker" rel="noreferrer" target="_blank"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/sstephensMCSE/template-engine-employee-summary" rel="noreferrer" target="_blank">Employee Template Engine</a></h3>											
											<span>Software engineering team generator command line application. NodeJS, Inquirer, Bootstrap. </span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="/" className="btn btn-primary btn-lg btn-load-more">Return to Top of page <i className="icon-arrow-up" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}

import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.scss";

import heroImage from "../public/images/hero-image.jpg";
import NavBar from "../components/Navbar";

// import hapiIcon from "../public/images/hapi-logo.svg";
// import nodeIcon from "../public/images/node-js.svg";
// import antdIcon from "../public/images/ant-design-logo.svg";
// import reactIcon from "../public/images/reactjs-logo.png";
// import bootstrapIcon from "../public/images/bootstrap-logo.png";
// import tailwindIcon from "../public/images/tailwind-css.svg";

import { projects, socials } from "../data/projects";

export default function index() {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Script src="https://kit.fontawesome.com/5659d0154b.js" crossOrigin="anonymous"></Script>
			</Head>

			<NavBar />

			<section className={styles.hero} id="hero">
				<div className="container">
					<div className="row d-flex">
						<div className="col-md-6 col-sm-12 order-2 order-sm-2 order-md-1 d-flex align-items-center text-sm-center mt-3 mt-sm-4 mt-md-0">
							<div>
								<h1 className={`${styles.hero_title} text-center text-sm-center text-md-start`}>Hi, I&apos;m Fauzan</h1>
								<h1 className={`${styles.hero_profession} text-center text-sm-center text-md-start`}>I am Front-End Developer</h1>
								<p className={`${styles.hero_text} text-center text-sm-center text-md-start`}>
									I love to converting UI or Web design into an actual website. I also have a big interest in learning about technologies, especially about programming and information technologies.
								</p>
							</div>
						</div>
						<div className="col-md-6 col-sm-12 order-1 order-sm-1 order-md-2 order-xs-1 d-flex justify-content-center align-items-center">
							{/* <img src={heroImage} alt="Hero Image" className="hero-image" /> */}
							<Image src={heroImage} alt="Hero" className={styles.hero_image} width={300} height={300} />
						</div>
					</div>
				</div>
			</section>

			<section className={`${styles.project} mt-4`}>
				<div className="container">
					<h6 className={`${styles.profile_title} text-uppercase text-center mb-5`}>My project / experience</h6>
					{projects?.map((item) => {
						return (
							<div className="row border-bottom pb-4 mb-4" key={item.title}>
								<div className="col-md-3 col-sm-12">
									<img src={item.image} alt="project-image" className={styles.project_image} />
								</div>
								<div className="col-md-9 col-sm-12 ">
									<h5 className={`${styles.project_title} mt-3 mt-md-0`}>{item.title}</h5>
									<span className={styles.project_year}>{item.year}</span>
									<span className={styles.project_category}>{item.category}</span>
									<p className={styles.project_description}>{item.description}</p>
									<h6 className="mb-2">Technology Stack: </h6>
									<ul className="ps-0">
										{item.techstack?.map((stack) => {
											return (
												<li className="d-inline-block me-4" key={stack.name}>
													<div className="d-flex align-items-center">
														<img src={stack.logo} className={`${styles.tech_icon} me-2`} alt="techstack" />
														<span>{stack.name}</span>
													</div>
												</li>
											);
										})}
									</ul>
									<a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
										View Demo
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section id="contact" className={`${styles.contact} text-center`}>
				<h3 className={`${styles.profile_title} text-uppercase text-center mb-1`}>Get In Touch With Me</h3>
				<span className="mb-5">Let&apos;s connect from this social media :</span>
				<ul className="ps-0 ms-0 mt-5">
					{socials?.map((social) => {
						return (
							<li className={styles.social_media_item} key={social.key}>
								<a href={social.link} target="_blank" className={social.btn_color} rel="noopener noreferrer">
									<i className={social.icon}></i>
									<span className="ps-2">{social.name}</span>
								</a>
							</li>
						);
					})}
				</ul>
			</section>

			<footer className="d-flex align-items-center flex-column justify-content-center">
				<h6 className="footer-text text-center d-block">Copyright &copy;2021 All rights reserved</h6>
			</footer>
		</div>
	);
}

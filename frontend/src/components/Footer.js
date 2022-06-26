import React from "react";
import { Container } from "react-bootstrap";
import "../styles/footer.css";

const Footer = () => {
	return (
		<Container>
			<footer className="footer-container">
				<div className="footer-icons">
					<a
						href="#"
						aria-label="github account"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-github footer-icon" />
					</a>
					<a
						href="#"
						aria-label="linkedin account"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-linkedin-in footer-icon" />
					</a>
					<a
						href="#"
						aria-label="twitter account"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-twitter footer-icon" />
					</a>
					<a
						href="#"
						aria-label="developer portfolio"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fas fa-globe-asia footer-icon" />
					</a>
				</div>
				<div className="footer-copyright">
					<a href="/">&copy;2022 Banglore Food Bank</a>
				</div>
			</footer>
		</Container>
	);
};

export default Footer;

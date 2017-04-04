import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			if (this.props.currentUser.city_id) {
				this.props.fetchCity(this.props.currentUser.city_id);
			}
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	guestLogin(e) {
		e.preventDefault();
		this.props.demo();
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link className="auth-link" to="/signup">sign
				up instead</Link>;
		} else {
			return <Link className="auth-link" to="/login">log
				in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}



	render() {

		const usernameText = this.props.formType === "login" ? null : (
			<div>
				<br/>
					<input type="text"
						value={this.state.username}
						onChange={this.update("username")}
						className="auth-input"
						placeholder="First name (or nickname)" />
			</div>
		);

		const greetingText = this.props.formType === "login" ?
		"Hey stranger!" : "Join";
		const inviteText = this.props.formType === "login" ?
		"It's good to have you back.  Sign in here!" : "We can't wait for you to join";

		return (
			<div className="auth-form">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<h2 className="auth-greeting">{greetingText}</h2>
					<p>{inviteText}</p>
					<h5 className="auth-error-text">{this.renderErrors()}</h5>
					{usernameText}
					<br/>
					<div className="login-form">
						<input className="auth-input" type="text"
							value={this.state.email}
							onChange={this.update("email")}
							placeholder="Email address" />
						<br/>
							<input className="auth-input" type="password"
								value={this.state.password}
								onChange={this.update("password")}
								placeholder="Password"/>
						<br/>
						<input className="auth-submit" type="submit"
							value="Submit"/>
						<br/>
						<p className="auth-bottom-text">
							Please {this.props.formType} or {this.navLink()}</p>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(AuthForm);

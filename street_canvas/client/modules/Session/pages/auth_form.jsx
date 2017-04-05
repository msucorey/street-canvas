import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate() {
  //   this.redirectIfLoggedIn();
  // }

  // redirectIfLoggedIn() {
  //   if (this.props.loggedIn) {
  //     this.props.router.push('/home');
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handling submit!');
    alert('handling!');
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/register">sign
        up instead</Link>;
    } else {
      return <Link to='/login'>log
        in instead</Link>;
    }
  }

  renderErrors() {
    return (
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
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="First name (or nickname)" />
      </div>
    );

    const greetingText = this.props.formType === "login" ?
    "Hey stranger!" : "Join";
    const inviteText = this.props.formType === "login" ?
    "It's good to have you back.  Sign in here!" : "We can't wait for you to join";

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>{greetingText}</h2>
          <p>{inviteText}</p>
          <h5>{this.renderErrors()}</h5>
          {usernameText}
          <br/>
          <div>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email address" />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"/>
            <br/>
            <input type="submit"
              value="Submit"/>
            <br/>
            <p>
              Please {this.props.formType} or {this.navLink()}</p>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(AuthForm);

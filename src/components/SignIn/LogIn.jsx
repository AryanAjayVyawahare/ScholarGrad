import React from 'react'
import Header from '../common/header/Header'
import "./LogIn.css"

function LogIn() {
	return (
		<>
			<div className="loginmain">
			<div className="headerLogin">	
				<Header/>
				</div>
				<div className="main">
					<input type="checkbox" id="chk" aria-hidden="true" />

					<div className="signup">
						<form>
							<label for="chk" aria-hidden="true">Sign up</label>
							<input type="text" name="txt" placeholder="User name" required="" />
							<input type="email" name="email" placeholder="Email" required="" />
							<input type="password" name="pswd" placeholder="Password" required="" />
							<button>Sign up</button>
						</form>
					</div>

					<div className="login">
						<form>
							<label for="chk" aria-hidden="true">Login</label>
							<input type="email" name="email" placeholder="Email" required="" />
							<input type="password" name="pswd" placeholder="Password" required="" />
							<button>Login</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default LogIn

import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../common/header/Header'
import "./LogIn.css"

function LogIn() {
	const navigate=useNavigate()
	const[name ,setName]=useState();
	const[email,setEmailS]=useState();
	const[password,setPasswordS]=useState();
	const[emailL,setEmailL]=useState();
	const[passwordL,setPasswordL]=useState();

const LoginCall=()=>{
	console.log("Here");
axios.get(`http://localhost:8081/login/${emailL}/${passwordL}`).then(res=>{
	if(res.data.login){
		alert("Logged in Succesfully..");
		localStorage.setItem('userid',res.data.userid);
		localStorage.setItem('login',res.data.login);
		navigate("/");
	}
	else{
		alert("Invalid Credentials");
		ClearDataL();
	}
}).catch(err=>{
	console.log(err);
	alert("Error Occured at Server Side")
	ClearDataL()
})
}

const SignupCall=(e)=>{
	e.preventDefault();
	axios.post("http://localhost:8081/login/signup",{
		name,
		email,
		password
	}).then(res=>{
		if(res.status=200){
			alert("Signup Succesfull. Please Login Now");
			ClearDataS();
		}
		else{
			alert("Some Error Occured. Please Try Again");
			ClearDataS();
		}
		
	}).catch(err=>{
		console.log(err);
		alert("Error at Server Side...")
		ClearDataS()
	})

}


const ClearDataL=()=>{
 setEmailL("")
 setPasswordL("")
}

const ClearDataS=()=>{
	setEmailS("")
	setName("");
	setPasswordS("");
}
	return (
		<>
			<div className="loginmain">
			<div className="headerLogin">	
				<Header/>
				</div>
				<div className="main">
					<input type="checkbox" id="chk" aria-hidden="true" />

					<div className="signup">
						
							<label for="chk" aria-hidden="true">Sign up</label>
							<input type="text" name="txt" placeholder="Your name" required="" value={name} onChange={(event)=>{setName(event.target.value)}}  />
							<input type="email" name="email" placeholder="Email" required="" value={email} onChange={(event)=>{setEmailS(event.target.value)}} />
							<input type="password" name="pswd" placeholder="Password" required="" value={password} onChange={(event)=>{setPasswordS(event.target.value)}}/>
							<button onClick={SignupCall}>Sign up</button>
						
					</div>

					<div className="login">
						
							<label for="chk" aria-hidden="true">Login</label>
							<input type="email" name="email" placeholder="Email" required="" value={emailL} onChange={(event)=>{setEmailL(event.target.value)}} />
							<input type="password" name="pswd" placeholder="Password" required="" value={passwordL} onChange={(event)=>{setPasswordL(event.target.value)}} />
							<button onClick={LoginCall}>Login</button>
					
					</div>
				</div>
			</div>
		</>
	)
}

export default LogIn

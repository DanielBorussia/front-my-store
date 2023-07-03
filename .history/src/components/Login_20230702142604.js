import React, { useRef } from 'react';
import '../styles/Login.scss';
import { Grid, TextField } from '@mui/material';

const Login = () => {
    const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	} 
    return (
        <div className="login">
			<div className="login__container">
				<h1>Iniciar Sesión</h1>
				<form action="/" className="forlogin__form" ref={form}>
				<Grid container spacing={3}>
				<Grid item xs={12}>
					<TextField id="outlined-basic" label="Email" variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<TextField id="outlined-basic" type="password" label="Password" placeholder="*********" variant="outlined" />
				</Grid>
				</Grid>
					<button className="primary-button login-button" onClick={handleSubmit}>
						Log in 
					</button>
				</form>
				<button className="secondary-button signup-button" >
					Sign up
				</button>
			</div>
		</div>
    );
}

export default Login;
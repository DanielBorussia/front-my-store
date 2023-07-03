import React, { useRef, useState } from 'react';
import '../styles/Login.scss';
import { Button, Grid, TextField, Box } from '@mui/material';

const Login = () => {
    const form = useRef(null);
	const [isLogin, setIsLogin] = useState(true);

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
        <Box className="login">
			<Box className="login__container">
				<h1>Iniciar Sesión</h1>
				<form action="/" className="forlogin__form" ref={form}>
					<Grid container spacing={3}>
						{!isLogin && (
							<React.Fragment>
							<Grid item xs={12}>
								<TextField 
									sx={{ width: '100%' }} 
									label="Nombre Completo" 
									variant="outlined" 
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField 
									sx={{ width: '100%' }} 
									label="Celular" 
									variant="outlined"
									type="number" 
								/>
							</Grid>
							</React.Fragment>
						)}
						<Grid item xs={12}>
							<TextField
							  	sx={{ width: '100%' }}
								label="Email" 
								variant="outlined" 
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField 
								sx={{ width: '100%' }} 
								type="password" 
								label="Password" 
								placeholder="*********" 
								variant="outlined" 
							/>
						</Grid>
					</Grid>
					<button className="button__primary button__login" onClick={handleSubmit}>
						Login
					</button>
				</form>
				{!isLogin && (
					<button className="button__secondary" onClick={()=> setIsLogin(false)}>
						Registrarse
					</button>
				)}
				
			</Box>
		</Box>
    );
}

export default Login;
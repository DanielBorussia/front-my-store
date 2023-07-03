import React, { useRef, useState } from 'react';
// Styles
import '../styles/Login.scss';
// UI
import { Button, Grid, TextField, Box, Alert, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// Services
import { login } from '../shared/Services/Auth';
import { addUser } from '../shared/Services/User';

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logIn } from '../modules/auth';
import { useDispatch } from 'react-redux';
import { addUserLogin } from '../modules/auth';

const Login = () => {
	const { 
        register, 
        formState: { errors } ,
        handleSubmit 
    } = useForm();
	const [isLogin, setIsLogin] = useState(true);
	const history = useNavigate();
	const dispatch = useDispatch();
	const [loadingLoginForm, setLoadingLoginForm] = useState(false);
	const [messageError, setMessageError] = useState("");

	const handleLoginError = (message) => {
		setMessageError(message);
		setLoadingLoginForm(false);
	};

	const onLogin = (user) => {
		//history('/products');
		dispatch(addUserLogin(user));
	}

	const onSubmit = (data) => {
		/*functionCall = isLogin ? login : addUser;
		functionCall(data)
		.then((res) => {
			if(res && res.token && res.status == 200){
				localStorage.setItem("access_token", res.token);
			}
		});*/
		setLoadingLoginForm(true);
		logIn(data.email, data.password, onLogin, handleLoginError);
    }

    return (
        <Box className="login">
			<Box className="login__container">
				<h1>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3}>
						{!isLogin && (
							<React.Fragment>
							<Grid item xs={12}>
								<TextField 
									sx={{ width: '100%' }} 
									label="Nombre Completo" 
									variant="outlined"
									{...register('name', { required : true})}
									error={errors?.name} 
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField 
									sx={{ width: '100%' }} 
									label="Celular" 
									variant="outlined"
									type="number" 
									{...register('phone', { required : true})}
									error={errors?.phone}
								/>
							</Grid>
							</React.Fragment>
						)}
						<Grid item xs={12}>
							<TextField
							  	sx={{ width: '100%' }}
								label="Email" 
								variant="outlined" 
								{...register('email', { required : true})}
								error={errors?.email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField 
								sx={{ width: '100%' }} 
								type="password" 
								label="Password" 
								placeholder="*********" 
								variant="outlined" 
								{...register('password', { required : true})}
								error={errors?.password}
							/>
						</Grid>
					</Grid>
					{messageError && <Alert severity="error">{messageError}</Alert>}
					{isLogin ? (
						<button className="button__primary button__login" type='submit'>
							{loadingLoginForm ? (
								<CircularProgress size={30} color="inherit" />
							) : (
								"Login"
							)}
						</button>
					) : (
						<button className="button__primary button__login" type='submit'>
							{loadingLoginForm ? (
								<CircularProgress size={30} color="inherit" />
							) : (
								"Guardar Usuario"
							)}
							
						</button>
					)}
				
				</form>
				{isLogin ? (
					<button className="button__secondary" onClick={()=> setIsLogin(false)}>
						Registrarse
					</button>
				) : (
					<button className="button__secondary" onClick={() => setIsLogin(true)}>
							Login
					</button>
				)}
				
			</Box>
		</Box>
    );
}


  
  export default Login;
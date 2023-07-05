import React, { useState } from 'react';
// Styles
import '../styles/Login.scss';
// UI
import { Grid, TextField, Box, Alert, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Redux
import { logIn, signIn } from '../redux/modules/auth';
import { useDispatch } from 'react-redux';
import { addUserLogin } from '../redux/modules/auth';

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
	const [messageRegisterError, setMessageRegisterError] = useState("");

	const handleLoginError = (message) => {
		setMessageError(message);
		setLoadingLoginForm(false);
	};

	const handleRegisterError = (message) => {
		setMessageRegisterError(message);
		setLoadingLoginForm(false);
	};

	const onLogin = (user) => {
		dispatch(addUserLogin(user));
		history('/products');
	}

	const onSubmit = (data) => {
		setLoadingLoginForm(true);
		if(isLogin){
			logIn(data.email, data.password, onLogin, handleLoginError);
		}else{
			signIn(data, onLogin, handleRegisterError)
		}
		
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
								type="email"
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
					{messageRegisterError && <Alert severity="error">{messageRegisterError}</Alert>}
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
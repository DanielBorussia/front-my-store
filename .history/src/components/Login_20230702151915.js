import React, { useRef, useState } from 'react';
import '../styles/Login.scss';
import { Button, Grid, TextField, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

const Login = () => {
	const { 
        register, 
        formState: { errors ,
        handleSubmit 
    } = useForm();
	const [isLogin, setIsLogin] = useState(true);

	const onSubmit = (data) => {
		console.log(data);
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
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField 
									sx={{ width: '100%' }} 
									label="Celular" 
									variant="outlined"
									type="number" 
									{...register('phone', { required : true})}
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
								error={errors?.name}
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
							/>
						</Grid>
					</Grid>
					{isLogin ? (
						<button className="button__primary button__login" type='submit'>
							Login
						</button>
					) : (
						<button className="button__primary button__login" type='submit'>
							Guardar Usuario
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
import React, { useEffect, useState } from 'react';
import peoples from './People';
import TableContainer from '@material-ui/core/TableContainer';
import { Button, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	table: {
		minWidth: 650,
	},
	grid: {
		width: 'auto',
		height: 'auto',
		marginTop: 100,
		margin: 'calc(50vw - 40%)',
	}
}));

const Persons = () => {

	const [persons, setPersons] = useState([...peoples]);
	const classes = useStyles();

	useEffect(() => {
		handleDeleteUser();
	}, []);

	const handleDeleteUser = (p) => {
		console.log('personDelete', p?.id);

		const userDelete = persons.filter(person => person.id != p?.id);
		console.log('userDelete', userDelete);

		setPersons([...userDelete]);
		console.log('usuario eliminado');
	};




	const handleAddUser = () => {

	};

	return (
		<Grid className={classes.grid}>
			<Typography variant='h3' align='center'>Crud Usuarios</Typography>
			<Button variant='contained' color='primary' onClick={console.log('add')}>Crear usuario</Button>
			{/* <form className={classes.root} noValidate autoComplete="off" >
				<TextField onC id="outlined-basic" label="Nombre" variant="outlined" />
				<TextField id="outlined-basic" label="Apellido" variant="outlined" />
				<TextField id="outlined-basic" label="Correo" variant="outlined" />
				<TextField id="outlined-basic" label="Genero" variant="outlined" />
			</form> */}
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align='center'>Nombre</TableCell>
							<TableCell align="center">Apellido</TableCell>
							<TableCell align="center">Correo</TableCell>
							<TableCell align="center">Genero</TableCell>
							<TableCell align='center'>Acciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{persons.map((person, index) => (
							<TableRow key={index}>
								<TableCell align='center' component="th" scope="person">
									{person.first_name}
								</TableCell>
								<TableCell align="center">{person.last_name}</TableCell>
								<TableCell align="center">{person.email}</TableCell>
								<TableCell align="center">{person.gender}</TableCell>
								<TableCell align='center'>
									<Button
										color='secondary'
										variant='contained'
										style={{ width: 20 }}
										onClick={() => handleDeleteUser(person, index)}
									>
										Borrar usuario
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	)
}

export default Persons;
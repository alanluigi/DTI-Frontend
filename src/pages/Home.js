import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Home.css';
import api from '../services/api';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers'

export default function Home() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [qtdPetsGrandes, setQtdPetsGrandes] = useState(0)
    const [qtdPetsPequenos, setQtdPetsPequenos] = useState(0)
    const [openAlert, setOpenAlert] = useState(false);
    const [petShopAlert, setPetShopAlert] = useState({});
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handlePetsGrandes = (e) => {
        const qtd = parseInt(e.target.value)
        
        if(qtd > 0) {
            setQtdPetsGrandes(qtd)
        }else{
            setQtdPetsGrandes(0)
        }
    }

    const handlePetsPequenos = (e) => {
        const qtd = parseInt(e.target.value)
        
        if(qtd > 0) {
            setQtdPetsPequenos(qtd)
        }else{
            setQtdPetsPequenos(0)
        }
    }

    async function handleSubmit(e) {
        console.log(selectedDate.toLocaleDateString(), qtdPetsGrandes, qtdPetsPequenos)
        const response = await api.post('/', {
            data: selectedDate.toLocaleDateString(),
            petsPequenos: qtdPetsPequenos,
            petsGrandes: qtdPetsGrandes
        })

        const { petShopMaisBarato } = response.data

        console.log(petShopMaisBarato)

        setPetShopAlert(petShopMaisBarato)

        setOpenAlert(true)
        
    }

    return (
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="Pets"/>
                <h1>Pets</h1>
            </div>
            <div className="form-container">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="data-pet"
                        label="Data Banho"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField 
                    id="pets-grandes" 
                    label="Qtd. Pets Grandes"
                    value={qtdPetsGrandes}
                    onChange={handlePetsGrandes}
                />
                <TextField 
                    id="pets-pequenos" 
                    label="Qtd. Pets Pequenos"
                    value={qtdPetsPequenos}
                    onChange={handlePetsPequenos}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Calcular
                </Button>
            </div>
                <Collapse in={openAlert}>
                    <Alert
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpenAlert(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        O PetShop mais barato para o dia escolhido, será o {petShopAlert.nome} e o valor total do serviço será de R${petShopAlert.valor}
                    </Alert>
                </Collapse>
        </div>
    );
}

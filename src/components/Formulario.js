import React from 'react';
import Button from 'react-bootstrap/Button'
import simpson from '../img/simpson.png'

const Formulario = () => {
    return (
        <div  className='mt-5 d-flex flex-column align-items-center '>
    <img src={simpson} alt="logo de los simpson" className='w-50 '/>
 <Button variant="warning" type="submit" className=' my-3 '>
    Obtener frase
  </Button>
        </div>
    );
};

export default Formulario;
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { uploadImage } from '../helpers/UploadImage';
import { endPoint } from '../helpers/Url';
import { FormContainer } from '../styles/Styles';

const Formulario = () => {

  const [registro, setRegistro] = useState({
    id: '',
    title:'',
    price: '',
    description: '',
    category: '',
    image: ''
  });
  const {title,price,description,category,image} = registro;

  const handleChange = ({target}) => {
    setRegistro({
      ...registro,
      [target.name]: target.value
    })
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    //console.log(registro);
    postRegister(endPoint);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    uploadImage(file)
    .then(response => {
        registro.image = response;
    }).catch(error => {
        console.log(error.message)
    }) 
  }

  
  const postRegister = (url) =>{
    axios.post(url, registro)
    .then(response => {
      console.log(response);
    }).catch(error => {
        console.log(error.message)
    }) 
  }


  return <FormContainer>
          <Form onSubmit={handleSubmit} className='p-4 rounded-3 shadow p-3 mb-5 bg-body'>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control type="text" placeholder="Ej: Camisa formal" name="title" value={title} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción del Producto</Form.Label>
              <Form.Control type="text" placeholder="Ej: Tela suave , color azul, etc" name="description" value={description} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select aria-label="Default select example" name="category" value={category} onChange={handleChange}>
                <option>Seleccione Categoría</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Valor del Producto (Dolares)</Form.Label>
              <Form.Control type="number" placeholder="Ej: 49.5" name="price" value={price} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Imagen del Producto</Form.Label>
              <Form.Control type="file"  name="image" value={image} onChange={handleFileChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrar
            </Button>
        </Form>
        </FormContainer>;
};

export default Formulario;

import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Icon from '@material-ui/core/Icon';

import { Form } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

const useStyles = makeStyles(theme => ({
  modal: {
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'scroll',
    

  
 
    
    

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #fff',
    borderRadius:'5px',
    marginTop:'15px',
    padding: theme.spacing(15, 15, 15),
  },
}));



export default function AddProductModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [coverImage, setProductCoverImage] = useState(null);

  const fileSelectedHandler = event => {
    console.log(event.target.files.length);
    let images = [];
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
      images = images.filter(image =>
        image.name.match(/\.(jpg|jpeg|png|gif)$/)
      );
      let message = `${images.length} valid image(s) selected`;
      setImages( images );
      console.log(images)
     
    }
  };

  const setCoverImage = (e) => {
      setProductCoverImage(e.target.files[0])
    

}

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const handleChange = (e, {value}) => {
     setValue(value)

 }



  return (
    <div style={{overflow:'scroll'}}>
         <i className="fa fa-plus-circle" onClick={handleOpen} color="action" style={{position:'absolute', right:'40px',top:'90px', cursor:'pointer', fontSize:'20px'}}>
             Add Product
         </i>
     
      <Modal 
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          
        <Fade in={open}>
       
          <div className={classes.paper}>
          <i className="fas fa-times" onClick={handleClose} style={{color:"black", cursor:'pointer', position:"relative", fontSize:'20px'}}>
             {' '}close
             </i>
             <Form >
        <Form.Group widths='equal'>
          <Form.Input fluid label='Product Name' placeholder='Product name' />
          
          {/* <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          /> */}
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Manufacturer' placeholder='Manufacturer' />
          
         
        </Form.Group>

        <Form.Group widths='equal'>
         <Form.Select
            fluid
            label='Country of origin'
            options={options}
            placeholder='Country of origin'
          /> 
         
          
         
        </Form.Group>
        <Form.Group widths='equal'>
         <Form.Select
            fluid
            label='Main Category'
            options={options}
            placeholder='Main Category'
          /> 
        </Form.Group>
        <Form.Group widths='equal'>
         <Form.Select
            fluid
            label='Sub Category'
            options={options}
            placeholder='Sub Category'
          /> 
        </Form.Group>
        <Form.Group widths='equal'>
         <Form.Select
            fluid
            label='Price'
            options={options}
            placeholder='Price'
          /> 
          </Form.Group>
       
        <Form.TextArea label='Description' placeholder='Tell us more about the product...' />
        <label htmlFor="photo" style={{color:'black'}}>Product Images</label>
        <Form.Field>
      <label>Add related Images</label>
      <input type='file'
        accept="image/*"
        onChange={fileSelectedHandler}
        multiple/>
        <div className="form__group ma-bt-md">
                  {images ? (
                    images.map((x, i) => (
                      <img
                        src={URL.createObjectURL(x)}
                        style={{
                          height: "100px",
                          width: "130px",
                          borderRadius: "5px",
                          margin: "3px"
                        }}
                        alt="image"
                        key={i}
                      />
                    ))
                  ) : (
                    <div>No images</div>
                  )}
                </div>
      </Form.Field>
      <Form.Field>
      <label htmlFor="photo">Add A Cover Image</label>

<div className="form__group ma-bt-md">
  <input
    type="file"
    id="coverImage"
    name="coverImage"
    accept="image/*"
    onChange={setCoverImage}
    style={{ cursor: "pointer" }}
  />
</div>
{coverImage ? 
(<img src={URL.createObjectURL(coverImage)} 
style={{
  height: "100px",
  width: "130px",
  borderRadius: "5px",
  margin: "3px"
}}
alt="image"
/>):
<div><p>No cover image selected</p></div>

}
      </Form.Field>
        
        
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
            
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
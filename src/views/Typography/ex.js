<Form>
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
<label htmlFor="photo">Add Related Images</label>

<div className="form__group ma-bt-md">
<input
type="file"
id="photo"
name="photo"

// onChange={fileSelectedHandler}
accept="image/*"
style={{ cursor: "pointer" }}
multiple
/>
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
</div>

<label htmlFor="photo">Add A Cover Image</label>

<div className="form__group ma-bt-md">
<input
type="file"
id="coverImage"
name="coverImage"
accept="image/*"
//onChange={setCoverImage}
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

<Form.Checkbox label='I agree to the Terms and Conditions' />
<Form.Button>Submit</Form.Button>
</Form>
    
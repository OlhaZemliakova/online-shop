import Form from 'react-bootstrap/Form';

export function CategorySelect() {

  return (
      <Form.Select size="sm" aria-label="Default select example">
        <option>Please choose a category</option>
        <option value="men-clothes">Men's clothes</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewellery">Jewellery</option>
        <option value="electronics">Electronics</option>
      </Form.Select>
  )
}
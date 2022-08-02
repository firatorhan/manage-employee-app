import { Form, Button} from "react-bootstrap"

const AddForm = () => {

    return (
        <Form>
            
                <Form.Group>
                <Form.Control typeof="text" placeholder="Name" required />
                </Form.Group>

                <Form.Group>
                <Form.Control typeof="email" placeholder="Email" required />
                </Form.Group>

                <Form.Group>
                <Form.Control as="textarea" placeholder="Adress" rows={3} />
                </Form.Group>

                <Form.Group>
                <Form.Control typeof="phone" placeholder="Phone" />
                </Form.Group>

                <Button variant = "success" typeof ="submit">Add New Employee</Button>
            
        </Form>
    )
}

export default AddForm;
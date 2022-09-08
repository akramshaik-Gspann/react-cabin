import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import CabinDataService from "../CabinTable/CabinService";

const AddCabin = ({ id, setCabinId }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || name === "" || email === "" || designation === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newCabin = {
      title,
      name,
      email,
      designation,
      status,
    };
    console.log(newCabin);

    try {
      if (id !== undefined && id !== "") {
        await CabinDataService.updateCabin(id, newCabin);
        setCabinId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await CabinDataService.addCabins(newCabin);
        setMessage({ error: false, msg: "New Cabin added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setName("");
    setEmail("");
    setDesignation("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await CabinDataService.getCabin(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setName(docSnap.data().name);
      setEmail(docSnap.data().email);
      setDesignation(docSnap.data().designation);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Cabin Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Emp Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Emp Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Emp Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          {/* <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup> */}
          <div className="col-12 text-center">
            <Button variant="primary" type="Submit">
              Confirm Bokking
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddCabin;

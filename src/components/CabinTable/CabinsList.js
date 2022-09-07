import React, { useEffect, useState } from "react";
import { Table, Modal } from "react-bootstrap";
import CabinDataService from "../CabinTable/CabinService";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";

const CabinsList = ({ getBookId }) => {
    const [cabins, setCabins] = useState([]);
    const [show, setShow] = useState(false);
    const [showCabinData, setCabinData] = useState({title:"" });

  const handleClose = () => setShow(false);
  const handleShow = (doc) =>{
    setCabinData(doc);
    setShow(true);
  } 
  const updateHandler = () =>{
    console.log(showCabinData);
    // await CabinDataService.updateCabin(id, newCabin);
  }
    useEffect(() => {
        getCabins();
    }, []);

    const getCabins = async () => {
        const data = await CabinDataService.getAllCabins();
        console.log(data.docs);
        setCabins(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await CabinDataService.deleteCabin(id);
        getCabins();
    };
    return (
        <>
            <div className="mb-2">
                <Button variant="dark edit" onClick={getCabins}>
                    Refresh List
                </Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cabin Name</th>
                        <th>Emp Name</th>
                        <th>Emp Email</th>
                        <th>Emp Designation</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cabins.map((doc, index) => {
                        return (
                            <tr key={doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.title}</td>
                                <td>{doc.name}</td>
                                <td>{doc.email}</td>
                                <td>{doc.designation}</td>
                                <td>{doc.status}</td>
                                <td>
                                    <Button
                                        className="edit"
                                        variant="secondary"
                                        onClick={(e) => handleShow(doc)}
                                        // onClick={handleShow}
                                    >
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>
                                    <Modal className="right" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                              <center>
                                {/* <input  value={showCabinData.title} /> */}
                                
            <button onClick={updateHandler}>UPdate</button>
          

                              </center>
                            </Modal.Body>
                          </Modal>
                                    <Button
                                        variant="danger"
                                        className="delete"
                                        onClick={(e) => deleteHandler(doc.id)}
                                    >
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default CabinsList;

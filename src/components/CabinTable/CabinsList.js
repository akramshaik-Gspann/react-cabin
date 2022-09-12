import React, { useEffect, useState } from "react";
import { Table, Modal } from "react-bootstrap";
import CabinDataService from "../CabinTable/CabinService";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import {  useSelector } from "react-redux";

<<<<<<< HEAD
const CabinsList = ({ getBookId, profile }) => {

    console.log(profile);
=======
const CabinsList = ({ getBookId, id, cabinData }) => {
>>>>>>> 54431651256ed29d0a2c830c4e589354ed83bd4f
    const [cabins, setCabins] = useState([]);
    const [show, setShow] = useState(false);
    const [showCabinData, setCabinData] = useState({ title: "" });

    const { currentUser } = useSelector((state) => state.user);
    const handleClose = () => setShow(false);
    const handleShow = (doc) => {
        setCabinData(doc);
        setShow(true);
    }
    const updateHandler = () => {
        console.log(showCabinData);
        // await CabinDataService.updateCabin(id, newCabin);
    }
    useEffect(() => {
        getCabins();
    }, []);

    const getCabins = async () => {
        const data = await CabinDataService.getAllCabins();
        console.log(data.docs[2]);
        console.log(data)
        console.log(data.docs)
        
        console.log(profile._delegate.email);

        setCabins(data.docs.filter((doc) => { 
        console.log(doc.data().email === profile._delegate.email ); 
           if(doc.data().email !== profile._delegate.email){
            return doc;
           };
        }));

        // setCabins(data.docs.filter(doc => {
        //     console.log(profile._delegate.email)
        //     if (data.docs._delegate.email === data.docs._document.data.value.mapValue.fields.email) {
        //         return doc
        //     }
        // }));
        // setCabins(data.docs.filter((doc) => ({ ...doc.data(), id: doc.id })));
        setCabins(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await CabinDataService.deleteCabin(id);
        getCabins();
    };
    return (
        <>
            <div className="button_refresh">
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
                        <th>Date & Time</th>
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
                                <td> <input type="date" value={doc.date} id="birthday" name="birthday" /></td>

                                <td>
                                    <Button
                                        className="edit"
                                        variant="secondary"
                                        onClick={(e) => handleShow(doc)}
                                    // onClick={handleShow}
                                    >Edit <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>
                                    <Modal className="right" show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <center>
                                                {/* <input  value={showCabinData.title} /> */}
                                                <button onClick={updateHandler}>Update</button>
                                            </center>
                                        </Modal.Body>
                                    </Modal>
                                    <Button
                                        variant="danger"
                                        className="delete"
                                        onClick={(e) => deleteHandler(doc.id)}
                                    >Delete <i className="fa fa-trash" aria-hidden="true"></i>
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

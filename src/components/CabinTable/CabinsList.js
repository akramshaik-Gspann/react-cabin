import React, { useEffect, useState } from "react";
import { Table, Modal } from "react-bootstrap";
import CabinDataService from "../CabinTable/CabinService";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const CabinsList = ({ getBookId, profile, id, cabinData }) => {

    console.log(profile);
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
        let dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        dataFilter = dataFilter.filter(x => x.email === profile._delegate.email)
        setCabins(dataFilter);
        // setCabins(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
                                    >Edit <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>
                                    <Modal className="right" show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <center>
                                                <div className="form-group">
                                                    <input className="form-control" type="text" value={showCabinData.title} />
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="text" value={showCabinData.name} />
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="email" value={showCabinData.email} />
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="date" value={showCabinData.date} />
                                                </div>
                                                <br />
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

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
    const [date, setDate] = useState(new Date());
    const { currentUser } = useSelector((state) => state.user);
    const handleClose = () => setShow(false);
    const handleShow = (doc) => {
        setCabinData(doc);
        setShow(true);
    }
    const updateHandler = async () => {
        showCabinData.date = date;
        await CabinDataService.updateCabin(showCabinData.id, showCabinData);
        console.log("showCabinData", showCabinData);
        handleClose(true);
    }
    useEffect(() => {
        getCabins();
    }, []);
    const getCabins = async () => {
        const data = await CabinDataService.getAllCabins();
        console.log("profile", profile._delegate.email);
        let dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        dataFilter = dataFilter.filter(x => x.email === profile._delegate.email)
        setCabins(dataFilter);
        // setCabins(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deleteHandler = async (id) => {
        await CabinDataService.deleteCabin(id);
        getCabins();
    };

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };


    return (
        <>
            <div className="button_refresh">
                <Button variant="dark edit" onClick={getCabins}>
                    Refresh List
                </Button>
            </div>
            <div className="cabin-table">
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
                                <td className="for-desktop">
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
                                                    <input className="form-control" type="text" defaultValue={showCabinData.title} readOnly/>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="text" defaultValue={showCabinData.name} readOnly/>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="email" defaultValue={showCabinData.email} readOnly/>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="date" defaultValue={showCabinData.date} onChange={(e) => setDate(e.target.value)} min={disablePastDate()} />
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
                                <td className="for-mobile" >
                                <Button
                                        className="edit"
                                        variant="secondary"
                                        onClick={(e) => handleShow(doc)}
                                    ><i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>
                                    <Modal className="right" show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <center>
                                                <div className="form-group">
                                                    <input className="form-control" type="text" defaultValue={showCabinData.title} readOnly/>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="text" defaultValue={showCabinData.name} readOnly/>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="email" defaultValue={showCabinData.email} readOnly/>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <input className="form-control" type="date" defaultValue={showCabinData.date} onChange={(e) => setDate(e.target.value)} min={disablePastDate()} />
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
                                    ><i className="fa fa-trash" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            </div>
            
        </>
    );
};
export default CabinsList;
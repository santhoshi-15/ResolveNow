import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import ChatWindow from '../common/ChatWindow';
import Collapse from 'react-bootstrap/Collapse';

const Status = () => {
  const [toggle, setToggle] = useState({})

  const [statusCompliants, setStatusCompliants] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    const { _id } = user;
    axios.get(`http://localhost:8000/status/${_id}`)
      .then((res) => {
        setStatusCompliants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const handleToggle = (complaintId) => {
    setToggle((prevState) => ({
       ...prevState,
       [complaintId]: !prevState[complaintId],
    }));
 };

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
        {statusCompliants.length > 0 ? (
          statusCompliants.map((complaint, index) => {
            const open = toggle[complaint._id] || false;
            return (
              <Card key={index} style={{ width: '18.5rem', margin: '0 15px 15px 0' }}>
                <Card.Body>
                  <Card.Title>Name: {complaint.name}</Card.Title>
                  <Card.Text>Address: {complaint.address}</Card.Text>
                  <Card.Text>City: {complaint.city}</Card.Text>
                  <Card.Text>State: {complaint.state}</Card.Text>
                  <Card.Text>Pincode: {complaint.pincode}</Card.Text>
                  <Card.Text>Comment: {complaint.comment}</Card.Text>
                  <Card.Text>Status: {complaint.status}</Card.Text>
                  <Button className='mb-2' style={{float: 'right'}} onClick={() => handleToggle(complaint._id)}
                    aria-controls={`collapse-${complaint._id}`}
                    aria-expanded={open} variant="primary">
                    Message
                  </Button>
                  <div style={{ minHeight: '100%'}}>
                    <Collapse in={open} dimension="width">
                      <div id="example-collapse-text">
                        <Card body style={{ width: '260px', marginTop: '12px' }}>
                          <ChatWindow key={complaint.complaintId} complaintId={complaint._id} name={complaint.name} />
                        </Card>
                      </div>
                    </Collapse>
                  </div>
                </Card.Body>
              </Card>
            )

          })
        ) : (
          <Alert variant="info">
            <Alert.Heading>No complaints to show</Alert.Heading>
          </Alert>
        )}
      </div>



    </>
  )
}

export default Status;










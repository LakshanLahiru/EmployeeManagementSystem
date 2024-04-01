import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function All() {
  const [employeers, setEmployeers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8088/employeers')
      .then(function (response){
        setEmployeers(response.data); // Update state with response.data, which contains the array of employees
      })
      .catch(function (error){
        console.log(error);
      });
  }, []);

  console.log(employeers);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8088/delete/${id}`);
      setEmployeers(employeers.filter(emp => emp.id !== id)); // Remove the deleted employee from the state
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='container'>
      <h1><center>All Employeers</center></h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeers.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  {/* Action buttons or links can be added here */}
                  <Button variant="success" >Update</Button>{' '}
                  <Button variant="danger" onClick={() => deleteEmployee(employee.id)}>Delete</Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default All;


import React from 'react'
import { useState } from 'react';
import Image from '../images/loading.svg';
import Image2 from '../images/Adidas_Logo.svg.webp';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Userdata() {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false);
    const getUsersdata = () => {
        // Loding component works well but due to no delay in API fetching, I am Using setInternal to show the loader component by force.
        setLoading(true);
        const userdata = fetch("https://reqres.in/api/users?").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
        setInterval(() => setLoading(false), 1000);
    }
    console.log(data)
    return (
        <div>
            <div className='container-fluid bg-light'>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home" className="me-5"> <img className='brand' src={Image2} /> </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <Button onClick={getUsersdata} variant="dark">UserDetails</Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='row'>
                    {console.log("loading", loading)}
                    {loading === true ? <img className='image' src={Image} /> :
                        data?.data?.map((item, index) =>
                            <div className='col-md-4 sm-3 lg-3'>
                                <div className="card m-4">
                                    <img src={item.avatar} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h6>{item.first_name} {item.last_name}</h6>
                                        {item.email}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Userdata;

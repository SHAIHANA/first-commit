

import { useState } from 'react';
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

function ProjectCard() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
    return (
        <>
            <div>


                <section className='text-center'>

                   

                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                        <div style={{ boxShadow: '0 4px 6px rgba(4, 0, 1.2, 1.4', margin: '5%' }}>
                            <Card  onClick={toggleOpen} sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image="https://www.adda247.com/jobs/wp-content/uploads/sites/4/2024/09/18143709/Project-Cheetah.png"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Media-Player
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica */}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        {/* <MDBBtn onClick={toggleOpen}>LAUNCH DEMO MODAL</MDBBtn> */}
                        <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
                            <MDBModalDialog>
                                <MDBModalContent>
                                    <MDBModalHeader>
                                        <MDBModalTitle>ProjecT Name</MDBModalTitle>
                                        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/employees-working-on-project-2890213-2407190.png" alt=""  style={{width:'500px', height:'300px'}}/>
                                            </div>
                                            <div className='col-6'>
                                                <h2>Description</h2>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed veniam accusantium iste cumque quia magni doloribus cupiditate vero enim voluptas sint tenetur neque officia repellendus provident eveniet dolorum, tempore deserunt.</p>
                                                <h3>Technologies : React</h3>
                                

                                            </div>
                                            <hr />

                                            <div className='row d-flex justify-content-evenly'>
                                                <div className='col'></div>
                                                <div className='col'></div>
                                            </div>
                                        </div>
                                    </MDBModalBody>
                                </MDBModalContent>
                            </MDBModalDialog>
                        </MDBModal>
                        {/* <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 2, 1.3', margin: '5%' }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image="https://tse1.mm.bing.net/th?id=OIP.dGzl3Hrd0uPhaHgaZCtZ1QHaEK&pid=Api&P=0&h=180"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Portfolio
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div style={{ boxShadow: '0 4px 6px rgba(0, 0, 2, 1.3', margin: '5%' }}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image="https://goodmenproject.com/wp-content/uploads/2019/07/slide-model-3.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            E-Cart
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProjectCard
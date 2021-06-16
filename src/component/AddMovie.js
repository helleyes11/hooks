import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const AddMovie = ({ show, handleClose, addMovie }) => {
  
  const [newMovie, setNewMovie] = useState({
    title: "",
    rate: 1,
    desc: "",
    genre: "",
    img: "",
  });
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const onStarClick=(nextValue,prevValue,name)=>{
    setNewMovie({...newMovie,rate:nextValue})
    
  };
  const handleChange = (e) => {
    setNewMovie({...newMovie, [e.target.name]: e.target.value});
  };


const handleAddMovie=()=>{

  addMovie(newMovie)
  handleClose()
}
  
 return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Share a Movie With Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
           
            
             
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter The Title of The Movie"
                  onChange={handleChange}
                  name="title"
                />
             
              <ReactStars
                count={5}
                onChange={onStarClick}
                size={24}
                activeColor="#ffd700"
                name="rate"
                value={newMovie.rate}
              />

          
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image URL"
                  onChange={handleChange}
                  name="img"
                />
              
            

            <Form.Label column="sm" lg={2}>
              Description
            </Form.Label>
           
              <Form.Control
                size="sm"
                type="text"
                placeholder="Description of The Movie"
                onChange={handleChange}
                name="desc"
              />
            

            
            
               
            
         
          {/* <Form className="needs-validation" noValidate>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="prenom">Type your movie title here</label>
                  <input
                    type="text"
                    className="form-control"
                   
                    
                    placeholder="Enter The Title of The Movie"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="nom">Drop the image of the movie here</label>
                  <input
                    type="text"
                    className="form-control"
                    
                   
                    placeholder=".jpg/png"
                    required
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="pseudo">Put the rate of the movie</label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    
                    placeholder="Rate"
                    
                    required
                  />{" "}
                  <br />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="ville">
                    Type the description of the movie here
                  </label>
                  <input
                    type="text"
                    className="form-control"
                   
                  
                    placeholder="Description"
                    required
                  />

                 
                </div>
              </div>
            </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleAddMovie            }
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;

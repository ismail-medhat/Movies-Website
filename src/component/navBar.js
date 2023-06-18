import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import movieLogo from "../images/movie.png";

export default function NavBar(props) {
  const { searchKey, setSearchKey } = props;
  const handleInputChange = (event) => {
    setSearchKey(event.target.value);
  };
  return (
    <React.Fragment>
      <div className="nav-style w-100">
        <Container>
          <Row className="pt-2">
            <Col xs="10" lg="11" className="d-flex align-align-items-center">
              <div className="search w-100">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchKey}
                  onChange={handleInputChange}
                />
              </div>
            </Col>
            <Col xs="2" lg="1">
              <img className="logo" src={movieLogo} alt="movie logo" />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

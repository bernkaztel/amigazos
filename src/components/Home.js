import React, { Component } from "react";
import JumbotronCard from "./reacstrap/JumbotronCard";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { googleLogin } from "../actions/userActions";
import { getUser } from "../actions/userActions";
import Navbar from "./reacstrap/Navbar";
import './style.css';

import axios from 'axios';



class Home extends Component {
  constructor() {
    super();
    this.state = {
      Conekta: null,
      token: null
    }
  }

  componentDidMount() {
    this.props.getUser();
  }

  // componentDidUpdate() {
  //   if (this.props.userLoading === false && this.props.user) {
  //     //  {this.props.history.push('/registration')}
  //   }
  // }

  render() {

    return (
      <Container className="font-family">
        <Navbar />
        <JumbotronCard/>
        <Col md={{ size: 4, offset: 4 }} className="d-block mx-auto">
          <Button id="registro" onClick={this.props.googleLogin}>
            Regístrate
          </Button>
        </Col>
      </Container>

    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    userLoading: state.loading.user
  };
}
export default connect(mapStateToProps, { googleLogin, getUser })(Home);

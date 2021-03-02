import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  
  deleteHandler = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    console.log(this.props);
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          {items.map(({ id, name }) => (
            <ListGroupItem>
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={this.deleteHandler.bind(this, id)}
              >
                X
              </Button>
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item // the name we gave in the reducer
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);

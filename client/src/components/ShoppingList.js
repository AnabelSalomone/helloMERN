import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  
  render() {
    const {items} = this.props.item
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter name");
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuidv4(), name }],
              }));
            }
          }}
        >
          Add Item
        </Button>

        <ListGroup>
          {items.map(({ id, name }) => (
            <ListGroupItem>
              <Button className="remove-btn" color="danger" size="sm">
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

export default connect(mapStateToProps, { getItems })(ShoppingList);

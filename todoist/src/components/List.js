import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/index";

const mapStateToProps = state => {
  return { items: state.items };
};

const mapDispatchToProps = dispatch => {
  return { deleteItem: index => dispatch(actionTypes.deleteItem(index)) };
};

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  delete(index) {
    console.log(index);
    this.props.deleteItem(index);
  }

  render() {
    console.log(mapDispatchToProps());
    let items = this.props.items;
    return (
      <div className="rightpanel">
        <ul className="ulperso">
          {items.length > 0 &&
            items.map((el, index) => (
              /* <button onClick={() => this.delete(index)} key={index}>
                {el.title}
              </button> */
              <div className="five taskrectangle">
                <img
                  src="../../assets/images/Profile_pic.png"
                  alt="profilepicture"
                  className="profilpic"
                />
                <p className="task" classkey={index}>
                  {el.title}
                </p>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

export default List;

// const ConnectedList = ({ items }) => (
//   <ul>
//     {items.map(el => (
//       <button key={el.id}>
//         {el.title}
//       </button>
//     ))}
//   </ul>
// );

// const List = connect(mapStateToProps)(ConnectedList);

// export default List;

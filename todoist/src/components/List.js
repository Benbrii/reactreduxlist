import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/index";
import Profile_pic from "../assets/images/Profile_pic.png";

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }

  delete(index) {
    this.props.deleteItem(index);
  }

  render() {
    const { items } = this.props;
    console.log(items);

    return (
      <div className="rightpanel">
        <ul className="ulperso">
          {items.length > 0 &&
            items.map((item, index) => (
              /* <button onClick={() => this.delete(index)} key={index}>
                {el.title}
              </button> */
              <div className="five taskrectangle">
                <img
                  src={Profile_pic}
                  alt="profilepicture"
                  className="profilpic"
                  key={item}
                />
                <p className="task" classkey={index}>
                  {item.title}
                </p>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.task.items };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: index => dispatch(actionTypes.deleteItem(index))
  };
};

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

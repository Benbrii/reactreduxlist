import React, { Component } from "react";
import { connect } from "react-redux";
import { setIdActive } from "../actions/idactive.action";
import Form from "../components/Form";
// import * as actionTypes from "../actions/index";
import Profile_pic from "../assets/images/Profile_pic.png";

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  delete(index) {
    this.props.deleteItem(index);
  }

  render() {
    const { items, setIdActive, idActive } = this.props;

    return (
      <div className="five">
        <Form />
        <div className="ulcontainer">
          <ul className="ulperso">
            {items.length > 0 &&
              items.map((item, index) => (
                /* <button onClick={() => this.delete(index)} key={index}>
                {el.title}
              </button> */
                <div
                  className="taskrectangle"
                  tabIndex="1"
                  key={index}
                  onClick={() => setIdActive(index)}
                >
                  <img
                    src={Profile_pic}
                    alt="profilepicture"
                    className="profilpic"
                    key={item}
                  />
                  <p className="task" classkey={index}>
                    {item.title}
                  </p>
                  {idActive !== null &&
                  idActive !== undefined &&
                  items.length !== 0 &&
                  items[index].startdate !== undefined ? (
                    <p className="position_of_date_in_list">
                      {items[index].startdate}
                    </p>
                  ) : null}
                  {/* {item.startDateFromModal !== null ? (
                  <p className="date" classkey={index}>
                    {item.startDateFromModal}
                  </p>
                ) : null} */}
                </div>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.task.items,
    idActive: state.task.idActive,
    itemsCompleted: state.task.itemsCompleted
  };
  /* return {
    items: items.filter((item => item === itemsCompleted ))
  }*/
};

const mapDispatchToProps = dispatch => {
  return {
    setIdActive: idActive => dispatch(setIdActive(idActive))
    // deleteItem: index => dispatch(actionTypes.deleteItem(index))
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

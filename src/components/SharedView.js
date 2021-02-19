import React from 'react';
import NewKegForm from  './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import * as a from "./../actions"
// import EditKegForm from './EditKegForm';

class SharedView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // visibleView: 0,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
  }

  listClick = () => {
    const { dispatch } = this.props;
    if(this.state.selectedKeg != null){
      const action = a.viewToggle(1)
      dispatch(action);
      this.setState({
        selectedKeg: null,
      });
    } else {
      const action = a.viewToggle(1)
      dispatch(action);
    }
  }

  newKegClick = () => {
    const { dispatch } = this.props;
    if(this.state.selectedKeg != null){
      const action = a.viewToggle(2)
      dispatch(action);
      this.setstate ({
        selectedKeg: null,
      });
    } else {
      const action = a.viewToggle(2)
      dispatch(action);
      this.setState({
      });
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    const { dispatch } = this.props;
    const action = a.viewToggle(1)
    dispatch(action);
    this.setState({masterKegList: newMasterKegList,
                    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleRestock = () => {
    const quantityOfKeg = this.state.selectedKeg.quantity;
    const restockedKeg = {...this.state.selectedKeg, quantity: (quantityOfKeg + 124)};
    const newMasterList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(restockedKeg);
    this.setState({selectedKeg: restockedKeg, masterKegList: newMasterList});
  }

  handleBuy = () => {
    const quantityOfKeg = this.state.selectedKeg.quantity;
    const restockedKeg = {...this.state.selectedKeg, quantity: (quantityOfKeg -1)};
    const newMasterList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(restockedKeg);
    this.setState({selectedKeg: restockedKeg, masterKegList: newMasterList});
  }

  render(){
    let currentlyVisibleState = null;
    // if (this.state.editing) {
    //   currentlyVisibleState = <EditKegForm keg = {this.selectedKeg}/>
    //   buttonText = "Return to Ticket List";
    if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onRestock = {this.handleRestock} onBuy = {this.handleBuy} OnClickingEdit = {this.handleEditClick}/>
    } else if (this.props.visibleView === 0) {
      currentlyVisibleState = null;
    } else if (this.props.visibleView === 1) {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} onKegSelection = {this.handleChangingSelectedKeg}/>
    } else if (this.props.visibleView === 2) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
    }

    return (
      <>
        <button onClick = {this.listClick}> List of Kegs </button>
        <button onClick = {this.newKegClick}> Create new Item </button>
        {currentlyVisibleState}
      </>
    );
  }
}

SharedView.propTypes = {
  visibleView: PropTypes.number,
  masterKegList: PropTypes.object,
  selectedKeg: null,
  editing: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    visibleView: state.visibleView,
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
    editing: PropTypes.editing
  }
}

SharedView = connect(mapStateToProps)(SharedView);

export default SharedView;
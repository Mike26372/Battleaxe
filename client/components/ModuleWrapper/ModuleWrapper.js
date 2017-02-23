import React from 'react';
import firebaseApp from '../../base';
import styles from './ModuleWrapper.css';
import moduleList from '../../data/moduleList';
const database = firebaseApp.database();

class ModuleWrapper extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {collapsed: false}
    this.handleCollapse = this.handleCollapse.bind(this);
  }


  handleDelete() {
    let db_key = this.props.db_key;
    let user = this.props.user.uid;

    this.props.deleteModule(db_key, user);
  }

  handleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    let type = this.props.type;
    let collapsed = this.state;
    let handleCollapseFunction = this.handleCollapse;
    let component = moduleList[type];
    // let deleteButton = `${styles.delete} delete`;
    let deleteButton = `${styles.delete} icon fa fa-times-circle`;
    let wrapperStyle = `${styles.wrapper}`;

    return (
      <div className={wrapperStyle}>
          <i className={deleteButton} onClick={this.handleDelete} aria-hidden="true"></i>
        {React.createElement(component, {...this.props, collapsed, handleCollapseFunction})}
      </div>
    )
  }
}

export default ModuleWrapper;
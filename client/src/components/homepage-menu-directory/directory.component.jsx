import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { displayDirectory } from "../../reducers/directory/directory.selector";

const Directory = ({directory}) =>  {
 
    return (
      <div className="directory-menu">
        {directory.map(({id, ...restSection }) => (
          <MenuItem {...restSection} key={id} />
        ))}
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  directory: displayDirectory
})

export default connect(mapStateToProps)(Directory);

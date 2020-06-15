import React from "react";
import "./directory.scss";
import Menuitem from "../menu-item/Menu-item";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directorySelector";


export const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <Menuitem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections:selectDirectorySections(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);

import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const TableToolbar = ({ region }) => {
  return (
    <Toolbar>
      <div>
        <Typography variant="h6" id="tableTitle">
          {region}
        </Typography>
      </div>
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  region: PropTypes.string.isRequired,
};

export default TableToolbar;

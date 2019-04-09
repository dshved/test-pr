import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {
    padding: "20px",
  },
  paper: {
    margin: 0,
  },
  paperScrollPaper: {
    maxHeight: "100%",
    height: "450px",
  },
};

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

class SimpleDialog extends Component {
  static propTypes = {
    detail: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { detail, onClose, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} {...other}>
        <DialogTitle onClose={this.handleClose}>SELECTED COUNTRY</DialogTitle>
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                label="Name"
                defaultValue={detail.name}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                label="alpha2Code"
                defaultValue={detail.alpha2Code}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                label="Capital"
                defaultValue={detail.capital}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                label="Region"
                defaultValue={detail.region}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                label="Population"
                defaultValue={detail.population}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                label="Area"
                defaultValue={detail.area}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                label="Number of timezones"
                defaultValue={detail.timezones ? detail.timezones.length : 1}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth={true}
                label="List of languages spoken"
                defaultValue={
                  detail.languages ? detail.languages.join(", ") : ""
                }
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(SimpleDialog);

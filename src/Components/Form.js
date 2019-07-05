import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Form = props => (
  <form onSubmit={props.changeOptionEvent}>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="standard-with-placeholder"
          name="searchWord"
          label="Search Here"
          placeholder="Placeholder"
          type="search"
          margin="normal"
          InputLabelProps={{
            required: true,
            color: "white",
            shrink: true
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth variant="contained" color="primary" type="submit">
          Search IT!
        </Button>
      </Grid>
    </Grid>
  </form>
);

export default Form;

import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Form = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="standard-with-placeholder"
          label="What news would you like to search?"
          placeholder="Placeholder"
          margin="normal"
        />
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth variant="contained" color="primary">
          Search IT!
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default Form;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const TabsMenu = props => {
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const [value, setValue] = React.useState(0);

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab onClick={props.changeTheImage} label="Boruto" />
        <Tab onClick={props.changeTheImage} label="Vancouver" />
        <Tab onClick={props.changeTheImage} label="Your search" />
        <Tab onClick={props.changeTheImage} label="React" />
        <Tab onClick={props.changeTheImage} label="Apple" />
      </Tabs>
    </Paper>
  );
};

export default TabsMenu;

import React from "react";

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
        <Tab onClick={props.changeBoruto} label="Mexico" />
        <Tab onClick={props.changeVancouver} label="Canada" />
        <Tab onClick={props.changeYourSearch} label="Your search" />
        <Tab onClick={props.changeReact} label="USA" />
        <Tab onClick={props.changeApple} label="BRAZIL" />
      </Tabs>
    </Paper>
  );
};

export default TabsMenu;

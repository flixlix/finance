import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Avatar } from "@mui/material";
// Grid
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//Select
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
//Avatar
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import DynamicTagAvatar from "../DynamicTagAvatar/DynamicTagAvatar";
import SimpleDialog from "./SimpleDialog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); //

export default function VerlaufTab() {
  //const
  const [isEditMode, setisEditMode] = useState(true); //wichtig
  const [name, setName] = useState("Shopping");
  const [amount, setAmount] = useState("10");
  const [array, setArray] = useState([]);

  let nextId = 0;

  //Select
  const [category, setCategory] = React.useState("OtherIcon");

  function handleEditModeClick() {
    //WICHTIG: Button für Page Switcher
    setisEditMode(!isEditMode);
    if (name != "") {
      setName("");
      setAmount("");
      setCategory("");
      array.unshift({
        id: nextId++,
        name: name,
        amount: amount,
        category: category,
      });
    }
  }

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Typography variant="h4" gutterBottom padding="30px">
        Money Tracker
      </Typography>
      {/* <Button
        variant="outlined"
        onClick={handleEditModeClick}
        color="primary"
        sx={{ flexDirection: "row" }}
      >
        <Avatar sx={{ bgcolor: "white", border: 1, borderColor: "lightgrey" }}>
          <AddOutlinedIcon color="primary" />
        </Avatar>
        <Typography variant="button" display="block" padding="5px" gutterBottom>
          Add Spending{" "}
        </Typography>
      </Button> */}
      {isEditMode ? (
        <div>
          <SimpleDialog
            amount={amount}
            setAmount={setAmount}
            name={name}
            setName={setName}
            category={category}
            setCategory={setCategory}
            onSendClick={handleEditModeClick}
          />
        </div>
      ) : (
        <div>
          <Typography variant="h6" gutterBottom>
            Transaction
          </Typography>
          <Box>
            <Grid container spacing={3}>
              {array.map((neuesFeld) => (
                <Grid item xs={12} zeroMinWidth>
                  <Item
                    key={array.id}
                    elevation={2}
                    sx={{
                      bgcolor: "background.paper",
                      orientation: "vertical",
                    }}
                  >
                    <DynamicTagAvatar
                      tag={neuesFeld.category}
                      sx={{ display: "inline" }}
                    />
                    <ListItemText
                      primary={neuesFeld.name}
                      sx={{ display: "inline" }}
                    />
                    <ListItemText
                      secondary={neuesFeld.amount + "€"}
                      justify="flex-end"
                      sx={{ display: "inline" }}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* <Chart /> */}

          {/* <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
          </Alert> how to time this*/}
        </div>
      )}
    </div>
  );
}

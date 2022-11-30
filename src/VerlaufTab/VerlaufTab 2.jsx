import React from "react";
import { useState } from "react"; //Strg useState dann importiert es automatisch
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
// Grid
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

//Avatar
import ListItemText from "@mui/material/ListItemText";
import DynamicTagAvatar from "../DynamicTagAvatar/DynamicTagAvatar";
import Chart from "./Chart";

//Select
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { flexbox } from "@mui/system";

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

  const handleChange = (event) => {
    setCategory(event.target.value);
  }; //Select

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

      <Button
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
      </Button>
      {isEditMode ? (
        <div>
          <Box>
            <Grid container spacing={3} padding="20px">
              <Grid item xs={12} zeroMinWidth>
                <TextField
                  id="outlined-number-required"
                  label="Enter the Amount"
                  // size="small"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} zeroMinWidth>
                <TextField
                  required
                  id="outlined-required"
                  label="Notes"
                  defaultValue="Miete"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              {/* Kategorie */}
              <Grid item xs={12} zeroMinWidth>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem
                      value={"FoodIcon"}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      Food
                    </MenuItem>
                    <MenuItem
                      value={"ClothesIcon"}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      Clothes
                    </MenuItem>
                    <MenuItem
                      value={"HousingIcon"}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      Housing
                    </MenuItem>
                    <MenuItem
                      value={"TransportationIcon"}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      Transportation
                    </MenuItem>
                    <MenuItem
                      value={"HealthIcon"}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      Health
                    </MenuItem>
                    <MenuItem
                      value={"EntertainmentIcon"}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      Entertainment
                    </MenuItem>
                    <MenuItem
                      value={"OtherIcon"}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      Other
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
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

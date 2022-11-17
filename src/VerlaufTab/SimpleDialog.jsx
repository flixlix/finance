// Grid
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
//Select
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";

const emails = ["username@gmail.com", "user02@gmail.com"];

export default function SimpleDialog(props) {
  //Select

  const {
    amount,
    setAmount,
    category,
    setCategory,
    name,
    setName,
    onSendClick,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onSendClick();
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
  }; //Select

  return (
    <div>
      <Button onClick={handleClickOpen}> Add Spending</Button>

      <Dialog onClose={handleClickOpen} open={open}>
        <DialogTitle>Add New Spending</DialogTitle>
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
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
          <Button onClick={handleClose}>Send</Button>
        </Box>
      </Dialog>
    </div>
  );
}

import { Avatar } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import CarIcon from "@mui/icons-material/DirectionsCarOutlined";
import EntertainmentIcon from "@mui/icons-material/NightlifeOutlined";
import FoodIcon from "@mui/icons-material/FastfoodOutlined";
import ClothesIcon from "@mui/icons-material/ShoppingCartOutlined";
import HealthIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import OtherIcon from "@mui/icons-material/MoreHoriz";
import { borders } from "@mui/system";

export default function DynamicTagAvatar({ tag }) {
  // render different icons for different tags
  const getIcon = (tag) => {
    switch (tag) {
      case "FoodIcon":
        return <FoodIcon color="secondary" />;
      case "ClothesIcon":
        return <ClothesIcon color="primary" />;
      case "HousingIcon":
        return <HomeIcon color="info" />;
      case "TransportationIcon":
        return <CarIcon color="success" />;
      case "HealthIcon":
        return <HealthIcon color="warning" />;
      case "EntertainmentIcon":
        return <EntertainmentIcon color="error" />;
      case "OtherIcon":
        return <OtherIcon color="error" />;
    }
  };

  // render Avatar with icon based on tag using getIcon
  return (
    <Avatar sx={{ bgcolor: "white", border: 1, borderColor: "lightgrey" }}>
      {" "}
      {getIcon(tag)}{" "}
    </Avatar>
  );
}

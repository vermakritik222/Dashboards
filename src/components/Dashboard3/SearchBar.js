import {
  MessageOutlined,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import "./sass/SearchBar.scss";

function SearchBar() {
  return (
    <div className="dashboard3__SearchBar">
      <section>
        <div>
          <FormControl
            fullWidth
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "5px",
            }}
          >
            <OutlinedInput
              fullWidth
              placeholder="Search"
              style={{ color: "white" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <Search style={{ color: "white" }} />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </section>
      <section>
        <div>
          <IconButton>
            <NotificationsOutlined
              fontSize="large"
              style={{ color: "white" }}
            />
          </IconButton>
        </div>

        <div>
          <IconButton style={{ color: "white" }}>
            <MessageOutlined fontSize="large" />
          </IconButton>
        </div>
      </section>
    </div>
  );
}

export default SearchBar;

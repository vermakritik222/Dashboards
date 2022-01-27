import {
  Button,
  ButtonGroup,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import "./sass/BuySell.scss";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function BuySell() {
  const [sell, setSell] = useState(false);
  const [crypto, setCrypto] = React.useState("");
  return (
    <div className="dashboard3__buySell">
      <header className="dashboard3__buySell__header">
        <ButtonGroup style={{ width: "100%" }}>
          <Button
            onClick={() => {
              setSell(false);
            }}
            style={
              sell
                ? { border: "none", background: "#282833" }
                : { border: "none" }
            }
          >
            buy
          </Button>
          <Button
            onClick={() => {
              setSell(true);
            }}
            style={
              sell
                ? { border: "none" }
                : { border: "none", background: "#282833" }
            }
          >
            sell
          </Button>
        </ButtonGroup>
      </header>
      <section>
        <div>
          <FormControl
            style={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "5px",
            }}
            fullWidth
          >
            <InputLabel
              style={{ color: "white" }}
              id="demo-simple-select-label"
            >
              Crypto
            </InputLabel>
            <Select
              style={{ color: "white" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={crypto}
              label="Age"
              onChange={(e) => {
                setCrypto(e.target.value);
                console.log(e.target.value);
              }}
            >
              <MenuItem value={"Bitcoin-btc"} selected>
                <div className="dashboard3__buySell__item">
                  <img src="/images/bitcoinIcon.png" alt="" />
                  <p>
                    Bitcoin <span> BTC</span>
                  </p>
                </div>
              </MenuItem>
              <MenuItem value={"Ethereum-eth"}>
                {" "}
                <div className="dashboard3__buySell__item">
                  <img src="/images/ethereum_image.png" alt="" />
                  <p>
                    ethereum <span> eTh</span>
                  </p>
                </div>
              </MenuItem>
              <MenuItem value={"Litecoin -ltc"}>
                {" "}
                <div className="dashboard3__buySell__item">
                  <img
                    src="/images/Litecoin-Crypto-Logo-PNG-Clipart.png"
                    alt=""
                  />
                  <p>
                    Litecoin <span> lTC</span>
                  </p>
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </div>

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
              placeholder="Amount"
              style={{ color: "white" }}
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <span style={{ color: "white" }}>USD</span>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <AttachMoneyIcon style={{ color: "white" }} />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

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
              placeholder="Amount"
              style={{ color: "white" }}
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <span style={{ color: "white", textTransform: "uppercase" }}>
                    {crypto.split("-")[1]}
                  </span>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <Button
            fullWidth
            variant="contained"
            style={{
              fontSize: "1.2rem",
              padding: "15px",
            }}
          >
            {sell ? "sell" : "buy"} {crypto.split("-")[1]}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default BuySell;

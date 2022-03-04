import React from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useProducts } from "../../contexts/ProductContext";
import { FormControl, Grid, Paper } from "@mui/material";
import "./Genre.css";

const Genre = () => {
  const { fetchByParams } = useProducts();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid>
        <Paper>
          <FormControl>
            <div className="container_genre">
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ color: "#150050" }}
                onClick={handleClick}
              >
                Genre
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <div className="genre">
                  <Button
                    sx={{ bgcolor: "#150050" }}
                    value="adventures"
                    onClick={(e) => fetchByParams("genre", e.target.value)}
                  >
                    Adventures
                  </Button>
                  <Button
                    value="detective"
                    onClick={(e) => fetchByParams("genre", e.target.value)}
                  >
                    Detective
                  </Button>
                  <Button
                    value="fiction"
                    onClick={(e) => fetchByParams("genre", e.target.value)}
                  >
                    Fiction
                  </Button>
                  <Button
                    value="novel"
                    onClick={(e) => fetchByParams("genre", e.target.value)}
                  >
                    Novel
                  </Button>
                  <Button
                    value="humor"
                    onClick={(e) => fetchByParams("genre", e.target.value)}
                  >
                    Humor
                  </Button>
                  <Button
                    value="all"
                    onClick={(e) => fetchByParams("genre", e.target.value)}
                  >
                    all
                  </Button>
                </div>
              </Menu>
            </div>
          </FormControl>
        </Paper>
      </Grid>
    </div>
  );
};

export default Genre;

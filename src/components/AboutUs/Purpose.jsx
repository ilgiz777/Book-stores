import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Purpose.css";

export default function Purpoze() {
  return (
    <div>
      <header className="purpoze">
        <div className="purpoze-header3">
          <div className="purpoze-img">
            <h1 className="thema3">Purpose & Values</h1>
          </div>
        </div>
      </header>
      <div className="cardpurpose">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://www.betterworldbooks.com/content/images/corevalues/cv1.png"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Customer Focus
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are driven to provide customers with a highly-valued
              experience, and one that allows them to align their actions with
              their values. We want to be their favorite marketplace and their
              favorite partner, so we incorporate their input into everything we
              do.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://www.betterworldbooks.com/content/images/corevalues/cv2.png"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              People Matter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We seek out talented people who work hard and invest in them. We
              respect each individual, reward achievement, and celebrate team
              success.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://www.betterworldbooks.com/content/images/corevalues/cv5.png"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Passion for Literacy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are committed to the cause of literacy. Every person should
              have the chance to achieve their potential and participate fully
              in society.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </div>
      <div className="cardpurpose2">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://www.betterworldbooks.com/content/images/corevalues/cv3.png"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Do The Right Thing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are driven to provide customers with a highly-valued
              experience, and one that allows them to align their actions with
              their values. We want to be their favorite marketplace and their
              favorite partner, so we incorporate their input into everything we
              do.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="220"
            image=" https://www.betterworldbooks.com/content/images/corevalues/cv4.png"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Foster Innovation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We seek out talented people who work hard and invest in them. We
              respect each individual, reward achievement, and celebrate team
              success.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="220"
            image="https://www.betterworldbooks.com/content/images/corevalues/cv6.png"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              People, Planet, Profit
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are committed to the cause of literacy. Every person should
              have the chance to achieve their potential and participate fully
              in society.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button>
            <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

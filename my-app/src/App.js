import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import ListItemText from '@material-ui/core/ListItemText';
import Grow from '@material-ui/core/Grow';
import StickyFooter from './Footer';
import { Tabs, Tab, Divider } from '@material-ui/core';
import LocationOn from '@material-ui/icons/LocationOn';
import ViewModule from '@material-ui/icons/ViewModule';
import Today from '@material-ui/icons/Today';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
const myStyle = {
  root: {
    //background: 'linear-gradient(to right top, #6db4e8, #5aa6da, #4698cc, #2e8abe, #047cb0)'

  },
  textTitle: {
    width: "95%",
  },
  textField: {
    width: "95%",
    height: "70%"
  },
  title: {
    flexGrow: 1,
    fontFamily: "cursive"
  },
  menuButton: {
    marginLeft: "2px"
  },
  rootSearch: {
    padding: '2px 4px',
    marginRight: "10px",
    display: 'flex',
    alignItems: 'center',
    width: 230,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  card: {
    margin: "20px",
    width: "90%",
    height: "4cm"
  },
  cardPost: {
    margin: "20px",
    width: "90%",
    height: "8cm"

  },
  cardFeed: {
    marginLeft: "1%",
    marginRight: "2%",
    marginTop: "5%",
    width: "28%",
    float: "left",
    height: "15%"

  },
  cardFeeds: {

    height: "80%"

  },
  media: {
    height: 140,
  },
  bigAvatar: {
    marginTop: "30%",
    marginLeft: "10%",
    width: "70%",
    height: "auto",
  },
  appBar: {
    position: 'relative',
  }
};
class App extends React.Component {

  state = {
    leftdrawer: false,
    value: "All",
    open: false
  }

  color = () => {
    if (this.state.value === "All") {
      return "default"


    } else if (this.state.value === "Community") {
      return "primary"
    } else if (this.state.value === "City") {
      return "secondary"
    } else {
      return "default"

    }
  }
  drawerControl = () => {

    if (this.state.leftdrawer) {
      this.setState({
        leftdrawer: false
      })
    } else {
      this.setState({
        leftdrawer: true
      })
    }


  }


  changeTab = (event, newValue) => {
    this.setState({
      value: newValue
    })
  }
  mainBody = () => {

  }
  handleClose = () => {
    if (this.state.open)
      this.setState({ open: false })
    else
      this.setState({ open: true })
  }
  render() {
    const { classes } = this.props;
    console.log(classes);

    return (
      <React.Fragment>
        <Dialog fullScreen open={this.state.open} onClose={this.handleClose} >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>

              <Button color="inherit" onClick={this.handleClose}>
                close
            </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem >
              <ListItem >
                <ListItemText primary="i need to walk so far to try to catch up a bus (not enough stops in Bankstown" secondary="Joey" />
              </ListItem>
            </ListItem>
            <Divider />
            <ListItem >
              <ListItem >
                <ListItemText primary="Build more bus stops!!#NSW Transport" secondary="Cristian" />
              </ListItem>
            </ListItem>
            <Divider />
            <ListItem >
              <ListItem >
                <ListItemText primary="Build more bus stops!!#NSW Transport" secondary="Cristian" />
              </ListItem>
            </ListItem>
            <Divider />
            <ListItem >
              <ListItem >
                <ListItemText primary="Build more bus stops!!#NSW Transport" secondary="Cristian" />
              </ListItem>
            </ListItem>
            <Divider />
            <ListItem >
              <ListItem >
                <ListItemText primary="Build more bus stops!!#NSW Transport" secondary="Cristian" />
              </ListItem>
            </ListItem>
            <Divider />
            <ListItem >
              <ListItem >
                <ListItemText primary="Build more bus stops!!#NSW Transport" secondary="Cristian" />
              </ListItem>
            </ListItem>
            <Divider />
            <ListItem >


              <label style={{ fontFamily: "Arial", marginLeft: "10px" }}>Vote</label>
              <IconButton>
                <LocationOn></LocationOn>
              </IconButton>
              <label style={{ fontFamily: "Arial", marginLeft: "10px" }}>Donate</label>
              <IconButton>
                <ViewModule></ViewModule>
              </IconButton>
              <label style={{ fontFamily: "Arial", marginLeft: "10px" }}># @</label>
              <IconButton>
                <Today></Today>
              </IconButton>

              <TextField
                id="outlined-multiline-flexible"
                label="I can help!"
                multiline
                rowsMax="5"

                rows="5"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </ListItem>

          </List>
        </Dialog>
        <AppBar position="static" color={this.color()}>
          <Toolbar>
            <IconButton onClick={this.drawerControl} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              What's Around
            </Typography>

            <Tabs
              indicatorColor={this.color()}
              textColor="primary"
              value={this.state.value}
              onChange={this.changeTab}
              variant="fullWidth">
              <Tab label="All" value="All" />
              <Tab label="My followings" value="My followings" />
              <Tab label="My Community" value="Community" />
              <Tab label="My City" value="City" />

            </Tabs>

            <Paper className={classes.rootSearch}>
              <InputBase
                className={classes.input}
                placeholder="Whats on your mind?"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Toolbar>
        </AppBar >
        <Grid container >
          <Grid item lg={3}>
            <Grow in>
              <CardActionArea className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("./education.jpg")}
                  title="Contemplative Reptile"
                />

              </CardActionArea>
            </Grow>

            <Grow in>
              <CardActionArea className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("./Health.jpg")}
                  title="Contemplative Reptile"
                />

              </CardActionArea>
            </Grow>

            <Grow in>
              <CardActionArea className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("./Waste.jpg")}
                  title="Contemplative Reptile"
                />

              </CardActionArea>
            </Grow>

            <Grow in>
              <CardActionArea className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("./pollution.jpg")}
                  title="Contemplative Reptile"
                />

              </CardActionArea>
            </Grow>

            <Grow in>
              <CardActionArea className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("./Transport.jpg")}
                  title="Contemplative Reptile"
                />

              </CardActionArea>
            </Grow>

            <Grow in>
              <CardActionArea className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={require("./others.jpg")}
                  title="Others"
                />

              </CardActionArea>
            </Grow>

          </Grid>
          <Grid item lg={9}>
            <Paper className={classes.cardPost}>
              <Grid container >
                <Grid item lg={2}>
                  <Avatar alt="Remy Sharp" src={require("./3.jpg")} className={classes.bigAvatar} />
                </Grid>
                <Grid item lg={10}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    className={classes.textTitle}
                    margin="normal"
                    variant="outlined"
                  />
                  <div>
                    <label style={{ fontFamily: "Arial", marginLeft: "10px" }}>Location</label>
                    <IconButton>
                      <LocationOn></LocationOn>
                    </IconButton>
                    <label style={{ fontFamily: "Arial", marginLeft: "10px" }}>Catagory</label>
                    <IconButton>
                      <ViewModule></ViewModule>
                    </IconButton>
                    <label style={{ fontFamily: "Arial", marginLeft: "10px" }}>Date</label>
                    <IconButton>
                      <Today></Today>
                    </IconButton>
                  </div>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="What's Around today?"
                    multiline
                    rowsMax="5"

                    rows="5"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />

                </Grid>

              </Grid>
            </Paper>
            <Card className={classes.cardFeed}>
              <CardActionArea className={classes.cardFeeds} onClick={this.handleClose}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./hole.jpeg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Pothole on my street not fixed in months
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    #issues #Revesby
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow up
                </Button>
                <Button size="small" color="primary">
                  Help
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardFeed}>
              <CardActionArea className={classes.cardFeeds} onClick={this.handleClose}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./bus.jpg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    i need to walk so far to try to catch up a bus (not enough stops in Bankstown

                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    #issue #Transport #Bankstown

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow up
                </Button>
                <Button size="small" color="primary">
                  Help
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardFeed}>
              <CardActionArea className={classes.cardFeeds} onClick={this.handleClose}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./sydney.jpg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Experts warn on the effects of climate change to coastal cities
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    #news #Sydney

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow up
                </Button>

                <Button size="small" color="primary">
                  Help
                </Button>
              </CardActions>
            </Card>

            <Card className={classes.cardFeed}>
              <CardActionArea className={classes.cardFeeds}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./rubbish.jpeg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Garbage piling up in my neighbours side of the street’
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    #issues #Padstow

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow up
                </Button>
                <Button size="small" color="primary">
                  Help
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardFeed}>
              <CardActionArea className={classes.cardFeeds}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./sudan.jpg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Need more books and clothes for a primary school in Sudan
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    #issues #international #donation

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow up
                </Button>

                <Button size="small" color="primary">
                  Help
                </Button>
              </CardActions>
            </Card>


            <Card className={classes.cardFeed}>
              <CardActionArea className={classes.cardFeeds}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./brothe.jpg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Kidney for my brother
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    #issues #healh

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow up
                </Button>
                <Button size="small" color="primary">
                  Help
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.cardFeed}>
              <CardActionArea className={classes.cardFeeds}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./mexico.jpg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    My sons school is doesn’t have enough textbooks for all students (underprivileged school)
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    #issue # #education #Mexico

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow up
                </Button>

                <Button size="small" color="primary">
                  Help
                </Button>
              </CardActions>
            </Card>


            <Card className={classes.cardFeed}>
              <CardActionArea className={classes.cardFeeds}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={require("./pollutiopn.jpeg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    air pollution in Beijing, China
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    #issues #international #Beijing

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Follow up
                </Button>
                <Button size="small" color="primary">
                  Help
                </Button>
              </CardActions>
            </Card>

          </Grid>

        </Grid>


        <Drawer open={this.state.leftdrawer}>
          <div
            role="presentation"
          >
            <IconButton onClick={this.drawerControl} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <List>
              {['My issues', 'Resolved', 'New solutions', 'My followups'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

          </div>
        </Drawer>
        <StickyFooter></StickyFooter>
      </React.Fragment >
    );
  }

}


export default withStyles(myStyle)(App);

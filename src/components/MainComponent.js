import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    const DishPage =()=>{  return(      <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
);

    }
    return (
      <div>

        <Header />
        <Switch>
        <Route exac path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
        <Route path="/home" component={HomePage} />
        <Route path="/dish" component={DishPage} />
          <Redirect to="/home" />
        
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import Menu from './menu';
import Footer from './footer';
import Header from './header';
import Form from './form';
import Weather from './weather';

const test = 'Walla';

class App extends Component {
	state = {
		city: undefined
	}

	getWeather = async e => {
		e.preventDefault();

		const city = e.target.elements.city.value
		const country = e.target.elements.country.value

		const API_KEY = '0ea76d59a043260036d37b66d82dee6b';
		const weather_url = 'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0ea76d59a043260036d37b66d82dee6b';
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
		const data = await api_call.json();

		console.log(data)

		this.setState({
			city: data.name
		})
	}

    render() {
        return (
           <div>
	      	<Menu test={test} />
	      	<Header />
	      	<Form getWeather={this.getWeather} />
	      	<Weather  city={this.state.city}/>
	      	<Footer />
	      </div>
        );
    }
}

export default App;
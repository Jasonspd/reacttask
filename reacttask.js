import React, { Component } from 'react';

const weatherReport = [
  {city: 'London', temperature: 15, type: 'cloudy'},
	{city: 'Madrid', temperature: 25, type: 'sunny'}
];

const customers = [
	{names: {first: 'Frank', last: 'Peters'}},
  {names: {first: 'Nicole', last: 'Angels'}}
];

//{items} is data, but the arrays are structured differently
//[itemComponent] is used to distiguish between the two

//Need some sort of logic to define structure?
class WeatherReport extends Component {
	render: function() {

		var WeatherItem = 0;

		return (
			<div>
				<h1> Weather </h1>
				<Dropdown itemComponent={WeatherItem} items={weatherReport} />
			</div>
			);
	}
}

class Customers extends Component {
	render() {

		var CustomerItem = 1;

		return (
			<div>
				<h1> Customers </h1>
				<Dropdown itemComponent={CustomerItem} items={customers} />
			</div>
			);
	}
}

class Dropdown extends Component {
	render() {

		console.log(this.props.itemComponent);
		console.log(this.props.items);

		//if this.props.itemComponent == 0, map an array of objects
		//Problem - I need to know how many keys there are in the object? And I need to know the type to pick the correct image e.g. cloudy


		//if this.props.itemComponent == 1, map an array of objects with a nested object
		//Customers TODO - map the array of customers? for in loop to get values?
		//Push them into a new array and display them on the page?
		var obj = customers[0];

		for (var key in obj.names) {
		    console.log("Key: " + key);
		    console.log("Value: " + obj.names[key]);
		}
		

		//Hard code testing
		var weather = weatherReport.map(function(w){

			  return <div className="weather">{w.city} | {w.temperature} | {w.type}</div>;
		});

		return (
			<div>
				{weather}
			</div>
		);
	}
}

class MainApp extends Component {
	render: function() {
		return (
			<div>
				<Weather />
				<Customers />
			</div>
			);
	}
}

ReactDOM.render(
  <Mainapp />,
  document.getElementById('content')
);

//Summary: 
// -I found this task quite difficult difficult. My lack of knowledge of map, reduce and array sorting.
// -Theres more half written code and TODOs than real working code!
// -I've also not written any logic for set state for the selection, onChange events for dropdown
// -Pictures of weather would be just matching the strings with images?
// -Random background colour, would be looping through 6 digits adding # then 0123456789ABCDEF.split('') with Math.floor(Math.random())

// npm module react-dropdown has a similar solution but I didn't have time to understand it within 90mins
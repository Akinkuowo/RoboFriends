import React from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList'
import Scroll from  '../components/Scroll';
import './app.css';

 class App extends React.Component{
 	constructor(){
 		super()
 		this.state = {
 		   robots: [],
 		   searchfield: ''
 		}
 		
 	}

 componentDidMount(){
 	fetch('http://jsonplaceholder.typicode.com/users')
 	.then(response => response.json())
 	.then(users => this.setState({ robots: users }));
 }


 	onSearchChange = (event) => {
 		this.setState({ searchfield: event.target.value })
 		
 	}

	render() {
		const {robots, searchfield} = this.state;
		const robotsFiltter = robots.filter(robots => {
 			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
 		})
 		if(!robots.length){
 			return <h1 className="tc">Loading</h1>
 		}else{
 			return (
				<div className='tc'> 
					<h1 className="tc f1">Robo Freinds</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={robotsFiltter} />
					</Scroll>
				
				</div>
			);
 		}
	}	
}

export default App;
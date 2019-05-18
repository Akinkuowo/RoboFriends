import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList'
import Scroll from  '../components/Scroll';
import './app.css';
import { setSearchField } from '../action';

const mapStateToProps = state => {
	return{
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends React.Component{
 	constructor(){
 		super()
 		this.state = {
 		   robots: []
 		}
 		
 	}

 	componentDidMount(){
	 	fetch('http://jsonplaceholder.typicode.com/users')
	 	.then(response => response.json())
	 	.then(users => this.setState({ robots: users }));
 	}

	render() {
		const {robots} = this.state;
		const {searchField, onSearchChange} = this.props;
		const robotsFiltter = robots.filter(robots => {
 			return robots.name.toLowerCase().includes(searchField.toLowerCase());
 		})
 		if(!robots.length){
 			return <h1 className="tc">Loading</h1>
 		}else{
 			return (
				<div className='tc'> 
					<h1 className="tc f1">Robo Freinds</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<CardList robots={robotsFiltter} />
					</Scroll>
				
				</div>
			);
 		}
	}	
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
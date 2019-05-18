import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList'
import Scroll from  '../components/Scroll';
import './app.css';
import { setSearchField, requestRobots } from '../action';

const mapStateToProps = state => {
	return{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		pending: state.requestRobots.pending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends React.Component{

 	componentDidMount(){
	 	this.props.onRequestRobots();
 	}

	render() {
		const {searchField, onSearchChange, robots, pending} = this.props;
		const robotsFiltter = robots.filter(robots => {
 			return robots.name.toLowerCase().includes(searchField.toLowerCase());
 		})
 		if(pending){
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
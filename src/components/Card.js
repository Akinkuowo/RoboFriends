import React from 'react';



const Card = ({name, email, id})=> {
	
	return(
		<div className=" tc bg-light-green pa10 ma3 br3 bw2 dib grow shadow-5 ">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="robot friends" />
			<div> 
				<h2>{ name }</h2>
				<p> { email }</p>
			</div>

		</div>

		);
}



export default Card;


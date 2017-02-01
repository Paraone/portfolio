import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<header className="App-header">
				<ul className="list-inline container">
					<li className="btn">About Me</li>
					<li className="btn">Work
					</li>
					<li className="btn">Contact</li>
				</ul>
			</header>
		)
	}
}

export default Header
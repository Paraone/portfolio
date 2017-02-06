import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component{
	render(){
		return(
			<header className="App-header">
				<ul className="list-inline container">
					<li className="btn"><Link to="/">About Me</Link></li>
					<li className="btn"><Link to="/work">Work</Link></li>
					<li className="btn"><Link to="/contact">Contact</Link></li>
				</ul>
			</header>
		)
	}
}

export default Header
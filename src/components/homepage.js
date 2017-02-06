import React, {Component} from 'react';
import image from '../imgs/profile.jpg';

class HomePage extends Component{
	render(){
		return(
			<div className="contents container">
			  <div className="profilepic"><img src={image} alt="Marcos Wade" /></div>
			  <div className="profiletext">
				  Nothing motivates me more that coding. I love to make things work. 
				  I do so by writing logical clean code using modern web development frameworks. 
				  I build full-stack web applications.
			  </div>
			</div>
		);
	}
}

export default HomePage;
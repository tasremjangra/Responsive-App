import React, {Component} from 'react';

class Component_Card extends Component{
	render(){
		return(
			<div className="ChildCard">
				<div className="Gallery">
	  				<a target="_blank" href="">
						<img src='http://michaelkors.scene7.com/is/image/MichaelKors/CF82E6C5PB-0029_IS?$categoryMediumNew$' alt="Office Supplies" width="600" height="400"></img>
					</a>
					<div className="Desc">
						<a href="#"><h3 className="Fontsize">MICHAEL KORS MENS</h3></a><br/>
						<a href="#"><p className="Text7">Sherpa-Lined Twill Trucker Jacket</p></a>
						<a href="#"><p className="Text7">42000</p></a>	
					</div>
				</div>
			</div>
		);
	}
}

export default Component_Card;
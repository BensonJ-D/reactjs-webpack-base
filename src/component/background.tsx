import React from "react";

export default class Background extends React.Component {
	render() {
		return (
			<div id="my-background" className="background">
				<div className="top-container flex">
					<h1>
						Random webpage.
					</h1>
					<button
						className={"work-button"}
						data-wow-offset="0">
						View my work
					</button>
				</div>
			</div>
		);
	}
}


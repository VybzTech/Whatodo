import React, { Component } from "react";

class ErrorPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			err: false,
		};
	}

	static getDerivedStateFromError(err) {
		return {
			err: true,
		};
	}

	render() {
		if (this.state.err) {
			return (
				<h1
					style={{
						margin: "30vh auto",
						width: "fit-content",
						textTransform: "uppercase",
					}}
				>
					Loading Has Failed
				</h1>
			);
		}

		return this.props.children;
	}
}

export default ErrorPage;

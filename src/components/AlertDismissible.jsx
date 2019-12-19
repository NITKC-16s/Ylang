function AlertDismissible() {

	if (show) {
		return (
			 <Alert variant="{this.props.variant}" onClose={() => setShow(false)} dismissible>
				<p>
					{this.props.text}
				</p>
			</Alert>
		);
	}
}

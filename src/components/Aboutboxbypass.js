import React from 'react';
import atomize from "@quarkly/atomize";

const Aboutboxbypass = props => <div {...props}>
	Say hello Aboutboxbypass
</div>;

export default atomize(Aboutboxbypass)({
	name: "Aboutboxbypass",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Aboutboxbypass — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});
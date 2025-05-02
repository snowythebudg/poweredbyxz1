import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"text-align": "center",
	"background-color": "--primary",
	"color": "--light",
	"padding": "80px 0",
	"sm-padding": "40px 0",
	"background": "#000000"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h5",
			"font": "--lead",
			"margin": "10px 0 0 0",
			"text-transform": "uppercase",
			"letter-spacing": "5px",
			"color": "#ff2800",
			"children": "Services offered"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "10px 0 0 0",
			"children": "Our services"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "40px 0 20px 0",
			"children": "Interested in partnering with XZ1, here's a list of all the free (and paid) services you can get once you get a successful application with us."
		}
	}
};

const Aboutboxbypass = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		{children}
	</Section>;
};

Object.assign(Aboutboxbypass, { ...Section,
	defaultProps,
	overrides
});
export default Aboutboxbypass;
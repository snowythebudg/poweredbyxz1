import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Footer0501 from "./Footer0501";
const defaultProps = {};
const overrides = {};

const Footer05012 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer0501 {...rest}>
		<Override slot="link2" href="mailto:poweredby@xz1recordings.ca" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" />
		<Override slot="text" font="normal 500 18px/1.2 --fontFamily-googleMichroma" />
		<Override slot="link" font="normal 400 16px/20px --fontFamily-googleMichroma" />
		<Override slot="link1" font="normal 400 16px/20px --fontFamily-googleMichroma" width="200px">
			OUR SERVICES
		</Override>
		{children}
	</Footer0501>;
};

Object.assign(Footer05012, { ...Footer0501,
	defaultProps,
	overrides
});
export default Footer05012;
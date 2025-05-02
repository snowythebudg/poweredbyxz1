import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Header0501 from "./Header0501";
const defaultProps = {};
const overrides = {};

const Header05012 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Header0501 {...rest}>
		<Override
			slot="text"
			font="normal 300 18px/1 --fontFamily-googleMichroma"
			text-align="left"
			display="block"
			width="200px"
		/>
		{children}
	</Header0501>;
};

Object.assign(Header05012, { ...Header0501,
	defaultProps,
	overrides
});
export default Header05012;
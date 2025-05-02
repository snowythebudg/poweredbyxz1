import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Image, Text, LinkBox, Box, Link, Section } from "@quarkly/widgets";
const defaultProps = {
	"sm-padding": "8px 0 8px 0",
	"quarkly-title": "Header-6",
	"padding": "24px 0px 24px 0px",
	"background": "#000000"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "center",
			"align-items": "flex-start",
			"flex-direction": "row",
			"width": "20%",
			"sm-width": "50%",
			"sm-align-items": "center",
			"sm-flex-direction": "row",
			"sm-justify-content": "flex-start",
			"md-width": "50%",
			"lg-width": "20%",
			"md-justify-content": "flex-start",
			"md-order": "-1"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"flex-direction": "row",
			"href": "/index",
			"display": "flex",
			"grid-gap": "12px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/PWRDXZ1.png?v=2025-05-01T23:57:03.232Z",
			"display": "block",
			"width": "36px",
			"height": "36px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 0px 0",
			"text-align": "left",
			"font": "--lead",
			"sm-margin": "0px 0 0px 0",
			"display": "block",
			"color": "#ffffff",
			"children": <>
				Powered by XZ1{" "}
			</>
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "flex-end",
			"align-items": "flex-start",
			"flex-direction": "row",
			"width": "40%",
			"sm-width": "50%",
			"sm-align-items": "center",
			"sm-flex-direction": "row",
			"sm-justify-content": "flex-start",
			"md-width": "50%",
			"lg-width": "40%",
			"md-justify-content": "flex-start",
			"md-display": "none"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"border-radius": "8px",
			"href": "/apply",
			"text-decoration-line": "initial",
			"border-style": "solid",
			"sm-padding": "5px 10px 5px 10px",
			"md-padding": "5px 10px 5px 10px",
			"sm-margin": "10px 0px 10px 0px",
			"font": "normal 300 16px/1.5 --fontFamily-googleRobotoCondensed",
			"color": "#ffffff",
			"margin": "0px 0px 0px 34px",
			"md-margin": "10px 0px 0px 0px",
			"border-width": "2px",
			"padding": "4px 12px 5px 12px",
			"border-color": "#ff0004",
			"children": "Apply"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"font": "--base",
			"text-decoration-line": "initial",
			"margin": "0px 0px 0px 16px",
			"background": "#ff0004",
			"border-radius": "8px",
			"md-margin": "0px 0px 0px 14px",
			"href": "/services",
			"color": "#ffffff",
			"padding": "6px 12px 7px 12px",
			"md-order": "1",
			"children": "Our Services"
		}
	}
};

const Header0501 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			flex-direction="row"
			justify-content="space-between"
			max-width="100%"
			width="100%"
			padding="0px 24px 0px 24px"
		/>
		<Box {...override("box")}>
			<LinkBox {...override("linkBox")}>
				<Image {...override("image")} />
				<Text {...override("text")} />
			</LinkBox>
		</Box>
		<Box {...override("box1")}>
			<Link {...override("link")} />
			<Link {...override("link1")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Header0501, { ...Section,
	defaultProps,
	overrides
});
export default Header0501;
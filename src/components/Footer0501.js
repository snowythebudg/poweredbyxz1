import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, LinkBox, Link, Box, Icon, Text, Section } from "@quarkly/widgets";
import { FiInstagram } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";
const defaultProps = {
	"padding": "80px 0 30px 0",
	"background": "#000000",
	"quarkly-title": "Footer-16"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"margin": "0px 0px 50px 0px",
			"md-margin": "0px 0px 45px 0px",
			"lg-flex-direction": "column"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"width": "20%",
			"lg-margin": "0px 0px 35px 0px",
			"lg-width": "100%",
			"href": "#"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/POWERED%20BY%20XZ1.png?v=2025-05-01T23:52:37.822Z",
			"display": "block",
			"align-self": "flex-start",
			"width": "200px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"width": "80%",
			"lg-width": "100%",
			"justify-content": "flex-end",
			"align-items": "center",
			"sm-flex-direction": "column",
			"sm-align-items": "flex-start",
			"md-flex-direction": "column",
			"md-align-items": "flex-start",
			"md-display": "flex",
			"md-grid-gap": "24px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"align-items": "flex-start",
			"margin": "0px 50px 0px 10px",
			"lg-align-items": "flex-start",
			"justify-content": "center",
			"display": "grid",
			"flex-direction": "row",
			"flex-wrap": "wrap",
			"md-justify-content": "flex-start",
			"sm-margin": "0px 0 30px 0",
			"grid-template-columns": "repeat(5, 1fr)",
			"grid-gap": "8px 0",
			"sm-grid-template-columns": "1fr",
			"md-display": "flex",
			"md-grid-gap": "16px",
			"md-margin": "0px 50px 0px 0px"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"border-color": "--color-primary",
			"display": "flex",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"margin": "0px 0 0px 0",
			"lg-border-width": "0px 0px 0px 2px",
			"href": "/apply",
			"text-decoration-line": "initial",
			"color": "#ff0000",
			"hover-color": "--light",
			"letter-spacing": "1px",
			"md-margin": "0px 0 0px 0",
			"children": "APPLY"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"margin": "0px 0 0px 0",
			"display": "flex",
			"href": "/services",
			"font": "normal 400 16px/24px --fontFamily-googleRoboto",
			"text-decoration-line": "initial",
			"color": "#ff0009",
			"hover-color": "--light",
			"letter-spacing": "1px",
			"md-margin": "0px 0 0px 0",
			"children": "OUR SERVICES"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"grid-template-columns": "repeat(5, 1fr)",
			"grid-gap": "16px 24px",
			"md-align-self": "flex-start",
			"justify-items": "start",
			"justify-content": "center",
			"lg-justify-content": "flex-end"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"href": "https://instagram.com/xz1recventures"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fi",
			"icon": FiInstagram,
			"size": "24px",
			"color": "#ff0000",
			"hover-color": "--lightD2",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox2": {
		"kind": "LinkBox",
		"props": {
			"href": "https://xz1recordings.ca"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "go",
			"icon": GoGlobe,
			"size": "24px",
			"color": "#ff0000",
			"hover-color": "--lightD2",
			"transition": "background-color 1s ease 0s"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"md-flex-direction": "column",
			"md-align-items": "flex-start",
			"justify-content": "space-between",
			"padding": "30px 0px 0px 0px",
			"border-width": "1px 0 0 0",
			"border-style": "solid",
			"border-color": "#2c3339",
			"lg-flex-direction": "column",
			"align-items": "flex-start"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"lg-margin": "0px 0px 20px 0px",
			"sm-flex-direction": "column"
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"margin": "0px 50px 0px 0px",
			"display": "flex",
			"flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 25px 0px",
			"font": "normal 500 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ff001e",
			"md-margin": "0px 0px 20px 0px",
			"letter-spacing": "1px",
			"children": "CONTACTS"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "mailto:info@yourdomain.com",
			"color": "#ff0000",
			"text-decoration-line": "initial",
			"font": "normal 300 16px/1.5 --fontFamily-sans",
			"display": "inline-block",
			"margin": "0px 0px 15px 0px",
			"text-align": "center",
			"hover-color": "white",
			"children": "poweredby@xz1recordings.ca"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "tel:+9877654321223",
			"color": "#c3c8d0",
			"text-decoration-line": "initial",
			"font": "normal 300 16px/1.5 --fontFamily-sans",
			"display": "inline-block",
			"text-align": "center",
			"margin": "0px 0px 5px 0px",
			"hover-color": "white"
		}
	},
	"box7": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"md-align-self": "stretch",
			"sm-flex-direction": "column"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "#ff0004",
			"md-margin": "0px 0px 0 0px",
			"md-width": "100%",
			"margin": "0 30px 0 0px",
			"children": <>
				© 2025 Powered by XZ1, a division of XZ1 Recording Ventures{" "}
			</>
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"padding": "0 0 0 0",
			"margin": "0px 0 0px 0",
			"lg-margin": "0px 6px 0px 0px",
			"display": "block",
			"href": "#",
			"font": "--base",
			"text-decoration-line": "initial",
			"color": "#c3c8d0",
			"hover-color": "white",
			"sm-padding": "0 0 15px 0",
			"md-white-space": "nowrap",
			"sm-order": "-1"
		}
	}
};

const Footer0501 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<LinkBox {...override("linkBox")}>
				<Image {...override("image")} />
			</LinkBox>
			<Box {...override("box1")}>
				<Box {...override("box2")}>
					<Link {...override("link")} />
					<Link {...override("link1")} />
				</Box>
				<Box {...override("box3")}>
					<LinkBox {...override("linkBox1")}>
						<Icon {...override("icon")} />
					</LinkBox>
					<LinkBox {...override("linkBox2")}>
						<Icon {...override("icon1")} />
					</LinkBox>
				</Box>
			</Box>
		</Box>
		<Box {...override("box4")}>
			<Box {...override("box5")}>
				<Box {...override("box6")}>
					<Text {...override("text")} />
					<Link {...override("link2")} />
					<Link {...override("link3")} />
				</Box>
			</Box>
		</Box>
		<Box {...override("box7")}>
			<Text {...override("text1")} />
			<Link {...override("link4")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer0501, { ...Section,
	defaultProps,
	overrides
});
export default Footer0501;
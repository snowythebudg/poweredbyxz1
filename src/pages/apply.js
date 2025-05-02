import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"apply"} />
		<Helmet>
			<title>
				Powered by XZ1 - Where Visionary Labels Meet Innovative Structure
			</title>
			<meta name={"description"} content={"Powered by XZ1 is a label partnership program built for emerging music entrepreneurs ready to take the next step. With global distribution through The Orchard and exclusive access to the XZ1 Recordings ecosystem, partners receive branding support, strategic guidance, and resources tailored for growth. Where visionary labels meet innovative structure. Powered by XZ1 is redefining what it means to be independent."} />
			<meta property={"og:title"} content={"Powered by XZ1 - Where Visionary Labels Meet Innovative Structure"} />
			<meta property={"og:description"} content={"Powered by XZ1 is a label partnership program built for emerging music entrepreneurs ready to take the next step. With global distribution through The Orchard and exclusive access to the XZ1 Recordings ecosystem, partners receive branding support, strategic guidance, and resources tailored for growth. Where visionary labels meet innovative structure. Powered by XZ1 is redefining what it means to be independent."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/POWERED%20BY%20XZ1.png?v=2025-05-01T23:52:37.822Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/PWRDXZ1.png?v=2025-05-01T23:57:03.232Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/PWRDXZ1.png?v=2025-05-01T23:57:03.232Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/PWRDXZ1.png?v=2025-05-01T23:57:03.232Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/PWRDXZ1.png?v=2025-05-01T23:57:03.232Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/PWRDXZ1.png?v=2025-05-01T23:57:03.232Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/68140255dc12f40020b49e6a/images/PWRDXZ1.png?v=2025-05-01T23:57:03.232Z"} />
		</Helmet>
		<Components.Header05012 />
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			background="#000000"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
				color="#ff0021"
			>
				APPLICATION PORTAL
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Apply to PWRDXZ1
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				We're always excited to onboard new labels! Feel free to send in an application and we'll review it and get back to you.
			</Text>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			background="rgb(0, 119, 204) url(https://images.unsplash.com/photo-1558419673-368b60ec0bc9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				How to apply to powered by xz1
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				How to apply
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				You're probably wondering how to apply. Simply send us an email at
				<Link href="mailto:poweredby@xz1recordings.ca?Powered by XZ1 label partnership inquiry" color="#ff0000">
					{" "}poweredby@xz1recordings.ca
				</Link>
				{" "}and you'll automatically get a questionnaire to fill out. After that, we'll reply back and tell you whether you're accepted or not (or we may ask for more information) and if you're accepted, you'll recieve a contract to sign and other stuff we need from you (label name for C lines, PayPal email for payments, etc)
			</Text>
		</Section>
		<Components.Footer05012 />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"68140255dc12f40020b49e68"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
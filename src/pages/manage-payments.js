import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"manage-payments"} />
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
		<Section padding="80px 0" sm-padding="40px 0" background="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ff0000"
			>
				Manage my Powered by XZ1 Payments
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				color="#ffffff"
			>
				To manage your subscriptions and/or mastering purchases. Click the button below to head to the XZ1 Payment Manager (powered by Stripe)
			</Text>
			<Button
				font="normal 300 20px/1.5 --fontFamily-googleMichroma"
				margin="20px"
				background="#ff0000"
				type="link"
				href="https://billing.stripe.com/p/login/aFa3cw74O4B9bK22tTa7C00"
			>
				To XZ1 Payment Manager
			</Button>
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
import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Components.Header0501>
			<Override slot="text" font="normal 300 20px/1.5 --fontFamily-googleRobotoCondensed" />
		</Components.Header0501>
		<Components.Aboutboxbypass>
			<Override slot="text">
				IMPORTANT ANNOUNCEMENT
			</Override>
			<Override slot="text1">
				This site is WIP
			</Override>
			<Override slot="text2">
				Hello! This XZ1 service is brand new, so is this website. We just wanted to let you know that this site is work in progress. Our full list of services is not on the site yet and the application form isn't up and running just yet (it is there, you just can't submit)
			</Override>
		</Components.Aboutboxbypass>
		<Section padding="100px 0 0 0" background="#000000 url(https://images.unsplash.com/photo-1650954316166-c3361fefcc87?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000)" quarkly-title="Hero-17" transition="background-color 0.2s ease 0s">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				justify-content="space-around"
				lg-flex-direction="column"
				flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					lg-width="100%"
					display="flex"
					flex-direction="column"
					lg-padding="0px 0 0px 0px"
					lg-margin="0px 0px 50px 0px"
					margin="0px 0px 80px 0px"
					align-items="center"
				>
					<Text
						margin="0px 0px 20px 0px"
						font="normal 400 64px/1.2 --fontFamily-googleMichroma"
						sm-font="normal 700 42px/1.2 --fontFamily-sans"
						padding="0px 250px 0px 250px"
						text-align="center"
						lg-padding="0px 0 0px 0"
						color="#ffffff"
					>
						Kickstart your record label
					</Text>
					<Text
						margin="0px 0px 50px 0px"
						font="--lead"
						color="#ffffff"
						text-align="center"
						padding="0px 250px 0px 250px"
						lg-padding="0px 0 0px 0"
						lg-margin="0px 0px 30px 0px"
					>
						Powered by XZ1's partner program helps new and existing labels focus on their marketing and surface-level operations while having a trusted team to power the backend operations. We offer exclusive distribution through The Orchard and access to all XZ1 Recordings web portals and services (Release submission, Artist Central, Creative Audio Industries, XZ1 MUSIC PUBLISHING). Click "Our services" on the navbar to see what we offer and then head to the Apply page to send in an application! (NOTE: We offer more services, we can elaborate on them if you send us an email. You can find our email below)
					</Text>
				</Box>
			</Box>
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
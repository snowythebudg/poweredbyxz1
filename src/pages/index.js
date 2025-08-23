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
		<Components.Header05012 />
		<Section padding="100px 0 0 0" background="#000000 url(https://images.unsplash.com/photo-1650954316166-c3361fefcc87?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000)" quarkly-title="Hero-17" transition="all 2s ease-in 0s">
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
						Powered by XZ1's partner program helps new and existing labels focus on their marketing and surface-level operations while having a trusted team to power the backend operations. We offer exclusive distribution and access to all XZ1 Recordings web portals and services (XZ1 RS (Release Submission) portal, Artist Central, and Creative Audio Industries). Click "Our services" on the navbar to see what we offer and then head to the Apply page to learn how to apply!
					</Text>
				</Box>
			</Box>
		</Section>
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
			>
				important announcement
			</Text>
			<Text as="h1" font="--headline2" md-font="--headline2" margin="10px 0 0 0">
				Powered by XZ1 is being merged into Route 83 Catalog Management
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Powered by XZ1 is being merged into Route 83 Catalog Management. Powered by XZ1 will remain open but all releases will be shown as Route 83 Catalog Management on streaming services as opposed to "Your label name/Powered by XZ1 (XZ1 Recordings). Instead, you'll see "Route 83 Catalog Management (on behalf of Your label name)". Powered by XZ1 will continue to operate as normal, just with that change + the ability to use your own C lines with no Powered by XZ1 branding attached. Usually it'd be "Your label name, distributed by Powered by XZ1, a division of XZ1 Recording Ventures"
			</Text>
		</Section>
		<Section padding="100px 0 100px 0" background="#000000" quarkly-title="FAQ-9">
			<Text margin="0px 0px 70px 0px" font="normal 600 42px/1.2 --fontFamily-googleMichroma" color="#ff0000" sm-margin="0px 0px 50px 0px">
				Frequently asked questions
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				grid-template-columns="1fr"
				grid-gap="50px 50px"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				sm-grid-gap="35px 0"
				flex-direction="column"
			>
				<Box
					min-width="10px"
					min-height="10px"
					display="flex"
					padding="25px 0px 0px 0px"
					border-width="1px 0 0 0"
					border-style="solid"
					border-color="--color-lightD2"
					md-flex-direction="column"
				>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 25px/1.2 --fontFamily-googleMichroma"
						color="#ff0000"
						width="40%"
						md-width="100%"
					>
						What's the royalty split?{" "}
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="normal 300 18px/1.5 --fontFamily-googleRobotoCondensed"
						color="#ffffff"
						width="60%"
						padding="0px 0px 0px 50px"
						md-width="100%"
						md-padding="0px 0px 0px 0"
					>
						The royalty split for all Powered by XZ1 partnered labels is 60/40, 60 goes to your label, 40 goes to us.
					</Text>
				</Box>
				<Box
					min-width="10px"
					min-height="10px"
					display="flex"
					padding="25px 0px 0px 0px"
					border-width="1px 0 0 0"
					border-style="solid"
					border-color="--color-lightD2"
					md-flex-direction="column"
				>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 25px/1.2 --fontFamily-googleMichroma"
						color="#ff0000"
						width="40%"
						md-width="100%"
					>
						Do I need to acknowledge that I'm partnered with Powered by XZ1?
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="normal 300 18px/1.5 --fontFamily-googleRobotoCondensed"
						color="#ffffff"
						width="60%"
						padding="0px 0px 0px 50px"
						md-width="100%"
						md-padding="0px 0px 0px 0"
					>
						Yes. You need to acknowledge that your label is partnered with us. You can ask us for more details or you'll automatically get them if you've sent an application and it's been accepted.
					</Text>
				</Box>
				<Box
					min-width="10px"
					min-height="10px"
					display="flex"
					padding="25px 0px 0px 0px"
					border-width="1px 0 0 0"
					border-style="solid"
					border-color="--color-lightD2"
					md-flex-direction="column"
				>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 25px/1.2 --fontFamily-googleMichroma"
						color="#ff0000"
						width="40%"
						md-width="100%"
					>
						Who do you distribute with?
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="normal 300 18px/1.5 --fontFamily-googleRobotoCondensed"
						color="#ffffff"
						width="60%"
						padding="0px 0px 0px 50px"
						md-width="100%"
						md-padding="0px 0px 0px 0"
					>
						Our main division (XZ1 Recordings) is currently partnered with KAMAPRO for distribution. You can submit releases by using the website provided to you when you get a successful application.
					</Text>
				</Box>
				<Box
					min-width="10px"
					min-height="10px"
					display="flex"
					padding="25px 0px 0px 0px"
					border-width="1px 0 0 0"
					border-style="solid"
					border-color="--color-lightD2"
					md-flex-direction="column"
				>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 25px/1.2 --fontFamily-googleMichroma"
						color="#ff0000"
						width="40%"
						md-width="100%"
					>
						How do I get paid out?
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="normal 300 18px/1.5 --fontFamily-googleRobotoCondensed"
						color="#ffffff"
						width="60%"
						padding="0px 0px 0px 50px"
						md-width="100%"
						md-padding="0px 0px 0px 0"
					>
						We pay out all labels through PayPal. If you do not have a PayPal account, we highly suggest you create one in order to get your royalties from your artists!
					</Text>
				</Box>
				<Box
					min-width="10px"
					min-height="10px"
					display="flex"
					padding="25px 0px 0px 0px"
					border-width="1px 0 0 0"
					border-style="solid"
					border-color="--color-lightD2"
					md-flex-direction="column"
				>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 25px/1.2 --fontFamily-googleMichroma"
						color="#ff0000"
						width="40%"
						md-width="100%"
					>
						Does Powered by XZ1 handle promotion for my label?
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="normal 300 18px/1.5 --fontFamily-googleRobotoCondensed"
						color="#ffffff"
						width="60%"
						padding="0px 0px 0px 50px"
						md-width="100%"
						md-padding="0px 0px 0px 0"
					>
						No. Powered by XZ1 and XZ1 Recordings are solely distribution and audio service focused labels.{" "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Components.Footer05012>
			<Override slot="text1">
				© 2025 Powered by XZ1, operating in cooperation with XZ1 Recording Ventures and Route 83 Catalog Management{" "}
			</Override>
		</Components.Footer05012>
		<Components.QuarklycommunityKitScrollIndicator color="#ff0000">
			<Override slot="Indicator" background="#ff0000" />
		</Components.QuarklycommunityKitScrollIndicator>
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
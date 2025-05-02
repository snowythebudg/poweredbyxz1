import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box, Icon, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { IoIosCheckmarkCircle } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"services"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header0501>
			<Override slot="text" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" />
		</Components.Header0501>
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
				color="#ff2800"
			>
				Services offered
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Our services
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Interested in partnering with XZ1, here's a list of all the free (and paid) services you can get once you get a successful application with us.
			</Text>
		</Section>
		<Section padding="0 0 0 0" quarkly-title="Content-6">
			<Override
				slot="SectionContent"
				lg-padding="0px 0 0px 0px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				width="100%"
				min-width="100%"
				lg-grid-template-columns="1fr"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1542966336-22953b5f7404?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 50% 50% /cover repeat scroll padding-box"
				lg-height="600px"
				md-height="500px"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				flex-direction="column"
				padding="80px 60px 80px 60px"
				sm-padding="50px 25px 80px 25px"
				background="#000000"
			>
				<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-sans" color="#ff0000">
					Distribution and accounting
				</Text>
				<Text margin="0px 0px 30px 0px" font="normal 600 42px/1.2 --fontFamily-sans" color="#ffffff">
					Exclusive distribution and easy accounting
				</Text>
				<Text margin="0px 0px 25px 0px" font="normal 300 22px/1.5 --fontFamily-sans" color="#ffffff">
					Powered by XZ1 provides exclusive distribution and easy accounting through PayPal for all partnered labels
				</Text>
				<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-sans" color="#ffffff">
					XZ1 Recordings and Powered by XZ1 are both powered by Sony's The Orchard music distribution. All partnered labels get global reach and their own spot on the XZ1 release submission portal located{" "}
					<Link
						color="#ff0000"
						href="https://rs.xz1recordings.ca"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						here
					</Link>
					. All partnered labels also get easy accounting through PayPal. We strive to send out payments to artists and partnered labels as soon as we can!
				</Text>
				<Box
					min-width="10px"
					min-height="10px"
					display="flex"
					font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
					margin="0px 0px 20px 0px"
				>
					<Icon
						category="io"
						icon={IoIosCheckmarkCircle}
						size="24px"
						color="#ff0000"
						margin="0px 10px 0px 0px"
						padding="5px 0px 0px 0px"
					/>
					<Text margin="0px 0px 0px 0px" font="300 16px/27px --fontFamily-sans" color="#ffffff">
						<Span
							font="400 18px/27px Frutiger, &quot;Frutiger Linotype&quot;, Univers, Calibri, &quot;Gill Sans&quot;, &quot;Gill Sans MT&quot;, &quot;Myriad Pro&quot;, Myriad, &quot;DejaVu Sans Condensed&quot;, &quot;Liberation Sans&quot;, &quot;Nimbus Sans L&quot;, Tahoma, Geneva, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Exclusive distribution: All partnered labels get exclusive distribution by XZ1 and our partner, KAMAPRO. KAMAPRO has a deal with The Orchard which gives all XZ1 clients and XZ1 partnered labels access to global music distribution
						</Span>
					</Text>
				</Box>
				<Box
					min-width="10px"
					min-height="10px"
					display="flex"
					font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
					margin="0px 0px 20px 0px"
				>
					<Icon
						category="io"
						icon={IoIosCheckmarkCircle}
						size="24px"
						color="#ff0000"
						margin="0px 10px 0px 0px"
						padding="5px 0px 0px 0px"
					/>
					<Text margin="0px 0px 0px 0px" font="300 16px/27px --fontFamily-sans" color="#ffffff">
						<Span
							font="400 18px/27px Frutiger, &quot;Frutiger Linotype&quot;, Univers, Calibri, &quot;Gill Sans&quot;, &quot;Gill Sans MT&quot;, &quot;Myriad Pro&quot;, Myriad, &quot;DejaVu Sans Condensed&quot;, &quot;Liberation Sans&quot;, &quot;Nimbus Sans L&quot;, Tahoma, Geneva, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Easy accounting: Powered by XZ1 provides easy accounting to all partnered labels, we handle all the splits for you (although you have to split money to your artists by yourself) and we strive to pay out as quick as we can through PayPal.
						</Span>
					</Text>
				</Box>
				<Box
					min-width="10px"
					min-height="10px"
					display="flex"
					font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
					margin="0px 0px 35px 0px"
				>
					<Icon
						category="io"
						icon={IoIosCheckmarkCircle}
						size="24px"
						color="#ff0000"
						margin="0px 10px 0px 0px"
						padding="5px 0px 0px 0px"
					/>
					<Text margin="0px 0px 0px 0px" font="300 16px/27px --fontFamily-sans" color="#ffffff">
						<Span
							font="400 18px/27px Frutiger, &quot;Frutiger Linotype&quot;, Univers, Calibri, &quot;Gill Sans&quot;, &quot;Gill Sans MT&quot;, &quot;Myriad Pro&quot;, Myriad, &quot;DejaVu Sans Condensed&quot;, &quot;Liberation Sans&quot;, &quot;Nimbus Sans L&quot;, Tahoma, Geneva, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Portal access: Powered by XZ1 clients get their own spot on the XZ1 RS (Release Submission) Portal (link above). We will forward all the submissions to your email on file.
						</Span>
					</Text>
				</Box>
			</Box>
		</Section>
		<Components.Footer0501 />
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
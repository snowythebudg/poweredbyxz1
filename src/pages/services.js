import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Icon, Span, Section, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { IoIosCheckmarkCircle, IoIosCheckmark } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"services"} />
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
		<Components.Aboutboxbypass />
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
				<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-googleRobotoCondensed" color="#ff0000">
					Distribution and accounting
				</Text>
				<Text margin="0px 0px 30px 0px" font="normal 600 42px/1.2 --fontFamily-googleMichroma" color="#ffffff">
					Exclusive distribution and easy accounting
				</Text>
				<Text margin="0px 0px 25px 0px" font="normal 300 22px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
					Powered by XZ1 provides exclusive distribution and easy accounting through PayPal for all partnered labels
				</Text>
				<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
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
					<Text margin="0px 0px 0px 0px" font="300 16px/27px --fontFamily-googleRobotoCondensed" color="#ffffff">
						<Span
							font="400 18px/27px --fontFamily-googleRobotoCondensed"
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
							font="400 18px/27px --fontFamily-googleRobotoCondensed"
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
							font="400 18px/27px --fontFamily-googleRobotoCondensed"
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
		<Section
			padding="120px 0 120px 0"
			lg-margin="0 0 0 0"
			lg-padding="80px 0 80px 0"
			quarkly-title="Price-11"
			background="#000000"
		>
			<Override slot="SectionContent" border-width="0px" />
			<Text
				margin="0px 0px 20px 0px"
				font="normal 600 46px/1.2 --fontFamily-googleMichroma"
				text-align="center"
				md-margin="0px 0px 50px 0px"
				width="700p"
				align-self="center"
				color="#ffffff"
				sm-margin="0px 0px 30px 0px"
			>
				Custom XZ1 email
			</Text>
			<Text
				margin="0px 0px 70px 0px"
				text-align="center"
				font="normal 300 20px/1.5 --fontFamily-googleRobotoCondensed"
				width="700px"
				align-self="center"
				md-width="100%"
				color="#ffffff"
				md-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
			>
				Along with your label partnership, you can also get a custom @xz1recordings.ca email with your label name and dashboard access. Your email account will also work with Gmail or other email providers.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				lg-margin="0px 0 0px 0"
				md-flex-direction="column"
				lg-flex-direction="column"
				border-color="#ffffff"
				border-radius="25px"
				padding="10px 10px 10px 0px"
				lg-padding="10px 10px 10px 10px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 80px 30px 30px"
					border-color="#dadbe2"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="2"
					width="70%"
					lg-width="100%"
					lg-padding="30px 30px 30px 30px"
					font="normal 300 20px/1.5 --fontFamily-sansHelvetica"
					md-border-width="1px"
					md-align-items="stretch"
					margin="0 0px 0px 0px"
					lg-margin="0 0px 0 0px"
					lg-border-radius="25px"
					justify-content="center"
					sm-padding="10px 10px 10px 10px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						margin="0px 0px 35px 0px"
					>
						<Text
							margin="0px 0px 15px 0px"
							font="normal 600 25px/1.5 --fontFamily-googleRobotoCondensed"
							color="#ff0000"
							lg-margin="0px 0px 20px 0px"
							sm-margin="0px 0px 10px 0px"
						>
							Custom @xz1recordings.ca partner label email
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 17px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
							You can get your very own professional @xz1recordings.ca email with your own label name or any name of your choosing.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="grid"
							grid-template-columns="repeat(2, 1fr)"
							sm-grid-template-columns="1fr"
						>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#ff0000"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-googleRobotoCondensed" color="#ffffff">
									Email forwarding
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#ff0000"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-googleRobotoCondensed" color="#ffffff">
									Professional for potential artists
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#ff0000"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-googleRobotoCondensed" color="#ffffff">
									Able to connect to Gmail
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#ff0000"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-googleRobotoCondensed" color="#ffffff">
									Your choice of a name
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 60px 30px 60px"
					border-color="#dadbe2"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="1"
					lg-width="100%"
					lg-align-items="stretch"
					md-align-items="stretch"
					sm-padding="30px 15px 30px 15px"
					justify-content="center"
					lg-border-radius="25px"
					background="#000000"
					width="40%"
					border-radius="25px"
					lg-order="-1"
					lg-margin="0px 0px 40px 0px"
					md-margin="0px 0px 30px 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						margin="0px 0px 0 0px"
					>
						<Text margin="0px 0px 15px 0px" font="normal 300 20px/1.5 --fontFamily-googleRobotoCondensed" color="#ff0000" text-align="center">
							Custom email
						</Text>
						<Text margin="0px 0px 20px 0px" font="normal 400 17px/1.5 --fontFamily-googleMichroma" color="#80868a" text-align="center">
							<Span
								font="normal 700 46px/1.2 --fontFamily-sans"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								color="#ff0000"
							>
								$19.99
							</Span>
							CAD
						</Text>
					</Box>
					<Button
						background="#ff0000"
						color="#ffffff"
						border-color="#ff0000"
						border-radius="4px"
						font="normal 400 17px/1.5 --fontFamily-googleMichroma"
						margin="0px 0px 20px 0px"
						type="link"
						text-align="center"
						href="https://paypal.me/mintybudgie"
					>
						Purchase
					</Button>
					<Text margin="0px 0px 15px 0px" font="normal 300 17px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff" text-align="center">
						Your very own custom @xz1recordings.ca email. This is a one time purchase. After your purchase, you'll recieve an email asking what prefix you want and we'll create your email and send you provider setup instructions.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="120px 0 120px 0"
			lg-margin="0 0 0 0"
			lg-padding="80px 0 80px 0"
			quarkly-title="Price-11"
			background="#000000"
		>
			<Override slot="SectionContent" border-width="0px" />
			<Text
				margin="0px 0px 20px 0px"
				font="normal 600 46px/1.2 --fontFamily-googleMichroma"
				text-align="center"
				md-margin="0px 0px 50px 0px"
				width="700p"
				align-self="center"
				color="#ffffff"
				sm-margin="0px 0px 30px 0px"
			>
				Custom XZ1 subdomain
			</Text>
			<Text
				margin="0px 0px 70px 0px"
				text-align="center"
				font="normal 300 20px/1.5 --fontFamily-googleRobotoCondensed"
				width="700px"
				align-self="center"
				md-width="100%"
				color="#ffffff"
				md-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
			>
				Along with your label partnership, you can also get a custom xz1recordings.ca subdomain with your label name. We can handle DNS installation on your behalf with a purchase of an XZ1 subdomain.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				lg-margin="0px 0 0px 0"
				md-flex-direction="column"
				lg-flex-direction="column"
				border-color="#ffffff"
				border-radius="25px"
				padding="10px 10px 10px 0px"
				lg-padding="10px 10px 10px 10px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 80px 30px 30px"
					border-color="#dadbe2"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="2"
					width="70%"
					lg-width="100%"
					lg-padding="30px 30px 30px 30px"
					font="normal 300 20px/1.5 --fontFamily-sansHelvetica"
					md-border-width="1px"
					md-align-items="stretch"
					margin="0 0px 0px 0px"
					lg-margin="0 0px 0 0px"
					lg-border-radius="25px"
					justify-content="center"
					sm-padding="10px 10px 10px 10px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						margin="0px 0px 35px 0px"
					>
						<Text
							margin="0px 0px 15px 0px"
							font="normal 600 25px/1.5 --fontFamily-googleRobotoCondensed"
							color="#ff0000"
							lg-margin="0px 0px 20px 0px"
							sm-margin="0px 0px 10px 0px"
						>
							Custom @xz1recordings.ca partner label subdomain
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 17px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
							You can get your very own professional xz1recordings.ca subdomain with your own label name or any name of your choosing.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="grid"
							grid-template-columns="repeat(2, 1fr)"
							sm-grid-template-columns="1fr"
						>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#ff0000"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-googleRobotoCondensed" color="#ffffff">
									Indexing by Google
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#ff0000"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-googleRobotoCondensed" color="#ffffff">
									More professional on search engines, likely to drag in more clients
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#ff0000"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-googleRobotoCondensed" color="#ffffff">
									Better visibility on search engines
								</Text>
							</Box>
							<Box min-width="10px" min-height="10px" display="flex" align-items="center">
								<Icon
									category="io"
									icon={IoIosCheckmark}
									size="32px"
									color="#ff0000"
									margin="0px 8px 0px 0px"
								/>
								<Text margin="0px 0px 0px 0px" font="normal 300 17px/1.2 --fontFamily-googleRobotoCondensed" color="#ffffff">
									Your choice of a name
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 60px 30px 60px"
					border-color="#dadbe2"
					display="flex"
					flex-direction="column"
					position="relative"
					z-index="1"
					lg-width="100%"
					lg-align-items="stretch"
					md-align-items="stretch"
					sm-padding="30px 15px 30px 15px"
					justify-content="center"
					lg-border-radius="25px"
					background="#000000"
					width="40%"
					border-radius="25px"
					lg-order="-1"
					lg-margin="0px 0px 40px 0px"
					md-margin="0px 0px 30px 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						flex-direction="column"
						margin="0px 0px 0 0px"
					>
						<Text margin="0px 0px 15px 0px" font="normal 300 20px/1.5 --fontFamily-googleRobotoCondensed" color="#ff0000" text-align="center">
							Custom subdomain
						</Text>
						<Text margin="0px 0px 20px 0px" font="normal 400 17px/1.5 --fontFamily-googleMichroma" color="#80868a" text-align="center">
							<Span
								font="normal 700 46px/1.2 --fontFamily-sans"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								color="#ff0000"
							>
								$14.99
							</Span>
							CAD
						</Text>
					</Box>
					<Button
						background="#ff0000"
						color="#ffffff"
						border-color="#ff0000"
						border-radius="4px"
						font="normal 400 17px/1.5 --fontFamily-googleMichroma"
						margin="0px 0px 20px 0px"
						type="link"
						text-align="center"
						href="https://paypal.me/mintybudgie"
					>
						Purchase
					</Button>
					<Text margin="0px 0px 15px 0px" font="normal 300 17px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff" text-align="center">
						Your very own custom xz1recordings.ca subdomain. This is a one time purchase. After your purchase, you'll recieve an email asking what prefix you want and we'll create your subdomain and ask you about domain setup to get your site up and running under an XZ1 subdomain.
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
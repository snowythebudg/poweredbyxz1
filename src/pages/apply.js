import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Icon, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdEmail } from "react-icons/md";
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
		<Components.Header0501 />
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
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="--color-darkL2 url(https://images.unsplash.com/photo-1558419673-368b60ec0bc9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000)"
			quarkly-title="Form-1"
		>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box>
						<Box
							position="relative"
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
						>
							<Icon
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
								position="absolute"
								size="48px"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Email us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
									poweredby@xz1recordings.ca
								</Link>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%">
					<Box>
						<Box
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="#000000"
							max-width="360px"
						>
							<Text as="h3" font="--headline3" margin="0 0 20px 0">
								Apply to Powered by XZ1
							</Text>
							<Formspree endpoint="mkgrjgnn" completeText="Thanks for applying, we'll get back to you if we're interested in working with you or if we need more information!" errorMessage="Your application did not go through. Please re-submit, contact XZ1 Recordings, or try again later.">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Your name
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Label name
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Is this for a new label or an existing label?
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												What genre is your label specialized in (or planning to specialize in)
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Your email
											</Text>
											<Input max-width="400px" width="100%" type="email" name="email" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Message
											</Text>
											<Input width="100%" name="message" as="textarea" rows="4" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column" align-items="flex-start">
											<Button background="#ff0000">
												Send
											</Button>
										</Box>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
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
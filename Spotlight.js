import React from "react";
import Layout from "../Layout";

const speakers = [
	{
		name: "Viswanathan Anand",
		desig: "5-time world chess champion"
	},
	{
		name: "Dr. Venkatraman Ramakrishnan ",
		desig: "Nobel Laureate in Chemistry, 2009"
	},
	{
		name: "Dr. VijayRaghavan ",
		desig: "Principal Scientific Advisor, GoI"
	},
	{
		name: "Shri Justice (Retd) P. Sathasivam ",
		desig: "Governor of Kerela, Former CJI "
	},
	{
		name: "Peter Norvig ",
		desig: "Director of Research, Google"
	},
	{
		name: "Jaap Haartsen ",
		desig: "Inventor of Bluetooth"
	},
	{
		name: "Prashant Bhushan ",
		desig: " Renowned Indian Lawyer, Politician & Activist. "
	},
	{
		name: "Dr. V.K. Aatre",
		desig: "Former DRDO Head & Scientific Advisor to the Defense Minister"
	},
	{
		name: "Dr. John C. Mather ",
		desig: "Nobel Prize in Physics, 2006"
	},
	{
		name: "Harun Robert ",
		desig: "Popular TV Artist – MAD"
	}
];

const newSpeakers = [
	{
		name: "Dr V. K. Saraswat",
		info: "NITI Aayog Member, Former Director General of DRDO and Chief Scientific Adviser to Defense Minister, Padma Bhushan Awardee",
		talkTitle: "Defense Innovation through the years and what lies ahead",
		venue: "Central Lecture Theatre",
		date: "Jan 3, 10:00 AM",
		pic: "https://drive.google.com/drive/u/0/folders/1auTq-1J-X9fIfsr9P3ujSezRH3Ctj61n"
	},
	{
		name: "Lord Meghnad Desai",
		info: "Eminent Economist, Emeritus Professor at LSE, Padma Bhushan Awardee",
		talkTitle: "The before and after story of Brexit",
		venue: "Central Lecture Theatre",
		date: "Jan 3, 12:00 PM",
		pic: "https://drive.google.com/drive/u/0/folders/1v-sKZXN779iofYmjGdeKGxvFeUsdUe2q"
	},
	{
		name: "Dr A. S. Kiran Kumar",
		info: "Former Chairman of ISRO, Padma Shree Awardee",
		talkTitle: "Fireside Chat",
		venue: "Central Lecture Theatre",
		date: "Jan 3, 14:30 PM",
		pic: "https://drive.google.com/drive/u/0/folders/1hqbznIZXuFG4wYYfRix-jKGP4DK5zFE4"
	},
	{
		name: "Hon'ble Suresh Prabhu",
		info: "Prime Minister's Sherpa to G7 and G20, Former Union Minister of Commerce & Industry, Civil Aviation and Railways",
		talkTitle: "Changing global order of India",
		venue: "Central Lecture Theatre",
		date: "Jan 3, 16:30 PM",
		pic: "https://drive.google.com/drive/u/0/folders/1ls-yrkSBm4yhbqFK4Dvp57AxDxYfRgl3"
	},
	{
		name: "Dr. C. S. Seshadari",
		info: "Eminent Mathematician, Founder-Director Emeritus of Chennai Mathematical Institute, Padma Bhushan Awardee",
		talkTitle: "Moduli Problems",
		venue: "Central Lecture Theatre",
		date: "Jan 4, 14:00 PM",
		pic: "https://drive.google.com/drive/u/0/folders/1LJSgV1tRvp7RBYGx4S_FdAZixDT_2q6J"
	},
	{
		name: "Mr. Robin Li",
		info: "Eminent Computer Scientist, Founder of Baidu(China's most used search-engine) and a Billioner",
		talkTitle: "Innovation in the Age of AI",
		venue: "Central Lecture Theatre",
		date: "Jan 4, 16:00 PM",
		pic: "https://drive.google.com/open?id=1cjP0EKytNxyhi4wFYHWsvolQQb4zcRX_"
	},
	{
		name: "Dr. Stephen Wolfram",
		info: "Eminent Computer Scientist, Physicist and Mathemtaica and Wolfram Language Pioneer(Video Conference)",
		talkTitle: "Exploring the Computational Universe: Discoveries and Implications",
		venue: "Central Lecture Theatre",
		date: "Jan 5, 9:30 AM",
		pic: "https://company.wolfram.com/date//press-center/uploads/2017/06/StephenWolfram_mb177B-print.png"
	},
	{
		name: "Dr. C. Ragnarajan",
		info: "Eminent Economist, Former RBI Governor and MP, Padma Vibhushan Awardee, President of Indian Statistial Institute",
		talkTitle: "The $5 Trillion Goal, a Fireside Chat",
		venue: "Central Lecture Theatre",
		date: "Jan 5, 15:00 PM",
		pic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201212/rangarajan-3_660_122512083544.jpg"
	},
	{
		name: "Sir Colin Blakemore",
		info: "One of the World's most eminent neurobiologist, Former Chief Executive of the British Medical Research Council, Founding Member of the World Cultural Council",
		talkTitle: "The Past, Present and Future of Brain",
		venue: "Central Lecture Theatre",
		date: "Jan 6, 14:00 PM",
		pic: "https://drive.google.com/drive/u/0/folders/1u2bM2fuQ2JnpHyj3oeCSBg4xPsotbhPd"
	}
]

export default ({ location: { state } }) => (
	<div className="spotlight-container layout-container">
		<Layout animated={state && state.animated} />
		<div className="content content--reveal">
			<div className="content__inner">
				<div className="heading fixed-top bottom-padding">
					<h2
						className="link link--mallki content__title"
						style={{ fontSize: "0.8em", opacity: 0 }}
					>
						Spotlight
					</h2>
				</div>
				<div
					className="text-content margin-15"
					style={{ textAlign: "justify", opacity: 0 }}
				>
					<p>
						&nbsp;&nbsp;&nbsp;Spotlight Lecture Series brings distinguished
						personalities from across the globe to inspire the vibrant audience of
						Shaastra. Spanning science, technology, sports, entrepreneurship, politics,
						social service and art, Spotlight lectures provide a platform to interact
						with brilliant minds who have transformed the world in remarkable ways. Be
						there to be a part of this convergence of brilliance, love of knowledge and
						the very spirit of engineering that Shaastra embodies.
					</p>{" "}
					<h1 style={{ textAlign: "center" }}> This Year Speakers</h1>
					<div className="avatar-container">
						{newSpeakers.map((speaker, index) => (
							<div className="avatar-wrapper" key={index}>
								<div
									className="avatar"
									style={{
										// backgroundImage: `url(${require("../../assets/images/spotlight/" +
										// 	(index + 1) +
										// 	"." +
										// 	"png")})`,
										backgroundImage: `${speaker.pic}`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										backgroundPosition: "50% 50%"
									}}
								/>
								<div className="avatar-content">
									<h5>{speaker.name}</h5>
									<h6>{speaker.info}</h6>
									<p>{speaker.talkTitle}</p>
									<p>{speaker.venue}</p>
									<p>{speaker.date}</p>
								</div>
							</div>
						))}
					</div>
					<p style={{ textAlign: "center", fontWeight: "bold" }}>
						Stay tuned to find out the speakers of this year!!
					</p>
				</div>
			</div>
		</div>
	</div>
);

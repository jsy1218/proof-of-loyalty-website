import Link from "next/link";
import LayoutFront from "../components/layout/LayoutFront";
import TopCreatorFeesPaid from "../util/topcreatorfeespaid";
import IntroSlider from "../components/slider/IntroSlider";
import TopHoldingPeriod from "../util/topholdingperiod";
import Multiselect from "multiselect-react-dropdown";

const Index = () => {
	return (
		<LayoutFront pageClass="front">
			<div className="intro1 section-padding">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-xl-5">
							<div className="intro-content">
								<p>Proof of loyalty FOR</p>
								<h1>NFT Creators</h1>

								<div className="col-xl-12">
									<h4>Pre-selected collections</h4>
									<p>Loads faster if collections of the same brand (e.g. Azuki) are chosen together</p>
									<div className="intro-search">
										<form action="#">
											<Multiselect
												displayValue="key"
												groupBy="collection"
												placeholder="Click on any collections"
												onKeyPressFn={function noRefCheck(){}}
												onRemove={function noRefCheck(){}}
												onSearch={function noRefCheck(){}}
												onSelect={function noRefCheck(){}}
												options={[
													{
														collection: 'Azuki',
														key: 'PFP'
													},
													{
														collection: 'Azuki',
														key: 'BEANZ'
													},
													{
														cat: 'Group 1',
														key: 'Option 3'
													},
													{
													cat: 'Group 2',
													key: 'Option 4'
													},
													{
													cat: 'Group 2',
													key: 'Option 5'
													},
													{
													cat: 'Group 2',
													key: 'Option 6'
													},
													{
													cat: 'Group 2',
													key: 'Option 7'
													}
												]}
												showCheckbox
											/>
											<span>
												<i className="ri-search-line"></i>
											</span>
										</form>
									</div>
								</div>
								<div className="col-xl-12">
									<br></br> 
									<h4>Manually type in any contract address(es) (slower)</h4>
									<p>e.g. 0x6efc003d3f3658383f06185503340c2cf27a57b6;
										0x769272677fab02575e84945f03eca517acc544cc;
										0x39ee2c7b3cb80254225884ca001f57118c8f21b6</p>
									<div className="intro-search">
										<form action="#">
											<input
												type="text"
												placeholder="contract address(es) separated by ;"
											/>
											<span>
												<i className="ri-search-line"></i>
											</span>
										</form>
									</div>
								</div>

								<div className="intro-social">
									<Link href="#">
										<a>
											<i className="bi bi-facebook"></i>
										</a>
									</Link>
									<Link href="#">
										<a>
											<i className="bi bi-twitter"></i>
										</a>
									</Link>
									<Link href="#">
										<a>
											<i className="bi bi-tiktok"></i>
										</a>
									</Link>
									<Link href="#">
										<a>
											<i className="bi bi-telegram"></i>
										</a>
									</Link>
									<Link href="#">
										<a>
											<i className="bi bi-discord"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="intro-slider">
								<IntroSlider />
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="leaderboard section-padding">
				<div className="container">
					<div className="row">
						<div className="col-xl-6">
							<div className="section-title">
								<h2>Leaderboard</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6">
							<div className="section-title">
								<h3>Top creator fees paid Leaderboard</h3>
							</div>
						</div>
						<div className="col-xl-12">
							<TopCreatorFeesPaid/>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6">
							<div className="section-title">
								<h3>Top collectors by holding period Leaderboard</h3>
							</div>
						</div>
						<div className="col-xl-12">
							<TopHoldingPeriod/>
						</div>
					</div>
				</div>
			</div>
		</LayoutFront>
	);
};

export default Index;

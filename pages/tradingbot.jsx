import React from "react";

const depth = () => {
	return (
		<div className="w-full">
			<h2>Trading Bot with Market Forecasting</h2>
			<div className="flex gap-2">
				<div className="tag">seq2seq</div>
				<div className="tag">Web Scraping</div>
				<div className="tag">PyTorch</div>
				<div className="tag">HuggingFace</div>
				<div className="tag">PostgreSQL</div>
				<div className="tag">Python</div>
			</div>
			<p>
				I implemented a trading bot using a simple day trading strategy,
				augmented with data forecasted market data.
			</p>
			<p>
				To predict future market prices, I utilized a LSTM that incorporated
				both previous market prices and sentiment of popular news headlines.
				Historical market data was gathered from market API wrappers and
				headlines were scraped using the scrapy API. Data for realtime
				predictions were collected from websockets.
			</p>
			<p>Code will be pushed to Github soon!</p>
		</div>
	);
};

export default depth;

import React, { useEffect, useState } from 'react';

const Market = () => {
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const currency = 'inr';
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
                if (response.ok) {
                    const data = await response.json();
                    setMarketData(data);
                } else {
                    throw new Error('Failed to fetch market data');
                }
            } catch (error) {
                console.error('Error fetching market data:', error);
            }
        };

        fetchMarketData();
    }, []);

    return (
        <div className="gradient-bg-market">
            <div className="text-4xl text-center text-white mb-6">Market Details</div>
            <div className="flex justify-center items-center flex-wrap">
                {marketData.map((coin, index) => (
                    <div key={index} className="m-4 p-4 w-full md:w-1/2 lg:w-1/3">
                        <div className="bg-white rounded-3xl border shadow-xl p-8 flex flex-col justify-center items-center">
                            <div className="flex justify-between items-center mb-4 w-full">
                                <button className="inline-flex items-center justify-center w-14 h-14 text-blue-100 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full">
                                    <img src={coin.image} alt={coin.name} className="h-8 w-8" />
                                </button>
                                <div>
                                    <span className={`font-bold ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {coin.price_change_percentage_24h >= 0 ? `+ ${coin.price_change_percentage_24h.toFixed(2)}%` : `${coin.price_change_percentage_24h.toFixed(2)}%`}
                                    </span><br />
                                    <span className="font-medium text-xs text-gray-500 flex justify-end">{coin.total_volume.toFixed(2)} coin</span>
                                </div>
                            </div>
                            <div className="text-center mb-4">
                                <h3 className="font-semibold text-sm text-gray-400">{coin.symbol.toUpperCase()}</h3>
                                <h1 className="font-semibold text-xl text-gray-700">{coin.current_price.toFixed(2)} INR</h1>
                            </div>
                            <div className="text-center">
                                <h2 className="text-lg font-bold text-gray-800">{coin.name}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Market;

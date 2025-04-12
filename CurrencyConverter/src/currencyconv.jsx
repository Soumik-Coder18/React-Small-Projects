import React, { useEffect, useState } from 'react';
import profileimage from './assets/profile.png';
import { Github, Linkedin, Instagram, Facebook, RefreshCcw } from 'lucide-react';

const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);
  const [rate, setRate] = useState(null);

  // Fetch conversion rates and calculate result
  const fetchConversion = () => {
    fetch(API_URL + fromCurrency)
      .then((res) => res.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates)); // Populate dropdowns
        const conversionRate = data.rates[toCurrency];
        setRate(conversionRate);
        setConverted((amount * conversionRate).toFixed(2)); // Calculate result
      });
  };

  // Fetch conversion on from/to currency change
  useEffect(() => {
    fetchConversion();
  }, [fromCurrency, toCurrency]);

  // Swap the from and to currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen text-white flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-red-900">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover z-0">
        <source src="https://videos.pexels.com/video-files/3752548/3752548-sd_640_360_24fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0" />

      {/* Header */}
      <header className="z-10 w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.open('https://github.com/Soumik-Coder18', '_blank')}
        >
          <img
            src={profileimage}
            alt="Soumik Bag"
            className="w-9 h-9 rounded-full border border-red-600 shadow-md group-hover:scale-105 transition"
          />
          <h2 className="text-xl font-bold group-hover:underline group-hover:text-red-400 transition">Soumik Bag</h2>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Soumik-Coder18" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/soumik-bag-0b9900253/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Linkedin className="w-5 h-5" /></a>
          <a href="https://www.instagram.com/soumik_bag_18/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Instagram className="w-5 h-5" /></a>
          <a href="https://www.facebook.com/profile.php?id=100083845817568" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Facebook className="w-5 h-5" /></a>
        </div>
      </header>

      {/* Main */}
      <main className="z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 px-6 py-16">
        {/* Left Section - Info */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">Convertify 💱</h1>
          <p className="text-zinc-200 text-lg md:text-xl mb-8 leading-relaxed">
            💹 Real-time currency conversion with all international currencies. Built using React and live API integration.
          </p>
          <p className="text-sm text-zinc-400 mb-6 italic">🔗 Powered by <a href="https://www.exchangerate-api.com/" className="text-red-400 underline" target="_blank">ExchangeRate-API</a></p>
          <h3 className="text-xl font-semibold mb-3">⚛️ React Concepts Used:</h3>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 text-base">
            <li><strong>useState</strong> – manage currency, amount, and result</li>
            <li><strong>useEffect</strong> – trigger API calls on changes</li>
            <li><strong>Fetch API</strong> – get live exchange rates</li>
            <li><strong>Controlled Components</strong> – input & selects</li>
            <li><strong>Tailwind CSS</strong> – clean responsive UI</li>
          </ul>
        </div>

        {/* Right Section - Converter */}
        <div className="bg-black/40 p-6 rounded-xl border border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.4)] backdrop-blur-sm flex flex-col gap-6">
          {/* Dropdowns and Swap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div>
              <label className="block mb-1 text-sm text-red-300">From:</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-2 rounded-md bg-transparent border border-red-600 text-white"
              >
                {currencies.map((cur, i) => (
                  <option key={i} value={cur}>{cur}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm text-red-300">To:</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-2 rounded-md bg-transparent border border-red-600 text-white"
              >
                {currencies.map((cur, i) => (
                  <option key={i} value={cur}>{cur}</option>
                ))}
              </select>
            </div>

            {/* Swap Button - Positioned at center between the selects */}
            <button
              onClick={swapCurrencies}
              title="Swap currencies"
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-zinc-800 hover:bg-zinc-700 border border-red-500 text-red-400 hover:text-white p-2 rounded-full shadow-md transition-all"
            >
              <RefreshCcw className="w-4 h-4 rotate-90" />
            </button>
          </div>

          {/* Amount Input */}
          <div>
            <label className="block mb-1 text-sm text-red-300">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 rounded-md bg-transparent border border-red-600 text-white"
            />
          </div>

          {/* Convert Button */}
          <button
            onClick={fetchConversion}
            className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md shadow-lg font-semibold flex items-center justify-center gap-2 transition duration-200"
          >
            <RefreshCcw className="w-4 h-4" /> Convert
          </button>

          {/* Conversion Result */}
          {converted && (
            <div className="bg-black/60 p-4 rounded-lg mt-4 shadow-md border border-red-500 text-center">
              <p className="text-zinc-300 text-sm mb-1">Exchange Rate: 1 {fromCurrency} = {rate} {toCurrency}</p>
              <h2 className="text-2xl font-bold text-red-300">💸 {amount} {fromCurrency} = {converted} {toCurrency}</h2>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 text-zinc-500 text-sm mt-10 mb-2 text-center">
        © 2025 All rights reserved by <span className="text-white font-semibold">Soumik Bag</span>
      </footer>
    </div>
  );
};

export default CurrencyConverter;
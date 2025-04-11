import { useState } from 'react';
import { Trash2, Delete, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import profileimage from './assets/profile.png';
export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'CE') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === '±') {
      if (input) {
        const lastNumber = input.match(/(-?\d*\.?\d*)$/);
        if (lastNumber && lastNumber[0]) {
          const number = parseFloat(lastNumber[0]) * -1;
          setInput(input.replace(/(-?\d*\.?\d*)$/, number.toString()));
        }
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['CE', 'C', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '=']
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white flex flex-col items-center justify-between p-4 relative overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="https://videos.pexels.com/video-files/30014172/12877469_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0" />

      {/* Header */}
      <header className="z-10 w-full max-w-7xl flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.open('https://github.com/Soumik-Coder18', '_blank')}>
        <img
          src={profileimage}
          alt="Soumik Bag"
          className="w-9 h-9 rounded-full border border-violet-500 shadow-md group-hover:scale-105 transition"
        />
        <h2 className="text-xl font-bold group-hover:underline group-hover:text-violet-400 transition">
          Soumik Bag
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/Soumik-Coder18" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Github className="w-5 h-5" /></a>
        <a href="https://www.linkedin.com/in/soumik-bag-0b9900253/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Linkedin className="w-5 h-5" /></a>
        <a href="https://www.instagram.com/soumik_bag_18/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Instagram className="w-5 h-5" /></a>
        <a href="https://www.facebook.com/profile.php?id=100083845817568" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Facebook className="w-5 h-5" /></a>
      </div>
    </header>

      {/* Main Content */}
      <div className="z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* Hero Left Section with Glow */}
        <div className="relative text-left md:w-1/2 p-4 z-10">
          {/* Glowing Gradient Blobs */}
          <div className="absolute top-[-50px] left-[-60px] w-60 h-60 bg-gradient-to-tr from-violet-500 to-fuchsia-500 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
          <div className="absolute bottom-[-80px] right-[-50px] w-72 h-72 bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-30 rounded-full blur-3xl animate-spin-slow z-0"></div>

          {/* Text Content */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight relative z-10 text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
            Calculator
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl mb-6 max-w-lg relative z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]">
            A transparent, glowing calculator built using React. Clean design and useful UI transitions.
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-2 z-10 relative">🔧 React Topics Used:</h3>
          <ul className="text-zinc-300 list-disc pl-5 space-y-1 text-base relative z-10">
            <li><strong>useState</strong> – for input and result state</li>
            <li><strong>Conditional Rendering</strong> – logic for operators</li>
            <li><strong>Array Mapping</strong> – dynamic button layout</li>
            <li><strong>Event Handling</strong> – interactive button clicks</li>
            <li><strong>JSX + Tailwind</strong> – smooth UI build</li>
          </ul>
        </div>

        {/* Calculator UI */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 w-full max-w-sm shadow-xl border border-white/10">
          {/* Glowing Input Container */}
          <div className="bg-zinc-800/60 rounded-xl p-4 mb-4 shadow-inner border border-white/10">
            <div className="text-right text-sm text-zinc-400 break-all min-h-[24px]">{input || '0'}</div>
            <div className="text-right text-4xl md:text-5xl font-bold text-white break-all min-h-[48px]">
              {result || '0'}
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-4">
            {buttons.flat().map((btn, i) => (
              <button
                key={i}
                onClick={() => handleClick(btn)}
                className={`rounded-xl h-16 w-16 flex items-center justify-center text-xl font-semibold transition-all duration-200 transform hover:scale-105 border-2
                  ${
                    ['/', '*', '-', '+', '='].includes(btn)
                      ? 'bg-violet-700 border-violet-500 text-white hover:bg-violet-600'
                      : btn === 'CE'
                      ? 'text-violet-400 border-violet-400 hover:text-violet-300'
                      : btn === 'C'
                      ? 'text-red-400 border-red-400 hover:text-red-300'
                      : 'bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800'
                  } shadow-[0_0_10px_rgba(168,85,247,0.4)]`}
              >
                {btn === 'C' ? <Trash2 className="w-5 h-5" /> : btn === 'CE' ? <Delete className="w-5 h-5" /> : btn}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="z-10 text-zinc-500 text-sm mt-10 mb-2">
        © 2025 All rights reserved by <span className="text-white font-semibold">Soumik Bag</span>
      </footer>
    </div>
  );
}
import React, { useState } from 'react';
import profileimage from './assets/profile.png';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function BgColorChanger() {
  const [bgType, setBgType] = useState('gradient');
  const [bgColor, setBgColor] = useState('from-purple-600 via-pink-600 to-red-600');
  const [mediaUrl, setMediaUrl] = useState('');

  const gradientThemes = [
    { label: 'Violet to Red', value: 'from-purple-600 via-pink-600 to-red-600' },
    { label: 'Blue to Cyan', value: 'from-blue-600 via-cyan-500 to-cyan-400' },
    { label: 'Green to Emerald', value: 'from-green-500 via-emerald-500 to-emerald-700' },
    { label: 'Yellow to Orange', value: 'from-yellow-400 via-orange-400 to-orange-600' },
    { label: 'Gray to Black', value: 'from-gray-100 via-gray-600 to-black' },
    { label: 'Indigo to Pink', value: 'from-indigo-600 via-purple-600 to-pink-600' },
  ];

  const solidThemes = [
    { label: 'Blue', value: 'bg-blue-700' },
    { label: 'Red', value: 'bg-red-700' },
    { label: 'Green', value: 'bg-green-700' },
    { label: 'Orange', value: 'bg-orange-600' },
    { label: 'Black', value: 'bg-black' },
    { label: 'Violet', value: 'bg-purple-900' },
  ];


  const imageBackgrounds = [
    "https://images.pexels.com/photos/8409851/pexels-photo-8409851.jpeg",
    "https://images.pexels.com/photos/6728316/pexels-photo-6728316.jpeg",
    "https://images.pexels.com/photos/17454899/pexels-photo-17454899/free-photo-of-brothers.jpeg",
    "https://images.pexels.com/photos/8888492/pexels-photo-8888492.jpeg",
    "https://images.pexels.com/photos/27294847/pexels-photo-27294847/free-photo-of-a-bee-is-sitting-on-a-thistle-flower.jpeg",
    "https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg",
  ];

  const videoBackgrounds = [
    "https://videos.pexels.com/video-files/2715412/2715412-sd_640_360_30fps.mp4",
    "https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4",
    "https://videos.pexels.com/video-files/1580455/1580455-sd_640_360_30fps.mp4",
    "https://videos.pexels.com/video-files/2964554/2964554-sd_640_360_25fps.mp4",  
    "https://videos.pexels.com/video-files/1757800/1757800-sd_640_360_25fps.mp4",  
    "https://videos.pexels.com/video-files/857195/857195-sd_640_360_25fps.mp4",    
  ];

  const getBackgroundStyle = () => {
    if (bgType === 'image') {
      return {
        backgroundImage: `url(${mediaUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    }
    return {};
  };

  return (
    <div
      className={`min-h-screen text-white flex flex-col items-center justify-between p-4 relative overflow-hidden ${
        bgType === 'gradient' ? `bg-gradient-to-br ${bgColor}` : ''
      } ${bgType === 'solid' ? bgColor : ''}`}
      style={getBackgroundStyle()}
    >
      {/* Video Background */}
      {bgType === 'video' && (
        <video
          src={mediaUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* Header */}
      <header className="z-10 w-full max-w-7xl flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.open('https://github.com/Soumik-Coder18', '_blank')}>
          <img src={profileimage} alt="Soumik Bag" className="w-9 h-9 rounded-full border border-violet-500 shadow-md group-hover:scale-105 transition" />
          <h2 className="text-xl font-bold group-hover:underline group-hover:text-violet-400 transition">Soumik Bag</h2>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Soumik-Coder18" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/soumik-bag-0b9900253/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Linkedin className="w-5 h-5" /></a>
          <a href="https://www.instagram.com/soumik_bag_18/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Instagram className="w-5 h-5" /></a>
          <a href="https://www.facebook.com/profile.php?id=100083845817568" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white"><Facebook className="w-5 h-5" /></a>
        </div>
      </header>

      {/* Main Section */}
      <main className="z-10 max-w-7xl w-full grid md:grid-cols-2 gap-10 items-start px-6 py-16">
        {/* Left Info */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Colorify 🌈</h1>
          <p className="text-zinc-200 text-lg md:text-xl mb-8 leading-relaxed">
            ✨ Click on any button to change the background of this website. Choose from gradient, solid, image, or video backgrounds!
          </p>
          <h3 className="text-xl font-semibold text-white mb-3">⚛️ React Topics Used:</h3>
          <ul className="text-zinc-300 list-disc pl-5 space-y-1 text-base">
            <li><strong>useState</strong> – to track selected type and background values</li>
            <li><strong>Conditional Rendering</strong> – dynamic logic for image/video/gradients</li>
            <li><strong>Dynamic Tailwind Classes</strong> – background styles updated live</li>
            <li><strong>Inline Styling</strong> – used for setting image URLs directly</li>
            <li><strong>Responsive Design</strong> – mobile-first layout using Tailwind</li>
            <li><strong>Mapping Arrays</strong> – used to loop through themes, images & videos</li>
            <li><strong>Reusable UI</strong> – simple & clean components with utility classes</li>
            <li><strong>Z-Index Overlay</strong> – ensures content is above media layer</li>
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-8">
          {/* Gradient Buttons */}
          <div>
            <h2 className="text-xl font-semibold mb-3">🌈 Gradient Colors</h2>
            <div className="flex flex-wrap gap-3">
              {gradientThemes.map((theme, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setBgType('gradient');
                    setBgColor(theme.value);
                  }}
                  className="px-5 py-2 rounded-full text-white font-semibold shadow-md border border-white/20 hover:scale-105 transition"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${theme.value
                      .split(' ')
                      .map(c => c.replace(/from-|via-|to-/, ''))
                      .join(', ')})`,
                  }}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </div>

          {/* Solid Buttons */}
          <div>
            <h2 className="text-xl font-semibold mb-3">🟢 Solid Colors</h2>
            <div className="flex flex-wrap gap-3">
              {solidThemes.map((theme, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setBgType('solid');
                    setBgColor(theme.value);
                  }}
                  className="px-5 py-2 rounded-full font-semibold border border-white/20 text-white shadow-md hover:scale-105 transition"
                  style={{
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={e =>
                    e.currentTarget.style.backgroundColor = theme.value
                      .replace('from-', '')
                      .replace('-600', '')
                      .replace('-500', '')
                      .replace('-800', '')
                  }
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </div>

          {/* Image Backgrounds */}
          <div>
            <h2 className="text-xl font-semibold mb-3">🖼️ Image Backgrounds</h2>
            <div className="flex flex-wrap gap-3">
              {imageBackgrounds.map((url, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setBgType('image');
                    setMediaUrl(url);
                  }}
                  className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/20 hover:scale-105 transition"
                >
                  <img src={url} alt="bg" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Video Backgrounds */}
          <div>
            <h2 className="text-xl font-semibold mb-3">🎥 Video Backgrounds</h2>
            <div className="flex flex-wrap gap-3">
              {videoBackgrounds.map((url, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setBgType('video');
                    setMediaUrl(url);
                  }}
                  className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium border border-white/20 hover:bg-white/20 transition"
                >
                  Video {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 text-zinc-400 text-sm mt-10 mb-2 text-center">
        © 2025 All rights reserved by <span className="text-white font-semibold">Soumik Bag</span>
      </footer>
    </div>
  );
}

// BgColorChanger.jsx
import React, { useState } from 'react';
import { Mail, Zap, Video, Sparkles, Check, Globe, Mic, Users, Film, AlertCircle, X } from 'lucide-react';

export default function WaveifyLanding() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) return;

    setIsLoading(true);

    try {
      // Send name and email to local backend
      const response = await fetch('https://console.waveify.ai/customers/subscribe', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.status === 201) {
        setIsSubmitted(true);
        setName('');
        setEmail('');

        // Auto close modal after 3 seconds
        setTimeout(() => {
          setShowEmailModal(false);
          setIsSubmitted(false);
        }, 3000);
      } else {
        console.error('Error response:', response.status);
        setErrorMessage('Unable to connect to the server. Please try again later.');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Unable to connect to the server. Please check your connection and try again.');
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Logo/Brand */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              <Video className="w-8 h-8 text-purple-400" />
              <span className="text-4xl font-bold">Waveify.ai</span>
            </div>
            <p className="text-gray-300 text-lg">Transform Scripts into Viral Social Media Videos in Seconds</p>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Create Viral Content for <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Instagram & TikTok
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Powered by Waveify's advanced AI. Just type your script and let Waveify.ai handle the rest. Get professional, vertical videos optimized for Instagram Reels and TikTok in minutes.
            </p>
            <button
              onClick={() => setShowEmailModal(true)}
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </button>
          </div>

          {/* Demo Visual - Chat Interface */}
          <div className="relative">
            <div className="bg-gradient-to-b from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    Create like a pro. Just ask <span className="text-purple-400">Waveify Agent</span>
                  </h3>
                  <p className="text-gray-400 text-sm">AI Video Generator</p>
                </div>

                {/* Chat Input Area */}
                <div className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur">
                  <textarea
                    placeholder="Tell me what video content you want to create. You can reference your assets, for example: @woman holding @pizza"
                    className="w-full bg-transparent text-white placeholder-gray-500 resize-none focus:outline-none mb-4 leading-relaxed"
                    rows="4"
                    defaultValue=""
                  />

                  {/* Buttons Row */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowEmailModal(true)}
                        className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition border border-slate-600/50 cursor-pointer">
                        <span>⬆</span>
                        <span>Upload Image</span>
                      </button>
                      <button
                        onClick={() => setShowEmailModal(true)}
                        className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition border border-slate-600/50 cursor-pointer">
                        <span>@</span>
                        <span>Reference</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <div
                        onClick={() => setShowEmailModal(true)}
                        className="flex items-center gap-2 cursor-pointer">
                        <span className="text-sm text-gray-300">Auto Mode</span>
                        <div className="w-10 h-6 bg-slate-700 rounded-full relative hover:bg-slate-600 transition">
                          <div className="w-5 h-5 bg-slate-500 rounded-full absolute left-0.5 top-0.5"></div>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowEmailModal(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-lg transition"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>

                {/* Example Text */}
                <div className="text-center text-sm text-gray-400">
                  ✨ Describe your vision. Waveify.ai creates viral content for Instagram, TikTok & more instantly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Type Your Script</h3>
              <p className="text-gray-300">Simply write or paste your video script. Any topic, any length.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Does the Magic</h3>
              <p className="text-gray-300">Our AI powered by Waveify generates visuals, adds effects, and creates perfect pacing.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Post Everywhere</h3>
              <p className="text-gray-300">Get perfectly formatted vertical videos ready for Instagram Reels, TikTok, YouTube Shorts, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Waveify.ai</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-gray-300">Generate Instagram-ready videos in under 2 minutes. No more hours of editing.</p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <Video className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Platform Optimized</h3>
                  <p className="text-gray-300">Perfect 9:16 vertical format. Automatically sized for Instagram Reels, Stories, TikTok, and YouTube Shorts.</p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Waveify AI Powered</h3>
                  <p className="text-gray-300">Advanced AI technology with realistic avatars, natural voices, and dynamic visuals.</p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Fully Automated</h3>
                  <p className="text-gray-300">No technical skills required. From script to video with just one click.</p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">175+ Languages</h3>
                  <p className="text-gray-300">Create videos in any language with perfect lip-sync. Scale your content globally instantly.</p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <Mic className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Voice Doctor</h3>
                  <p className="text-gray-300">Control pitch, pace, and emotional tone. Inject excitement or adjust micro-expressions perfectly.</p>
                </div>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Avatars</h3>
                  <p className="text-gray-300">Professional, realistic avatars powered by Avatar IV technology. Natural gestures and expressions.</p>
                </div>
              </div>
            </div>

            {/* Feature 8 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition">
              <div className="flex items-start gap-4">
                <Film className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">4K Quality</h3>
                  <p className="text-gray-300">Professional-grade 4K rendering with skin texture and hair fiber clarity.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowEmailModal(true)}
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Next-Gen AI Technology</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Avatar IV: The Future of Video</h3>
              <p className="text-gray-300 mb-4">
                Our cutting-edge Avatar IV technology is a multimodal AI that learns from video and audio simultaneously. It understands when to pause for emphasis, when to gesture, and how to convey emotion through every micro-expression.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Natural pauses and gestures based on content meaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Realistic micro-expressions and emotional delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Perfect lip-sync in any language</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Holistic simulation of human behavior</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur">
              <div className="aspect-square bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-300" />
                  <p className="text-gray-300">Avatar IV Technology Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Perfect For Every Creator</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-3">📱 Social Media Creators</h3>
              <p className="text-gray-300 mb-4">
                Post daily content across Instagram Reels, TikTok, and YouTube Shorts without filming or editing. Build an engaged audience with consistent, high-quality videos.
              </p>
              <button
                onClick={() => setShowEmailModal(true)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Start Creating →
              </button>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-3">📚 Content Educators</h3>
              <p className="text-gray-300 mb-4">
                Create educational videos that engage students. Update scripts and regenerate instantly without re-shooting or re-editing.
              </p>
              <button
                onClick={() => setShowEmailModal(true)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Start Creating →
              </button>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-3">🚀 Marketing Teams</h3>
              <p className="text-gray-300 mb-4">
                Scale your campaigns globally in 175+ languages. Create personalized video messages at scale for maximum engagement.
              </p>
              <button
                onClick={() => setShowEmailModal(true)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Start Creating →
              </button>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-3">💼 Course Creators</h3>
              <p className="text-gray-300 mb-4">
                Build comprehensive online courses with professional video content. Update and iterate without expensive production costs.
              </p>
              <button
                onClick={() => setShowEmailModal(true)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Start Creating →
              </button>
            </div>

            {/* Use Case 5 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-3">🎬 Brands & Influencers</h3>
              <p className="text-gray-300 mb-4">
                Create viral content consistently across TikTok, Instagram, and YouTube. Go global with multilingual videos and maintain your authentic voice everywhere.
              </p>
              <button
                onClick={() => setShowEmailModal(true)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Start Creating →
              </button>
            </div>

            {/* Use Case 6 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-3">🌍 Global Businesses</h3>
              <p className="text-gray-300 mb-4">
                Communicate with customers worldwide instantly. Create training videos, announcements, and support content in any language.
              </p>
              <button
                onClick={() => setShowEmailModal(true)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Start Creating →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Maximum ROI, Minimum Cost</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Waveify.ai Wins</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-purple-300 mb-2">⚡ Speed</h4>
                  <p className="text-gray-300">Create videos in minutes, not weeks. Update scripts and regenerate instantly.</p>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300 mb-2">💰 Cost-Effective</h4>
                  <p className="text-gray-300">No video crew, no equipment, no post-production. Fraction of traditional video costs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300 mb-2">🎯 Consistency</h4>
                  <p className="text-gray-300">Same avatar, same voice, same quality. Build instant brand recognition.</p>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300 mb-2">🌐 Global Scale</h4>
                  <p className="text-gray-300">Reach 175+ languages with perfect lip-sync. Go global in one click.</p>
                </div>
                <div>
                  <h4 className="font-bold text-purple-300 mb-2">📊 Analytics</h4>
                  <p className="text-gray-300">Track video performance, engagement, and ROI with built-in analytics.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Real Results from Creators</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg p-6">
                  <p className="text-gray-300 mb-2">"Went from 1 video a month to 10 videos a week. My engagement tripled!"</p>
                  <p className="text-purple-300 font-semibold">- Instagram Creator</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg p-6">
                  <p className="text-gray-300 mb-2">"Saved $50K annually on video production costs. Quality is incredible."</p>
                  <p className="text-purple-300 font-semibold">- Marketing Director</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg p-6">
                  <p className="text-gray-300 mb-2">"Reached 15 new markets in my language with perfect lip-sync videos."</p>
                  <p className="text-purple-300 font-semibold">- Global Brand Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Viral Content?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of content creators who are transforming their scripts into viral videos for Instagram, TikTok, and beyond with Waveify.ai.
          </p>
          <button
            onClick={() => setShowEmailModal(true)}
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 shadow-lg text-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-purple-500/30">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Account Created!</h3>
                <p className="text-gray-300 mb-4">
                  You're on the waiting list due to high demand. We're processing your account and will get you access to Waveify.ai shortly.
                </p>
                <p className="text-sm text-gray-400">Check your email for updates! 🎉</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2">Start Creating Today</h3>
                <p className="text-gray-300 mb-6">
                  Enter your email to get instant access to Waveify.ai and start creating Instagram-ready videos.
                </p>

                <form onSubmit={handleEmailSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-slate-700/50 border border-purple-500/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
                  >
                    {isLoading ? 'Creating Account...' : 'Get Access Now'}
                  </button>
                </form>

                <button
                  onClick={() => setShowEmailModal(false)}
                  className="w-full mt-3 bg-slate-700/50 hover:bg-slate-700 text-gray-300 font-medium py-2 rounded-lg transition"
                >
                  Close
                </button>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  Your account will be created instantly. Check your email for your login details.
                </p>
              </>
            )}
          </div>
        </div>
      )}
      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-red-500/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-red-400">Connection Error</h3>
              <p className="text-gray-300 mb-6">
                {errorMessage}
              </p>
              <button
                onClick={() => setShowErrorModal(false)}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

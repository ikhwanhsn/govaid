"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Users,
  Eye,
  Zap,
  CheckCircle,
  Globe,
  TrendingUp,
  Lock,
  Play,
  Star,
  ArrowRight,
  BarChart3,
  Coins,
  FileText,
  Clock,
} from "lucide-react";

const GovAidLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Transaction Transparency", value: "100%", icon: Eye },
    { label: "Processing Speed", value: "< 1 min", icon: Zap },
    { label: "Cost Reduction", value: "85%", icon: TrendingUp },
  ];

  const features = [
    {
      icon: Shield,
      title: "Anti-Corruption Shield",
      description:
        "Immutable blockchain records prevent fund misappropriation and ensure every transaction is permanently recorded.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Mass Distribution",
      description:
        "Send aid to thousands of beneficiaries simultaneously with just one click, eliminating bureaucratic delays.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description:
        "Real-time tracking of all transactions with public blockchain verification for maximum accountability.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Coins,
      title: "Stablecoin Integration",
      description:
        "Utilize stable digital currencies for consistent value delivery without volatility concerns.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Comprehensive reporting and analytics for government officials to monitor aid distribution effectiveness.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Lock,
      title: "Secure Infrastructure",
      description:
        "Enterprise-grade security with multi-signature wallets and advanced encryption protocols.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const benefits = [
    "Eliminate corruption and fraud in aid distribution",
    "Reduce administrative costs by up to 85%",
    "Instant verification and tracking of all transactions",
    "Automated compliance with government regulations",
    "Real-time reporting for stakeholders",
    "Scalable solution for any government size",
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Government Setup",
      description:
        "Government creates secure digital wallet and defines beneficiary criteria through our intuitive dashboard.",
      icon: FileText,
    },
    {
      step: "2",
      title: "Beneficiary Verification",
      description:
        "AI-powered verification system ensures aid reaches legitimate recipients with proper documentation.",
      icon: CheckCircle,
    },
    {
      step: "3",
      title: "One-Click Distribution",
      description:
        "Single click initiates simultaneous transfer to all verified beneficiaries using smart contracts.",
      icon: Zap,
    },
    {
      step: "4",
      title: "Transparent Tracking",
      description:
        "Every transaction is recorded on blockchain with public visibility for complete accountability.",
      icon: Eye,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GovAid
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-blue-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-blue-400 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="hover:text-blue-400 transition-colors"
              >
                Benefits
              </a>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium">
                  Revolutionary Government Aid Distribution
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Transparent Aid
                </span>
                <br />
                <span className="text-white">Distribution Platform</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Leverage blockchain technology to eliminate corruption and
                ensure transparent, efficient distribution of government aid to
                society with one-click mass transfers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 cursor-pointer">
                  <Play className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </button>
                <button className="border-2 border-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-slate-900 transition-all cursor-pointer">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform transition-all duration-500 hover:scale-105 ${
                  currentStat === index ? "ring-2 ring-blue-400" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge blockchain technology with
              intuitive design to revolutionize government aid distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, secure, and transparent process from setup to
              distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Transform Government Aid
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our blockchain-powered platform addresses the core challenges in
                government aid distribution, ensuring transparency, efficiency,
                and trust.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-6 h-6 text-blue-400" />
                      <span>Global Reach</span>
                    </div>
                    <span className="text-green-400 font-semibold">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-cyan-400" />
                      <span>Real-time Processing</span>
                    </div>
                    <span className="text-green-400 font-semibold">
                      Under 1 min
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-purple-400" />
                      <span>Security Level</span>
                    </div>
                    <span className="text-green-400 font-semibold">
                      Maximum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Government Aid?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution in transparent, efficient, and corruption-free
            government aid distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 cursor-pointer">
              Start Free Trial
            </button>
            <button className="border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  GovAid
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing government aid distribution with blockchain
                technology.
              </p>
              <div className="flex space-x-4">
                <Star className="w-5 h-5 text-blue-400" />
                <Star className="w-5 h-5 text-blue-400" />
                <Star className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Security</div>
                <div>Analytics</div>
                <div>API</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Documentation</div>
                <div>Help Center</div>
                <div>Community</div>
                <div>Status</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 GovAid. All rights reserved. Built with blockchain
              technology for a transparent future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GovAidLanding;

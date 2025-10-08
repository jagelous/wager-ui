"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Clock,
  Trophy,
  Star,
  TrendingUp,
  ThumbsUp,
  Share2,
  Send,
  ChevronDown,
  ChevronUp,
  Target,
  Users,
  DollarSign,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data for the prediction page
const predictionData = {
  id: "atletico-vs-real-madrid",
  title: "Atletico vs Real Madrid 4/8",
  league: "UEFA Champions League",
  timeLeft: "1094h 23m 0s",
  isFrontRunner: true,
  multiplier: "2x points",
  leftTeam: {
    name: "Atletico",
    logo: "/icon/atletico_de_madrid.svg",
    color: "from-red-500 to-white",
    odds: "2.4",
    prediction: 40,
  },
  rightTeam: {
    name: "Real Madrid",
    logo: "/icon/real_madrid.svg",
    color: "from-white to-blue-600",
    odds: "1.6",
    prediction: 60,
  },
  image: "/image/atletico_vs.png",
  totalPool: "850K $VS",
  participants: 892,
  aiInsight: {
    summary:
      "Based on recent team form, player performance metrics, and historical head-to-head stats, Real Madrid is predicted to have a higher chance of winning.",
    reasons: [
      "Real Madrid has averaged 2.1 goals per game in their last 5 matches, while Atletico has struggled defensively, conceding 1.8 goals on average.",
      "Additionally, Madrid has won 3 of the last 4 derbies.",
    ],
    confidence: 60,
  },
  lastTrades: [
    {
      id: "1",
      user: "Placed 1500 $VS ($225)",
      team: "Real Madrid",
      time: "1m ago",
      image: "/image/atletico_vs_real_madrid.avif",
    },
  ],
  comments: [
    {
      id: "1",
      user: "@bizops",
      message: "LETSGOOO REAL MADRID",
      time: "10 minutes ago",
    },
    {
      id: "2",
      user: "@bizops",
      message: "LETSGOOO REAL MADRID",
      time: "10 minutes ago",
    },
  ],
};

export default function PredictionPage() {
  const [selectedTeam, setSelectedTeam] = useState("Real Madrid");
  const [amount, setAmount] = useState("100");
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(true);

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const handleQuickAdd = (addAmount: number) => {
    const currentAmount = parseInt(amount.replace("$", ""));
    setAmount(`$${currentAmount + addAmount}`);
  };

  const handleMaxAmount = () => {
    setAmount("$1000");
  };

  const payout = selectedTeam === "Real Madrid" ? "$142" : "$240";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] via-[#16213e] to-[#0a0a0f] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Column - Match Details */}
          <div className="flex flex-col gap-6 relative">
            {/* Wager Window Banner */}
            <label className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 text-sm bg-green-500/90 text-black px-2 py-1 rounded-lg text-center">
              Wager Window Closing: {predictionData.timeLeft}
            </label>
            {/* Match Visual */}
            <Image
              src={predictionData.image}
              alt={predictionData.title}
              width={420}
              height={380}
              className="w-full"
            />

            {/* Prediction Graph */}
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Prediction Trends</h3>
              <div className="">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">Atletico Madrid</span>
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <div
                      className="bg-cyan-400 h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${predictionData.leftTeam.prediction}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-semibold">
                    {predictionData.leftTeam.prediction}%
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">Real Madrid</span>
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <div
                      className="bg-purple-400 h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${predictionData.rightTeam.prediction}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-semibold">
                    {predictionData.rightTeam.prediction}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-white/60 mt-2">
                <span>1H</span>
                <span>6H</span>
                <span>1D</span>
                <span>1W</span>
                <span>ALL</span>
              </div>
            </div>
          </div>

          {/* Right Column - Wager Interface */}

          <div className="">
            {/* Match Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-medium mb-2">
                  {predictionData.title}
                </h1>
                <p className="text-white/60 text-lg">{predictionData.league}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {predictionData.isFrontRunner && (
                <div className="bg-green-500/90 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Front Runner {predictionData.multiplier}
                </div>
              )}
            </div>
            <div className="flex gap-5 pt-6">
              <div className="flex flex-col gap-5">
                {/* Team Selection */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col gap-4">
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setSelectedTeam("Atletico")}
                      className={`flex-1 py-3 rounded-xl transition-all duration-300 ${
                        selectedTeam === "Atletico"
                          ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      Atletico
                    </Button>
                    <Button
                      onClick={() => setSelectedTeam("Real Madrid")}
                      className={`flex-1 py-3 rounded-xl transition-all duration-300 ${
                        selectedTeam === "Real Madrid"
                          ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      Real Madrid
                    </Button>
                  </div>
                  {/* Amount Input */}

                  <div className="bg-white/10 rounded-lg flex flex-col">
                    <label className="pt-2 px-2 font-semibold">Amount</label>
                    <div className="text-3xl font-bold text-end p-2">
                      {amount}
                    </div>
                    <div className="flex gap-2 p-2">
                      <Button
                        onClick={() => handleQuickAdd(1)}
                        className="bg-white/10 hover:bg-white/20 text-white h-6 rounded-lg"
                      >
                        +$1
                      </Button>
                      <Button
                        onClick={() => handleQuickAdd(20)}
                        className="bg-white/10 hover:bg-white/20 text-white h-6 rounded-lg"
                      >
                        +$20
                      </Button>
                      <Button
                        onClick={() => handleQuickAdd(100)}
                        className="bg-white/10 hover:bg-white/20 text-white h-6 rounded-lg"
                      >
                        +$100
                      </Button>
                      <Button
                        onClick={handleMaxAmount}
                        className="bg-white/10 hover:bg-white/20 text-white h-6 rounded-lg"
                      >
                        MAX
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg text-lg">
                      Predict
                    </Button>
                    <label className="text-xs text-white/60 text-center">
                      By predicting you agree to Terms of Use
                    </label>
                  </div>
                </div>
                {/* Payout Info */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-green-400">
                    <Target className="w-4 h-4" />
                    <span className="font-semibold">
                      Payout if {selectedTeam}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-green-400 mt-2">
                    {payout}
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex gap-4">
                  <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Like
                  </Button>
                  <Button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
                {/* Last Trades */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Last Trades</h3>
                  <div className="">
                    {predictionData.lastTrades.map((trade) => (
                      <div
                        key={trade.id}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                      >
                        <Image
                          src={trade.image}
                          alt="Match"
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-sm">
                            {trade.user}
                          </div>
                          <div className="text-xs text-white/60">
                            {trade.team}
                          </div>
                        </div>
                        <div className="text-xs text-white/60">
                          {trade.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {" "}
                {/* AI Insight */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                    WagerVS AI Insight
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {predictionData.aiInsight.summary}
                  </p>
                  <div className="">
                    <div className="text-sm font-semibold text-white/90">
                      Why?
                    </div>
                    {predictionData.aiInsight.reasons.map((reason, index) => (
                      <div
                        key={index}
                        className="text-sm text-white/70 leading-relaxed"
                      >
                        • {reason}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 pt-4">
                    <Target className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      AI Confidence Level: {predictionData.aiInsight.confidence}
                      %
                    </span>
                  </div>
                </div>
                {/* Comments Section */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Comments</h3>
                    <Button
                      onClick={() => setShowComments(!showComments)}
                      className="text-white/60 hover:text-white"
                      variant="ghost"
                      size="sm"
                    >
                      {showComments ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  {showComments && (
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        {predictionData.comments.map((comment) => (
                          <div
                            key={comment.id}
                            className="flex items-center gap-3"
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">
                              {comment.user.charAt(1).toUpperCase()}
                            </div>
                            <div className="">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm">
                                  {comment.user}
                                </span>
                                <span className="text-xs text-white/60">
                                  {comment.time}
                                </span>
                              </div>
                              <p className="text-sm text-white/80">
                                {comment.message}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Input
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          placeholder="Add a comment..."
                          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        />
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4">
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

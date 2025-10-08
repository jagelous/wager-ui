"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface BuyTokensModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BuyTokensModal({ open, onOpenChange }: BuyTokensModalProps) {
  const [usdAmount, setUsdAmount] = React.useState("0");
  const [vsAmount, setVsAmount] = React.useState("0");
  const [selectedCurrency, setSelectedCurrency] = React.useState("USDC");
  const [balance, setBalance] = React.useState("0");

  const conversionRate = 100; // 1 USD = 100 $VS

  const handleUsdChange = (value: string) => {
    setUsdAmount(value);
    const usd = parseFloat(value) || 0;
    setVsAmount((usd * conversionRate).toString());
  };

  const handleVsChange = (value: string) => {
    setVsAmount(value);
    const vs = parseFloat(value) || 0;
    setUsdAmount((vs / conversionRate).toString());
  };

  const handleQuickBuy = (amount: string) => {
    setUsdAmount(amount);
    const usd = parseFloat(amount);
    setVsAmount((usd * conversionRate).toString());
  };

  const handleBuy = () => {
    console.log("Buying tokens:", {
      usdAmount,
      vsAmount,
      selectedCurrency,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1a2e] w-full border-white/10 text-white max-w-md py-20">
        <DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/icon/logo.svg"
              alt="logo"
              width={200}
              height={48}
              className="h-12"
            />
            <DialogTitle className="text-2xl font-semibold text-white text-center">
              BUY TOKENS
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-5">
          {/* Balance Display */}
          <div className="bg-white/5 flex px-3 items-center rounded-md h-12 text-white placeholder:text-white/40">
            <p className="text-white/80">Balance: {balance} SOL</p>
          </div>

          {/* USD Input */}
          <div className="">
            <div className="relative">
              <Input
                value={usdAmount}
                onChange={(e) => handleUsdChange(e.target.value)}
                placeholder="0"
                className="bg-white/5 border-[#1FE6E5] text-white placeholder:text-white/40 h-12 text-lg pr-28"
              />
              <Select
                value={selectedCurrency}
                onValueChange={setSelectedCurrency}
              >
                <SelectTrigger className="absolute right-2 top-1/2 -translate-y-1/2 w-24 bg-white/5 border-[#1FE6E5] text-white h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-[#1FE6E5]">
                  <SelectItem value="USDC" className="text-white">
                    USDC
                  </SelectItem>
                  <SelectItem value="SOL" className="text-white">
                    SOL
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* VS Input */}
          <div className="">
            <div className="relative">
              <Input
                value={vsAmount}
                onChange={(e) => handleVsChange(e.target.value)}
                placeholder="0"
                className="bg-white/5 border-[#1FE6E5] text-white placeholder:text-white/40 h-12 text-lg pr-28"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-12 border rounded-md flex justify-center items-center bg-white/5 border-[#1FE6E5] text-white h-8">
                VS
              </div>
            </div>
          </div>
          <label className="text-sm text-white/60">1 USD ~ 100 $VS</label>

          <div className="">
            <div className="grid grid-cols-4 gap-2">
              {["25", "50", "100", "200"].map((amount) => (
                <Button
                  key={amount}
                  onClick={() => handleQuickBuy(amount)}
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 h-10"
                >
                  ${amount}
                </Button>
              ))}
            </div>
          </div>

          {/* Buy Button */}
          <Button
            onClick={handleBuy}
            className="w-full bg-[#9A2BD8] text-white hover:bg-[#9A2BD8]/90 h-12 text-lg font-medium"
          >
            Buy $VS Chips
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

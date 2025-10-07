import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PrizePoolPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-8">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/icon/logo.svg"
                alt="WVS Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Global Pricepool
                </h1>
                <p className="text-white/70">
                  Earn entry points just for using the platform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="rounded-lg bg-white/10 p-4 text-center">
              <div className="text-3xl font-bold text-white">2,125,000</div>
              <div className="text-lg font-semibold text-[#FFC940]">$VS</div>
            </div>
            <div className="text-sm text-white/60">Next drawing: 15:35:45</div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/image/prize_main.avif"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* How it works and Leaderboard */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* How it works */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">
            How it works
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1FE6E5]/20">
                <span className="text-2xl">🎲</span>
              </div>
              <div>
                <h3 className="font-medium text-white">Predict</h3>
                <p className="text-sm text-white/70">
                  Make or create a prediction on the platform.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#9A2BD8]/20">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="font-medium text-white">Earn</h3>
                <p className="text-sm text-white/70">
                  Receive entry points for accuracy + platform usage.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFC940]/20">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="font-medium text-white">Win</h3>
                <p className="text-sm text-white/70">
                  Your entries are automatically submitted into the bi-weekly
                  drawing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Leaderboard</h2>
            <Button
              variant="ghost"
              className="text-[#1FE6E5] hover:text-[#1FE6E5]/80"
            >
              View All &gt;&gt;
            </Button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1FE6E5] to-[#9A2BD8] p-0.5">
                <div className="h-full w-full rounded-full bg-gray-800"></div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">Player 1</div>
                <div className="text-xs text-white/60">500 pts</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#9A2BD8] to-[#FFC940] p-0.5">
                <div className="h-full w-full rounded-full bg-gray-800"></div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">Player 2</div>
                <div className="text-xs text-white/60">400 pts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Prediction Pools */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Top Prediction Pools
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-white">Football</span>
              <span className="text-xs text-white/60">Live</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-500"></div>
                <span className="text-sm text-white">Benfica</span>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">2-1</div>
                <div className="text-xs text-white/60">Final</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">FCB</span>
                <div className="h-8 w-8 rounded-full bg-red-500"></div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-white">Basketball</span>
              <span className="text-xs text-white/60">Upcoming</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-orange-500"></div>
                <span className="text-sm text-white">Lakers</span>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">vs</div>
                <div className="text-xs text-white/60">19:30</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white">Warriors</span>
                <div className="h-8 w-8 rounded-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

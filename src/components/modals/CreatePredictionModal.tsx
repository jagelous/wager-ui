"use client";

import * as React from "react";
import Image from "next/image";
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

interface CreatePredictionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreatePredictionModal({
  open,
  onOpenChange,
}: CreatePredictionModalProps) {
  const [title, setTitle] = React.useState("");
  const [wagerType, setWagerType] = React.useState("Football");
  const [answeringType, setAnsweringType] = React.useState(
    "Multiple options (max. 4)"
  );
  const [options, setOptions] = React.useState(["Lakers", "Phoenix Suns"]);
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const addOption = () => {
    if (options.length < 4) {
      setOptions([...options, ""]);
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1a2e]  border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-[18px] font-medium text-white text-center">
            New Wager
          </DialogTitle>
        </DialogHeader>

        <div className="flex w-full gap-8">
          {/* Left Section - Form Fields */}
          <div className="flex flex-col flex-[1_1_50%] gap-6">
            <div className="flex flex-col gap-3">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Title <label className="text-[#1FE6E5]">*</label>
              </label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Who will win the NBA Finals?"
                className="bg-white/5 border-[#1FE6E5] text-white placeholder:text-white/40 h-12 text-lg"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Wager Type <label className="text-[#1FE6E5]">*</label>
              </label>
              <Select value={wagerType} onValueChange={setWagerType}>
                <SelectTrigger className="w-full bg-white/5 border-[#1FE6E5] text-white h-12 text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-[#1FE6E5]">
                  <SelectItem value="Football" className="text-white">
                    Football
                  </SelectItem>
                  <SelectItem value="Basketball" className="text-white">
                    Basketball
                  </SelectItem>
                  <SelectItem value="Crypto" className="text-white">
                    Crypto
                  </SelectItem>
                  <SelectItem value="Events" className="text-white">
                    Events
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Answering Type <label className="text-[#1FE6E5]">*</label>
              </label>
              <Select value={answeringType} onValueChange={setAnsweringType}>
                <SelectTrigger className="w-full bg-white/5 border-[#1FE6E5] text-white h-12 text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a2e] border-[#1FE6E5]">
                  <SelectItem
                    value="Multiple options (max. 4)"
                    className="text-white"
                  >
                    Multiple options (max. 4)
                  </SelectItem>
                  <SelectItem value="Yes/No" className="text-white">
                    Yes/No
                  </SelectItem>
                  <SelectItem value="Numeric" className="text-white">
                    Numeric
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Options <label className="text-[#1FE6E5]">* (Max 4)</label>
              </label>
              <div className="space-y-3">
                {options.map((option, index) => (
                  <Input
                    key={index}
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="bg-white/5 border-[#1FE6E5] text-white placeholder:text-white/40 h-12 text-lg"
                  />
                ))}
                {options.length === 2 && (
                  <Button
                    onClick={addOption}
                    variant="outline"
                    className="bg-white/5 border-white/10 text-[#1FE6E5] hover:bg-white/10"
                  >
                    Add Third Option
                  </Button>
                )}
                {options.length === 3 && (
                  <Button
                    onClick={addOption}
                    variant="outline"
                    className="bg-white/5 border-white/10 text-[#1FE6E5] hover:bg-white/10"
                  >
                    Add Fourth Option
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Image Upload */}
          <div className="flex-[1_1_50%]">
            <div className="flex flex-col gap-3">
              <label className="block text-sm font-medium text-white/80 mb-2">
                Upload Image <label className="text-[#1FE6E5]">*</label>
              </label>
              <p className="text-sm text-white/60">
                Please upload your wager image so our AI can use it to create
                the final wager card.
              </p>

              <div className="border-2 border-dashed border-white/20 rounded-lg p-12 text-center hover:border-white/40 transition-colors min-h-[300px] flex flex-col justify-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center gap-3"
                >
                  <div className="w-8 h-8 bg-[#1FE6E5] rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-black">+</span>
                  </div>
                  <span className="text-white/80">Upload Image</span>
                </label>
              </div>

              <Button
                variant="outline"
                className="mt-4 h-12 text-lg bg-[#9A2BD8]/20 border-[#9A2BD8]/20 text-[#9A2BD8] hover:bg-[#9A2BD8]"
              >
                <Image
                  src="/icon/magic.svg"
                  alt="magic"
                  width={24}
                  height={24}
                />
                <label className="text-white/80">Regenerate Image</label>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-4">
          <p className="text-sm  text-center text-white/60 mb-6">
            You will receive a 50% revenue share from all activity on this
            wager.
          </p>
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                // Handle submit logic here
                console.log("Submitting wager:", {
                  title,
                  wagerType,
                  answeringType,
                  options,
                });
                onOpenChange(false);
              }}
              className="bg-[#1FE6E5] text-black hover:bg-[#1FE6E5]/90 h-12 text-lg px-8"
            >
              Submit
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              variant="outline"
              className="bg-white/5 border-[#1FE6E5]/20 text-white hover:bg-white/10 h-12 text-lg px-8"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

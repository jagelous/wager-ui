"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, AtSign } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { GoogleSignInButton } from "@/components/auth/GoogleSignInButton";
import { useAuth } from "@/components/auth/AuthProvider";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const { login } = useAuth();
  const [connecting, setConnecting] = React.useState<
    null | "google" | "solana"
  >(null);
  const [identifier, setIdentifier] = React.useState(""); // email or username
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleGoogleSuccess = async () => {
    // The GoogleSignInButton already calls login(), so we just need to close the modal
    onOpenChange(false);
  };

  const handleGoogleError = (error: string) => {
    alert(`Google sign-in failed: ${error}`);
  };

  const handleConnectSol = async () => {
    try {
      setConnecting("solana");
      const anyWindow = window as any;
      const provider = anyWindow.solana;
      if (!provider || !provider.isPhantom) {
        alert("No Solana wallet (Phantom) found.");
        return;
      }
      const resp = await provider.connect();
      if (resp?.publicKey) {
        console.log("Logged in with Solana:", resp.publicKey.toString());
        // TODO: Send wallet info to backend for authentication
        // For now, simulate successful login
        await login();
        onOpenChange(false);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to connect Solana wallet");
    } finally {
      setConnecting(null);
    }
  };

  const handleManualLogin = async () => {
    if (!identifier || !password) {
      alert("Please enter your email/username and password.");
      return;
    }
    try {
      console.log("Manual login:", { identifier });
      // TODO: Implement actual API call
      // await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ identifier, password }) })

      // For now, simulate successful login
      await login();
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1a2e] w-full py-12 text-white border-white/10 max-w-md">
        <DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/icon/logo.svg"
              alt="logo"
              width={160}
              height={40}
              className="h-10"
            />
            <DialogTitle className="text-xl font-semibold">
              Login to WagerVS
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <GoogleSignInButton
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            disabled={connecting !== null}
          />

          <div className="flex items-center gap-2 text-white/60">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Manual login */}
          <div className="flex flex-col gap-3">
            <div className="relative">
              <Input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Email or Username"
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 pr-10"
              />
              {/* show both semantics visually acceptable: mail icon */}
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            </div>
            <div className="relative">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            <Button
              onClick={handleManualLogin}
              disabled={connecting !== null}
              className="h-12 w-full bg-[#1FE6E5] text-black hover:bg-[#1FE6E5]/90"
            >
              Login
            </Button>
          </div>

          <div className="flex items-center gap-2 text-white/60">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <Button
            onClick={handleConnectSol}
            disabled={connecting !== null}
            variant="outline"
            className="h-12 bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            Login with Solana Wallet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

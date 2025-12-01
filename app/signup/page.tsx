"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/libs/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define validation schema
const signupSchema = z.object({
  fullName: z.string().min(2, "Nom complet requis (min 2 caractères)"),
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // Watch password for strength calculation
  const password = watch("password");

  const calculatePasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (pass.length >= 12) strength += 1;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength += 1;
    if (/\d/.test(pass)) strength += 1;
    if (/[^a-zA-Z\d]/.test(pass)) strength += 1;
    return strength;
  };

  // Update strength when password changes
  if (password !== undefined) {
    const newStrength = calculatePasswordStrength(password);
    if (newStrength !== passwordStrength) {
      setPasswordStrength(newStrength);
    }
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return "bg-brand-secondary";
    if (passwordStrength <= 2) return "bg-brand-primary";
    if (passwordStrength <= 3) return "bg-brand-primary";
    return "bg-brand-accent";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 1) return "Faible";
    if (passwordStrength <= 2) return "Moyen";
    if (passwordStrength <= 3) return "Bon";
    return "Fort";
  };

  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true);

    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
          },
          emailRedirectTo: `${window.location.origin}/api/auth/callback`,
        },
      });

      if (error) {
        toast.error(error.message || "Une erreur est survenue");
        return;
      }

      if (authData.user) {
        toast.success("Compte créé avec succès!");
        router.push("/dashboard");
      }
    } catch (error: any) {
      toast.error(error.message || "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors text-sm mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>
            Accueil
          </Link>
        </div>

        <Card className="glass border border-white/10 p-8">
          <h1 
            className="text-3xl font-bold text-center mb-8 text-brand-accent"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Créer Votre Compte
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-text-secondary">
                Nom complet
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Jean Dupont"
                error={!!errors.fullName}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-text-secondary">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jean@exemple.com"
                error={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-text-secondary">
                Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Min. 8 caractères"
                error={!!errors.password}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
              
              {/* Password Strength Indicator */}
              {password && (
                <div className="space-y-2 mt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-muted">Force du mot de passe:</span>
                    <span className={`font-semibold ${
                      passwordStrength <= 1 ? 'text-brand-secondary' :
                      passwordStrength <= 3 ? 'text-brand-primary' :
                      'text-brand-accent'
                    }`}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <div className="h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Création...
                </span>
              ) : (
                "Créer Mon Compte"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-text-muted">
              Déjà un compte?{" "}
              <Link 
                href="/login" 
                className="text-primary hover:text-accent font-semibold transition-colors"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}

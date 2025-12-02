"use client";

import { useState } from "react";
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
const forgotPasswordSchema = z.object({
  email: z.string().email("Email invalide"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast.error(error.message || "Une erreur est survenue");
        return;
      }

      setIsEmailSent(true);
      toast.success("Email de réinitialisation envoyé!");
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

        <Card className="glass border border-white/10 p-8 max-w-[400px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h1 
              className="text-3xl font-bold text-brand-accent"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Mot de passe oublié
            </h1>
          </div>

          {isEmailSent ? (
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8 text-brand-primary"
                  >
                    <path d="M3 4a2 2 0 00-.88 2.122l-1 5A2 2 0 002 13h15.153a2 2 0 001.968-1.878l1-5A2 2 0 0017 4H3z" />
                    <path d="M19.25 5.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-1.72 6.607a1.75 1.75 0 01-1.723 1.393H4.518a1.75 1.75 0 01-1.723-1.393L1.06 6.5H3.75a.75.75 0 000-1.5h-2.5a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h15.5a.75.75 0 00.75-.75v-.5z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Email envoyé!
                </h2>
                <p className="text-text-muted">
                  Nous avons envoyé un lien de réinitialisation à votre adresse email. 
                  Veuillez vérifier votre boîte de réception et suivre les instructions.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full"
              >
                <Link href="/login">
                  Retour à la connexion
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <p className="text-text-muted mb-6">
                Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                      Envoi...
                    </span>
                  ) : (
                    "Envoyer le lien de réinitialisation"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-text-muted">
                  Vous vous souvenez de votre mot de passe?{" "}
                  <Link 
                    href="/login" 
                    className="text-brand-primary hover:text-primary font-semibold transition-colors"
                  >
                    Se connecter
                  </Link>
                </p>
              </div>
            </>
          )}
        </Card>
      </div>
    </main>
  );
}




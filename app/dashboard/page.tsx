import { createClient } from "@/libs/supabase/server";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/UserMenu";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
export default async function Dashboard() {
  const supabase = await createClient();
  
  // Get user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Get user profile from database
  let fullName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Utilisateur";
  
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", user.id)
      .single();
    
    if (profile?.full_name) {
      fullName = profile.full_name;
    }
  }

  return (
    <main className="min-h-screen p-8">
      {/* Top Right User Menu */}
      <div className="flex justify-end mb-8">
        <UserMenu user={user} fullName={fullName} />
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-2xl mx-auto">
        <Card className="glass border border-white/10 p-8">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Profile Icon */}
            <div className="w-16 h-16 rounded-full border-2 border-brand-primary bg-brand-primary/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-white"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <path d="M12 11v6" />
                <path d="M9 14l3-3 3 3" />
              </svg>
            </div>

            {/* Welcome Message */}
            <h1 
              className="text-4xl md:text-5xl font-bold text-brand-accent"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Bienvenue sur Elykta!
            </h1>

            {/* Coming Soon Message */}
            <p className="text-xl text-text-secondary">
              Votre dashboard arrive bientôt...
            </p>

            {/* Create Avatar Button */}
            <Button
              disabled
              className="mt-4 opacity-75 cursor-not-allowed"
            >
              Créer Mon Premier Avatar (Coming Soon)
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}

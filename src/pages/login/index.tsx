import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Account from "@/components/Account";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      <Header />

      <section className="gradient-form h-full bg-neutral-200">
        <div className="container h-full flex justify-center items-center">
          <div className="mx-auto py-16">
            {!session ? (
              <Auth
                providers={["google", "github"]}
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
              />
            ) : (
              <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                <Account session={session} />
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;

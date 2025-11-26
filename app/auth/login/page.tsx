import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import { Hand } from "lucide-react"

export const metadata = {
  title: "Sign In - SilentVoice",
  description: "Sign in to your SilentVoice account to start learning and translating sign language.",
}

export default function LoginPage() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Hand className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-2xl">SilentVoice</span>
            </Link>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to continue your learning journey</p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl border border-border p-8">
            <LoginForm />
          </div>

          {/* Footer Link */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By signing in, you agree to our Terms and Privacy Policy
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

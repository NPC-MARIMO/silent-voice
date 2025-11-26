import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"
import { SignupForm } from "@/components/auth/signup-form"
import Link from "next/link"
import { Hand } from "lucide-react"

export const metadata = {
  title: "Sign Up - SilentVoice",
  description: "Create your SilentVoice account to start learning and translating sign language.",
}

export default function SignupPage() {
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
            <h1 className="text-3xl font-bold mb-2">Get Started</h1>
            <p className="text-muted-foreground">Join thousands learning and translating sign language</p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl border border-border p-8">
            <SignupForm />
          </div>

          {/* Footer Link */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            By signing up, you agree to our Terms and Privacy Policy
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

import { DeploymentForm } from "@/components/deployment-form"


export default function BookPage() {
  return (
    <div className="relative z-10 min-h-screen px-4 pt-24 pb-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-wider text-primary crt-flicker neon-glow-text text-center sm:text-4xl md:text-5xl">
          Request Deployment
        </h1>
        <p className="mt-4 text-center text-sm text-muted-foreground leading-relaxed">
          Deploy Space DJ Command to your event. Fill out the form below and we
          will make contact within one Earth rotation.
        </p>
        <div className="mt-10">
          <DeploymentForm />
        </div>
      </div>
    </div>
  )
}


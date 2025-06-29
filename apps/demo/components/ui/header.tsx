import Link from "next/link"
import { Bars2 } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          kubocchi
        </Link>
        <nav className="hidden gap-4 md:flex">
          <Link href="/" className="text-sm font-medium hover:underline">Home</Link>
          <Link href="/payment-of-service" className="text-sm font-medium hover:underline">Payment of Service</Link>
          <Link href="/privacy-policy" className="text-sm font-medium hover:underline">Privacy Policy</Link>
          <Link href="/specified-commercial-transaction-act" className="text-sm font-medium hover:underline">Commercial Transaction</Link>
          <Link href="/terms-of-service" className="text-sm font-medium hover:underline">Terms of Service</Link>
        </nav>
        <button aria-label="Toggle menu" className="md:hidden p-2">
          <Bars2 className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
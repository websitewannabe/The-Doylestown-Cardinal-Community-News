import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PenLine } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern React
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/" className={cn(
                "text-sm font-medium transition-colors hover:text-primary"
              )}>
                Home
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/articles" className={cn(
                "text-sm font-medium transition-colors hover:text-primary"
              )}>
                Articles
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/articles/create" className={cn(
                "text-sm font-medium transition-colors hover:text-primary"
              )}>
                <PenLine className="mr-2 h-4 w-4" />
                Write Article
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
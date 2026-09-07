import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell flex min-h-[100svh] flex-col items-start justify-center gap-6">
      <p className="label text-accent">404</p>
      <h1 className="font-display text-display">This page went missing.</h1>
      <Link href="/" className="label link-underline">
        Back to the studio →
      </Link>
    </main>
  );
}

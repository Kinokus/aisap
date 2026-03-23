import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16">
      <section className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Next.js App (TypeScript + React)
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-700">
          This starter includes routing and a top navigation menu shared across
          pages.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}

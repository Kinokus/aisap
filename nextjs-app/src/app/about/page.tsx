import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16">
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          About
        </h1>
        <p className="mt-3 text-base leading-7 text-zinc-700">
          Routing is handled by the Next.js App Router (files under
          `src/app/*`). The top menu is shared via `src/components/TopMenu.tsx`.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}


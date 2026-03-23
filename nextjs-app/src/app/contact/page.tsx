export default function ContactPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-16">
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Contact
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-700">
          This is a simple example page to verify routing and the shared top
          menu.
        </p>

        <form className="mt-8 grid gap-4 max-w-lg">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-800">Name</span>
            <input
              name="name"
              type="text"
              className="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-zinc-400"
              placeholder="Your name"
              required
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-800">Email</span>
            <input
              name="email"
              type="email"
              className="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:border-zinc-400"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-800">Message</span>
            <textarea
              name="message"
              className="min-h-[120px] rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
              placeholder="Write your message..."
              required
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}


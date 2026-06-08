
import Link from "next/link";
import hooksConfig from "@/hooks-config.json";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-24 px-8 md:px-16 bg-white dark:bg-black gap-12 sm:items-start">
        <div className="flex flex-col gap-6 text-center sm:text-left sm:items-start">
          <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            A collection of useful React custom hooks.
          </h1>
          <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Built using TypeScript, and tested using Jest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {hooksConfig.map((hook) => (
            <Link
              key={hook.name}
              href={hook.link}
              className="group block p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 dark:border-zinc-800 dark:bg-black dark:hover:border-zinc-600 transition-all duration-200"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white">
                    {hook.name}
                  </span>
                  <svg
                    className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:text-zinc-600 dark:group-hover:text-zinc-100 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {hook.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}


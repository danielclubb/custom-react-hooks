import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyButton from "./CopyButton";
import hooksConfig from "@/hooks-config.json";

interface PageProps {
  params: Promise<{ hookName: string }>;
}

export async function generateStaticParams() {
  console.log("--- Vercel Build Diagnostic ---");
  console.log("process.cwd():", process.cwd());
  try {
    const parentDir = path.join(process.cwd(), "..");
    console.log("Parent directory contents:", fs.readdirSync(parentDir));
    const hooksDir = path.join(process.cwd(), "../hooks");
    console.log("Hooks directory contents:", fs.readdirSync(hooksDir));
  } catch (err: any) {
    console.error("Diagnostic error:", err.message);
  }
  console.log("--------------------------------");

  return hooksConfig.map((hook) => ({
    hookName: hook.name,
  }));
}

function getHookCode(hookName: string): string {
  switch (hookName) {
    case "useArray":
      return fs.readFileSync(path.join(process.cwd(), "../hooks/useArray.tsx"), "utf8");
    case "useBoolean":
      return fs.readFileSync(path.join(process.cwd(), "../hooks/useBoolean.tsx"), "utf8");
    case "useCounter":
      return fs.readFileSync(path.join(process.cwd(), "../hooks/useCounter.tsx"), "utf8");
    case "useCycle":
      return fs.readFileSync(path.join(process.cwd(), "../hooks/useCycle.tsx"), "utf8");
    case "useDefault":
      return fs.readFileSync(path.join(process.cwd(), "../hooks/useDefault.tsx"), "utf8");
    case "useQuery":
      return fs.readFileSync(path.join(process.cwd(), "../hooks/useQuery.tsx"), "utf8");
    default:
      throw new Error(`Unknown hook: ${hookName}`);
  }
}

export default async function HookPage({ params }: PageProps) {
  const { hookName } = await params;

  const metadata = hooksConfig.find((hook) => hook.name === hookName);

  if (!metadata) {
    notFound();
  }

  let code = "";
  try {
    code = getHookCode(hookName);
  } catch (error) {
    notFound();
  }



  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col py-24 px-8 md:px-16 bg-white dark:bg-black gap-10 sm:items-start">
        {/* Back Link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Hooks
        </Link>

        {/* Header Section */}
        <div className="flex flex-col gap-4 text-left w-full">
          <h1 className="text-4xl font-semibold leading-tight font-mono text-black dark:text-zinc-50">
            {hookName}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {metadata.description}
          </p>
        </div>

        {/* Code Block */}
        <div className="w-full flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
          {/* Code Block Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              {hookName}.tsx
            </span>
            <CopyButton code={code} />
          </div>
          {/* Code Body */}
          <div className="p-4 md:p-6 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}

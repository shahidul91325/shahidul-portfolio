import Link from "next/link";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 py-24 bg-[#070a12] text-white">
      <div className="max-w-md w-full p-8 rounded-3xl bg-[#0b1222] border border-slate-800 text-center shadow-2xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-bold text-sky-400 uppercase tracking-widest">
            Error 404
          </p>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page or project case study you are looking for does not exist or may have been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition shadow-md shadow-sky-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-sky-500/30 transition"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

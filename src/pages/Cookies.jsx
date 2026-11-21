import { usePageTitle } from "@/lib/usePageTitle";
export default function Cookies() {
  usePageTitle("Cookies");
  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold">Cookies</h1>
      <p className="mt-6 leading-relaxed">La aplicación no instala cookies de analítica ni de publicidad.</p>
    </article>
  );
}

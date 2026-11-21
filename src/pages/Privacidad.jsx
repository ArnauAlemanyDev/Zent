import { usePageTitle } from "@/lib/usePageTitle";
export default function Privacidad() {
  usePageTitle("Privacidad");
  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold">Privacidad</h1>
      <p className="mt-6 leading-relaxed">Esta demo se puede recorrer sin enviar datos personales. Los enlaces a herramientas externas abren sitios con sus propias políticas.</p>
    </article>
  );
}

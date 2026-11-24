import { usePageTitle } from "@/lib/usePageTitle";
export default function AvisoLegal() {
  usePageTitle("Aviso legal");
  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold">Aviso legal</h1>
      <p className="mt-6 leading-relaxed">Zent es una marca ficticia creada para presentar este proyecto de desarrollo web. Los servicios y datos de contacto son ilustrativos.</p>
    </article>
  );
}

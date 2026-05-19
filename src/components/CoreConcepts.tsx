import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section className="flex flex-col items-center gap-8">
        <h2 className="flex items-center justify-center text-white text-2xl">Core Concepts</h2>
        <ul className="flex items-center justify-center bg-slate-800 px-6 py-6 gap-2 rounded-lg">
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem}  />
          ))}
        </ul>
      </section>
  )
}
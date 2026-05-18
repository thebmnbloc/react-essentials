import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {

  const [ selectedButton, setSelectedButton] = useState("");

  function handleSelect(selectedButton) {
    setSelectedButton(selectedButton);
  }

  let tabButton = <p className="text-center">Please select topic.</p>;
  if (selectedButton) {
    tabButton = (<div className="flex flex-col items-center justify-center gap-4">
      <h3 className="text-gray-500">{EXAMPLES[selectedButton].title}</h3>
      <p className="text-gray-500">{EXAMPLES[selectedButton].description}</p>
      <pre className="bg-slate-800 px-6 rounded-2xl py-3">
        <code>
          {EXAMPLES[selectedButton].code}
        </code>
      </pre>
    </div>
    )
  };
  

  return (
    <>
    <div className="min-h-screen bg-indigo-900 flex flex-col items-center p-8 gap-12">
      <Header />
      <main className="flex flex-col gap-8">
        <section className="flex flex-col items-center gap-8">
          <h2 className="flex items-center justify-center text-white text-2xl">Core Concepts</h2>
          <ul className="flex items-center justify-center bg-slate-800 px-6 py-6 gap-2 rounded-lg">
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem}  />
            ))}
          </ul>
        </section>
        <section className="flex flex-col itmes-center justify-center gap-6 ">
          <h2 className="text-center text-2xl text-white">Example</h2>
          <menu className="flex items-center justify-center gap-2">
            <TabButton 
            isSelected={ selectedButton === 'components' }
            onSelect={() => handleSelect('components')} >components</TabButton>
            <TabButton 
            isSelected={ selectedButton === 'jsx' }
            onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton 
            isSelected={ selectedButton === 'props' }
            onSelect={() => handleSelect('props')} >Props</TabButton>
            <TabButton 
            isSelected={ selectedButton === 'state' }
            onSelect={() => handleSelect('state')} >State</TabButton>
          </menu>
          <div>{tabButton}</div>
        </section>
      </main>
    </div>
    </>
  )
}

export default App;

import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";

export default function Examples() {
  const [ selectedButton, setSelectedButton] = useState("");
  
    function handleSelect(selectedButton) {
      setSelectedButton(selectedButton);
    }
  
    let tabButton = <p className="text-center">Please select topic.</p>;
    if (selectedButton) {
      tabButton = (
        <div className="flex flex-col items-center justify-center gap-4">
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
    <Section title="Example" className="flex flex-col itmes-center justify-center gap-6 ">
      {/* <h2 className="text-center text-2xl text-white">Example</h2> */}
      <menu className="flex items-center justify-center gap-2">
        <TabButton 
        isSelected={ selectedButton === 'components' }
        onClick={() => handleSelect('components')} >components</TabButton>
        <TabButton 
        isSelected={ selectedButton === 'jsx' }
        onClick={() => handleSelect('jsx')} >JSX</TabButton>
        <TabButton 
        isSelected={ selectedButton === 'props' }
        onClick={() => handleSelect('props')} >Props</TabButton>
        <TabButton 
        isSelected={ selectedButton === 'state' }
        onClick={() => handleSelect('state')} >State</TabButton>
      </menu>
      <div>{tabButton}</div>
    </Section>
  );
}
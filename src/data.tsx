import ComponentsImg from "./assets/react.svg"
import PropImg from "./assets/react.svg";
import JSXImg from "./assets/react.svg";
import StateImg from "./assets/react.svg";

export const EXAMPLES = {
  components: {
    title:'components',
    description:'Components are UI building blocks for react applications',
    code:`
    function component() {
      return  <div>
        <h2>component section</h2>
        <p>Hello, components!</p>
      </div>
    }
    `
  },
  jsx: {
    title:'JSX',
    description:'JSX is HTML in JS, for rendering UI',
    code:`
    function component() {
      return <div>
        <h2>jsx section</h2>
        <p>Hello, jsx!</p>
      </div>
    }
    `
  },
  props: {
    title:'props',
    description:'Props handle data passing from parent components down to child components.',
    code:`
    function prop() {
      return <div>
      <h2>Prop Section</h2>
      <p>Hello, props!</p>
      </div>
    }
    `
  },
  state: {
    title:'state',
    description:'State is responsible for dynamic UI rendering',
    code:`
    function component() {
      return <div>
        <h2>Component section</h2>
        <p>Hello, state!</p>
      </div>
    }
    `
  }
};


export const CORE_CONCEPTS = [
  {
    title: 'Components',
    description: 'The Core UI building blocks',
    image: ComponentsImg
  },
  {
    title: 'JSX',
    description: 'HTML in JS code',
    image: JSXImg
  },
  {
    title: 'Props',
    description: 'The Core idea behind component configuration',
    image: PropImg
  },
  {
    title: 'State',
    description: 'UI state management concepts',
    image: StateImg
  },
];
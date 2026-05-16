import ReactImg from "../../assets/react.svg";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

  const descriptions = reactDescriptions[genRandomInt(2)];
   
  return <header className="text-white flex flex-col items-center gap-8">
        <img src={ReactImg} alt='logo' />
        <h1 className="text-6xl">React Essentials</h1>
        <p>{descriptions} React concepts you will need for almost any app you are going to build!</p>
  </header>
}
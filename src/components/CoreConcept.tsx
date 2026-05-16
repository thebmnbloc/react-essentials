export default function CoreConcept( {image, title, description} ) {
  return <div className="bg-indigo-600 px-6 py-2 rounded-md">
    <img src={image} alt="logo" />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
}
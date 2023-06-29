import './index.css'

const ProjectCard = props => {
  const {projectCardDetails} = props
  const {name, imageUrl} = projectCardDetails

  return (
    <li className="list-class">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default ProjectCard


interface TagProps {
  tag: string;
  background: string;
  color: string
}

function Tag({tag, background, color} : TagProps) {
  return (
    <div className="badge badge-neutral" key={tag} style={{background, color}}>{tag}</div>
  )
}

export default Tag;


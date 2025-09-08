import { animatePageOut } from "../animations";
import { useNavigate } from "react-router-dom";

export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const navigate = useNavigate();

  function handleClick() {
    animatePageOut(() => {
      navigate(href);
    });
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  text,
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const styles = `
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-full
    bg-[#3F5B4B]
    text-[#FFF8EE]
    font-medium
    tracking-wide
    transition-all
    duration-300
    hover:bg-[#D98B9A]
    hover:scale-105
    active:scale-95
    shadow-md
    ${className}
  `;

  if (href) {
    return (
      <Link to={href} className={styles}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {text}
    </button>
  );
}
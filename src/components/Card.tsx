import { ReactNode } from "react";

interface cardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: cardProps) => {
  return <div className={`card bg-secondary  ${className}`}>{children}</div>;
};

export default Card;

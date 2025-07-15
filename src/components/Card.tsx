import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  to: string;
}

const Card: React.FC<CardProps> = ({ title, to }) => (
  <Link
    to={to}
    className="block p-4 border rounded shadow-sm hover:shadow-md transition bg-white hover:bg-gray-50"
  >
    <span className="text-blue-600 font-medium">{title}</span>
  </Link>
);

export default Card;
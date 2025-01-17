const Card = ({ children, bgStyle='bg-gray-100' }) => {
  return <div className={`${bgStyle} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;

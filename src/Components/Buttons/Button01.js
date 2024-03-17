const Button01 = ({ title, onClick, type, backgroundColor, hover }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        outline: "none",
        border: "none",
        height: 50,
        transition: "opacity 0.3s", // Add transition for smooth hover effect
      }}
      type={type}
      onClick={onClick ? onClick : null}
      className=" rounded-4 p-2 w-100 text-white p-3 fs-6 fw-bold border-none"
      onMouseEnter={(e) => (e.target.style.backgroundColor = hover)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = backgroundColor)}
    >
      {title}
    </button>
  );
};

export default Button01;

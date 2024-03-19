import React from 'react'

const HaedMain01 = () => {
  return (
    <div className="p-3 d-flex align-items-center justify-content-between  w-100">
    <div className="d-flex align-items-center justify-content-start gap-3">
    <span className="d-flex align-items-start flex-column">
      <img
        src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="profile-pic"
        width={50}
        height={50}
        style={{
          borderRadius: "50%",
        }}
      />
    </span>
    <span className="d-flex align-items-start flex-column">
      <span className="fs-5 d-flex align-items-center">
        <span className="fw-bold greeting">Hello, Siddhesh More</span>👋
      </span>
      <span className="web-text-small fw-bold">msiddhesh008@gmail.com</span>
    </span>
    </div>
    </div>
  )
}

export default HaedMain01
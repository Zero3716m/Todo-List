import React from 'react'

export default function Footer() {
  let footerStyle={
      position: "RELATIVE",
      top: "10vh",
      width: "100%"
    }
  return (
    <div className="mt-5 bg-dark text-light text-center py-3" style={footerStyle}>
        Contact Us:+91 XXXXXXXXXX | Copyright &copy; MyTodosList.com
    </div>
  )
}

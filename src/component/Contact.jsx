import React from 'react'
import Style from "../component/contact.module.css"
const Contact = () => {
  return (
    <div className={Style.contactpage}>
      
    <div className={Style.contact}>
      <h1>CONTACT ME</h1>
      <table>
        <tr>
          <th>Name:</th>
          <td><input type="text" required placeholder='Enter your name' /></td>
        </tr>
        <tr>
          <th>Email id:</th>
          <td><input type="text" required placeholder='Enter your email' /></td>
        </tr>
        <tr>
          <th>Your contact number:</th>
          <td><input type="text" required placeholder='Enter your contact number' /></td>
        </tr>
        <tr>
          <th>Your message:</th>
          <td>
            <textarea name="Your message" id="" cols="30" rows="10"></textarea>
          </td>
        </tr>
      </table>
    </div>
    </div>
  )
}

export default Contact
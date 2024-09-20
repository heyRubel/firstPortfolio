import './Contact.css'

const Contact = () => {
  return (
    <div id='contact' className='contact_container'>
      <h1>CONTACT ME</h1>
      <div className="icons_container">
        <a target='_blank' href="https://www.google.com"><i class="fa-brands fa-instagram"></i></a>
        <a target='_blank' href="https://www.google.com"><i class="fa-brands fa-facebook"></i></a>
        <a target='_blank' href="https://www.google.com"><i class="fa-brands fa-linkedin"></i></a>
        <a target='_blank' href="https://www.google.com"><i class="fa-brands fa-x-twitter"></i></a>
        <a target='_blank' href="https://www.google.com"><i class="fa-brands fa-github"></i></a>
        <a target='_blank' href="https://www.google.com"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>
  )
}

export default Contact

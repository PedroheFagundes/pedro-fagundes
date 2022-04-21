import type { NextPage } from 'next'
import axios from "axios";
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SocialCard from '../components/SocialCard';


const Contact: NextPage = () => {

  const [state, setState] = React.useState<any>({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: any) {
    if (e.target.files) {
      setState({ ...state, [e.target.name]: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    let formData = new FormData();

    for (let [key, value] of Object.entries<any>(state)) {
      formData.append(key, value);
    }

    // Use fetch or axios to submit the form
    await axios
      .post("https://formeezy.com/api/v1/forms/62612b6e67d10b00092d2b86/submissions", formData)
      .then(({ data }) => {
        const { redirect } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      })
      .catch((e: { response: { data: { redirect: string; }; }; }) => {
        window.location.href = e.response.data.redirect;
      });
  }

  return (
    <div className='d-flex column align-items-center container-fluid p-0 col-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 col-xxl-10'>
      <div className="h150"></div>
      <SectionHeader
        tinyDesc="Let's talk!"
        longDesc="Send me a message by the form or any media bellow"
      />
      <form onSubmit={handleSubmit} className='row col-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 d-flex justify-content-center'>
        <span className='text-white fs-3'>Name:</span>
        <input
          className='mb-3 p-2 bg-input-light rounded'
          name="name"
          type="name"
          onChange={handleChange}
          value={state.name}
          required
        />
        <span className='text-white fs-3'>E-mail:</span>
        <input
          className='mb-3 p-2 bg-input-light rounded'
          name="email"
          type="email"
          onChange={handleChange}
          value={state.email}
          required
        />
        <span className='text-white fs-3'>Message:</span>
        <textarea
          className='mb-3 p-2 bg-input-light rounded'
          name="message"
          onChange={handleChange}
          value={state.message}
          required
        />
        <input
          className='mb-3 p-2 bg-input-light rounded'
          name="bot-field"
          type="text"
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <button type="submit" className=" col-10 col-sm-6 col-md-5 col-lg-4 cursor text-white btn btn-outline-secondary rounded-pill p-3 fw-bold fs-5 d-flex align-items-center justify-content-center mb-5">Send Message</button>
      </form>
      <div className="col-11 col-sm-10 col-md-9 col-lg-9 col-xl-8 col-xxl-8 d-flex justify-content-around align-items-center text-white-50 mt-2">
        <SocialCard
          link='https://www.linkedin.com/in/pedrofagundes/'
          margin={2}
          icon='linkedin'
          name='LinkedIn'
        />
        <SocialCard
          link='https://github.com/PedroheFagundes'
          margin={2}
          icon='github'
          name='Github'
        />
        <SocialCard
          link='mailto:pedrohefagundes@gmail.com'
          margin={2}
          icon='envelope-fill'
          name='E-Mail'
        />
        <SocialCard
          link='https://www.upwork.com/freelancers/~0189cabd19217d74f9'
          margin={2}
          icon='code-slash'
          name='UpWork'
        />
      </div>
    </div>
  )
}

export default Contact

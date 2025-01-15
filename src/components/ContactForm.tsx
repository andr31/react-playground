import React, { useState } from 'react';

import sgMail from '@sendgrid/mail';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailError) {
      // Handle form submission
      console.log({ firstName, lastName, email, message });
      sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);
      const msg = {
        to: email, // Change to your recipient
        from: 'habuc4@gmail.com', // Change to your verified sender
        subject: `Request Moonwave from ${firstName} ${lastName}`,
        text: message,
        html: '<strong>Sendgrid Test Email Template</strong>',
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="flex justify-center bg-[#e8e8e1] flex-col lg:flex-row lg:ml-10">
      <div className="flex-grow">
        <form onSubmit={handleSubmit} className="bg-[#dbccc3] p-5">
          <div className="m-10">
            <div className="mb-4 text-center font-bold text-2xl">
              Let's Talk!
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">First Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-l-full rounded-r-full bg-[#e8e8e1]"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Last Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded-l-full rounded-r-full bg-[#e8e8e1]"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Email:</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-l-full rounded-r-full bg-[#e8e8e1]"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <span className="text-red-500">{emailError}</span>}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Message:</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-l-2xl rounded-r-2xl bg-[#e8e8e1]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="p-2 bg-black text-white rounded">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex-grow min-w-fit">
        <div className="hidden md:flex-row md:flex md:h-full md:justify-center md:items-center">
          {/*<h1 className="absolute mb-[320px] font-madelyn text-4xl sm:text-5xl md:text-6xl"> Craft The Perfect Memory</h1>*/}
          <img
            src="/static/images/Luna_1.jpg"
            alt="Contact"
            className="w-48 h-72 rounded-lg"
          />
          <img
            src="/static/images/Luna.jpg"
            alt="Contact"
            className="w-48 h-72 rounded-lg absolute mt-[3rem] ml-[8rem] z-10"
          />
          <div className="w-48 h-72"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React, { useState } from 'react';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setEmailError('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailError) {
      setSubmitStatus('loading');
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            message,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          setSubmitStatus('success');
          resetForm();
          setTimeout(() => setSubmitStatus('idle'), 5000);
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      }
    }
  };

  return (
    <div className="flex justify-center bg-[#e8e8e1] flex-col lg:flex-row lg:ml-10">
      <div className="flex-grow max-w-4xl">
        <form onSubmit={handleSubmit} className="bg-[#dbccc3] p-5">
          <div className="m-10">
            <div className="mb-4 text-center font-bold text-2xl">
              Let's Talk!
            </div>
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
                Sorry, something went wrong. Please try again.
              </div>
            )}
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
            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className={`px-10 py-6 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-300 mt-5 ${
                submitStatus === 'loading'
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              {submitStatus === 'loading' ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
      <div className="flex-grow min-w-fit pb-10 pt-5 lg:pb-0 lg:pt-0">
        <div className="hidden md:flex-row md:flex md:h-full md:justify-center md:items-center">
          {/*<h1 className="absolute mb-[320px] font-madelyn text-4xl sm:text-5xl md:text-6xl"> Craft The Perfect Memory</h1>*/}
          <img
            src="/static/images/Luna_1.jpg"
            alt="Contact"
            className="w-60 h-82 lg:w-[300px] rounded-lg"
          />
          <img
            src="/static/images/Luna.jpg"
            alt="Contact"
            className="w-60 h-82 lg:w-[300px] rounded-lg absolute mt-[3rem] ml-[20rem] z-10"
          />
          <div className="w-48 h-72"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

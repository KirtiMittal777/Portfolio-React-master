import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // For loading spinner
  const [isFading, setIsFading] = useState(false); // For message fade-out effect

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner

    emailjs
      .sendForm('service_0zymjgc', 'template_8niwkfp', form.current, {
        publicKey: 'rVjfDiknScA19M-v3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
          setError(false);
          setLoading(false); // Stop showing loading spinner
          
          // Gradually clear the form fields
          setTimeout(() => {
            form.current.reset(); // Clear the form after slight delay for smooth transition
          }, 500);

          // Hide message after 5 seconds
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              setMessageSent(false);
              setIsFading(false); // Reset fade status for future messages
            }, 500);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
          setLoading(false); // Stop loading spinner on error
        }
      );
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">Contact</h2>
        <form className="max-w-xl mx-auto space-y-6" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg transition-all duration-500 ease-in-out"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg transition-all duration-500 ease-in-out"
          />
          <textarea
            name="message"
            required
            placeholder="Write Message Here..."
            className="w-full p-4 border outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 rounded-lg transition-all duration-500 ease-in-out"
          />

          {/* Send Button with Spinner */}
          <button
            type="submit"
            className="w-full px-6 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 ease-in-out flex justify-center items-center"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              // Loading Spinner
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              'Send'
            )}
          </button>
        </form>

        {/* Success or Error Message with Fade Effect */}
        {messageSent && (
          <p
            className={`text-green-500 text-center mt-4 transition-opacity duration-500 ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Thank you! Your message has been sent.
          </p>
        )}
        {error && (
          <p
            className={`text-red-500 text-center mt-4 transition-opacity duration-500 ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
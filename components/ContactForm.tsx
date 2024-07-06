import React from "react";

function ContactForm() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-gray-900">Call us or use the form below.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-8 md:space-y-0">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-xl font-semibold text-gray-900">International Customers</h2>
            <p className="text-gray-900">Please see our list of distributors to find the nearest one to you.</p>
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-xl font-semibold text-gray-900">Technical Support</h2>
            <p className="text-gray-900">To create a ticket, please use the submission form.</p>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div className="md:w-1/3">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-900">U.S.A.</h3>
                <p className="text-gray-900">1-888-865-0435</p>
              </div>
              <div className="text-center md:text-left mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Europe</h3>
                <p className="text-gray-900">+33 (0) 970 44 99 11</p>
              </div>
              <div className="text-center md:text-left mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Other Regions</h3>
                <p className="text-gray-900">1-541-753-6645</p>
              </div>
              <div className="text-center md:text-left mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Fax</h3>
                <p className="text-gray-900">1-541-753-6689</p>
              </div>
              <div className="text-center md:text-left mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Mailing Address</h3>
                <p className="text-gray-900">
                  Nuarbion, Inc.<br />
                  P.O. Box 2177<br />
                  Corvallis, OR 97339
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Sales Inquiries</h3>
              <p className="text-gray-900 mb-4">
                For sales inquiries and product information, please complete the below form and an OptiTrack Sales Representative will get back to you.
                By submitting this form you acknowledge that you have read, understood and agree to our <a href="#" className="text-blue-500 underline">Terms and Conditions</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
              </p>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-900">First Name*</label>
                    <input type="text" className="mt-1 block w-full border-gray-500 rounded-md py-2 px-4 h-10 focus:border-blue-500 focus:ring-blue-200" required />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-900">Last Name*</label>
                    <input type="text" className="mt-1 block w-full border-gray-500 rounded-md py-2 px-4 h-10 focus:border-blue-500 focus:ring-blue-200" required />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-900">Company*</label>
                    <input type="text" className="mt-1 block w-full border-gray-500 rounded-md py-2 px-4 h-10 focus:border-blue-500 focus:ring-blue-200" required />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-900">Application*</label>
                    <input type="text" className="mt-1 block w-full border-gray-500 rounded-md py-2 px-4 h-10 focus:border-blue-500 focus:ring-blue-200" required />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-900">Email*</label>
                    <input type="email" className="mt-1 block w-full border-gray-500 rounded-md py-2 px-4 h-10 focus:border-blue-500 focus:ring-blue-200" required />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-900">Phone</label>
                    <input type="text" className="mt-1 block w-full border-gray-500 rounded-md py-2 px-4 h-10 focus:border-blue-500 focus:ring-blue-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-900">Country*</label>
                  <select className="mt-1 block w-full border-gray-500 rounded-md py-2 px-4 h-10 focus:border-blue-500 focus:ring-blue-200" required>
                    <option>Please select a country</option>
                    {/* Add country options here */}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-900">Comments*</label>
                  <textarea className="mt-1 block w-full border-gray-500 rounded-md py-2 px-4 focus:border-blue-500 focus:ring-blue-200" rows={4} required></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 rounded" />
                  <label className="ml-2 block text-gray-900">Sign up for emails to hear the latest from OptiTrack.</label>
                </div>
                <div>
                  <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

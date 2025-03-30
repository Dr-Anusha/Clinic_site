import React from 'react'

const Contact = () => {
  return (
    <section className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
        <p className="mt-4 text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6487689189394!2d80.26798747507794!3d13.058014587265383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670013b6305f%3A0xaa475ea817f655db!2sDEXTERITY%20PHYSIO%20CARE!5e0!3m2!1sen!2sin!4v1743008565135!5m2!1sen!2sin"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="max-w-full mx-auto rounded-lg overflow-hidden bg-white shadow-lg">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
              <p className="mt-1 text-gray-600">No.36, Jani Jhan Khan Road, S.K's Integrated medical wellness center,First Floor, Royapettah, Chennai-600014</p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Hours</h3>
              <p className="mt-1 text-gray-600">Monday - Friday: 5pm - 9pm</p>
              {/* <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p> */}
              <p className="mt-1 text-gray-600">Sunday: Closed</p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Contact</h3>
              <p className="mt-1 text-gray-600">Email: <a href="mailto:dexterityphysiotheropy@gmail.com" className="text-blue-600">dexterityphysiotheropy@gmail.com</a></p>
              <p className="mt-1 text-gray-600">Phone: <a href="tel:9080500387" className="text-blue-600">+91 90805 00387</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
import React from 'react';

const Map = () => {
  return (
    <div>
      <h1>Map</h1>
      <p>Interactive map of coastal areas and emergency services.</p>
      <div style={{ display: 'flex' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126123.123456789!2d79.9584!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b1f1f1f1f1f%3A0x1234567890abcdef!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126123.123456789!2d79.9584!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b1f1f1f1f1f%3A0x1234567890abcdef!2sHospitals%20near%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126123.123456789!2d79.9584!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b1f1f1f1f1f%3A0x1234567890abcdef!2sHospitals%20near%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

    </div>
  );
};

export default Map;

import React from 'react';
import SectionHeader from '../sectioinHeader/SectionHeader';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <SectionHeader id="contact" title="How can you communicate?" subtitle="Contact Us" />
      <ContactForm />
    </>
  );
};

export default Contact;

import React from 'react';
import ContactPage from '../src/components/contact';

function ContactUs() {
  return (
    <div style={{ width: '100%', margin: 0, backgroundColor: '#F8FAFC' }}>
      <ContactPage />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default ContactUs;

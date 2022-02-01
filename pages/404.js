import React from 'react';

export default function Custom404() {
  return <h1>404 - Page Not Found -Sorry!</h1>;
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
}

import api from './../../../lib/api/api';

function useUser({ data }) {
  // Render data...
  console.log(data, 'data');
  return data;
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data = await api.get('users');
  console.log(data, 'res');

  // Pass data to the page via props
  return { props: { data } };
}

export default useUser;

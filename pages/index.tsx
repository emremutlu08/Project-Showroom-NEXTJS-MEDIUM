/* COMPONENTS */
import Main from '../src/components/Main';
import api from '../lib/api/api';

/* CONTEXTS */
import { GeneratedContext } from '../src/components/Contexts';

export default function IndexPage(props: any) {
  return (
    <GeneratedContext.Provider value={props}>
      <Main />
    </GeneratedContext.Provider>
  );
}

export async function getStaticProps() {
  const projects = await api.get('projects');
  return {
    props: {
      projects: projects.data,
    },
  };
}

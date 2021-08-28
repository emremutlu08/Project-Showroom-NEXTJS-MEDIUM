import type { NextApiResponse } from "next";

import api from "./../../../lib/api";

const searchCourses = async (_: any, res: NextApiResponse) => {
  //   const search = "Implement High Fidelity Designs with Material-UI and ReactJS";
  //   const search = "Implement-High-Fidelity-Designs-with-Material-UI-and-ReactJS";
  const search = "GraphQL-by-Example"; // Aramaları Aralarına tire koyarak yap
  const result = await api.get("courses/", { params: { search } });

  console.log(result.data.results[0], "search.ts", ":7");

  res.status(200).json({ response: "OK" });
  return result.data.results[0];
};

export default searchCourses;

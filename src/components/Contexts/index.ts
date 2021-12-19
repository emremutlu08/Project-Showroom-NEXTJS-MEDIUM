/* REACT */
import React from 'react';

interface ProjectsContextInterface {
  projects: {
    success: boolean;
    data: Array<any>;
    message: string;
    loading: boolean;
  };
}

export const GeneratedContext =
  React.createContext<ProjectsContextInterface | null>(null);

export interface Project {
  id: number;
  title: string;
  owner: string;
  status: string;
  email: string;
  dni: string;
  direccion: string;
  ciudad: string;
  pais: string;
  message?: string;
}

export interface User {
  name: string;
  email: string;
  dni: string;
  direccion: string;
  ciudad: string;
  pais: string;
}

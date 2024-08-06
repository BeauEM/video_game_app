//interface for game trailer objects for use in custom useTrailers hook

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

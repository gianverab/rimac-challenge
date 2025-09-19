export type User = {
  name: string;
  lastName: string;
  birthDay: string; // "dd-mm-yyyy" (según tu JSON)
};

export type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number; // edad máxima o tope para el plan
};

export type PlansResponse = {
  list: Plan[];
};

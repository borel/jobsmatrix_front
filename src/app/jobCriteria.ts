export interface jobsCriteria {
  companies: Company[];
}

export interface Company {
  name : string;
  realValue: string;
  ponderateValue: string;
}

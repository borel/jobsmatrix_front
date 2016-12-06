export interface jobsCriteria {
  nameCriteria : string;
  companies: Company[];
}

export interface Company {
  nameCompany : string;
  realValue: string;
  ponderateValue: string;
}

export interface jobsCriteria {
  criterias: Criteria[];
}

export interface Criteria {
  nameCriteria : string;
  companies: Company[];
}

export interface Company {
  nameCompany : string;
  realValue: string;
  ponderateValue: string;
}

export interface Business {
  businessName: string;
  address: string;
  groupName: string;
  contactinfo: Contact[];
}

export interface Contact {
  type: string;
  name: string;
  legalName: string;
  phoneNumber: string;
  emailAddress: string;
}

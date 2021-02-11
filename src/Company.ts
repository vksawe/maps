import faker from "faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }
  markerContent(): string {
    return `<div>
    <h1>name: ${this.name}</h1>
        <h3>catchphrase:${this.catchPhrase}</h3>
        <div>`;
  }
}

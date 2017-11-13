import { Injectable } from '@angular/core';

@Injectable()
export class DbServiceService {

  constructor() { }

  getAllData() {
    console.log('Retrieving all Data from DB');
  }

  saveAllData(data) {
    console.log('Saving all Data to DB:', data);
  }

  updateData(data) {
    console.log('Saving Object to DB:', data);
  }

}

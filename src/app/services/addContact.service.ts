import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact } from '../shared/model/contactmodel';

@Injectable({
  providedIn: 'root'
})
export class AddContactService {

  constructor(private http:HttpClient) { }

  url: string= 'http://localhost:3000/contacts';

//post method

addContact(data:contact){
  return this.http.post<contact>(this.url,data)
}


//get method

getContact(){
  return this.http.get<contact[]>(this.url)

}

//delete method
deleteContact(id:number){
  return this.http.delete<contact>(`${this.url}/${id}`);
  }

//fetchdata for Update

fetch(id:number){
  return this.http.get<contact>(`${this.url}/${id}`)
}

//update

updatecontact(data:contact, id:number){
  return this.http.put<contact>(`${this.url}/${id}`,data);
}
}

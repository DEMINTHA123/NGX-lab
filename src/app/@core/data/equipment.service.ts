import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  getData() {
    throw new Error("Method not implemented.");
  }

  configUrl: string = 'https://localhost:44347';

  constructor(private http: HttpClient) { }

  getEquipment(): Observable<any>{
    return this.http.get(this.configUrl+'/api/Equipment');
  }
  postEquipment(requestBody: any): Observable<any>{
    return this.http.post(this.configUrl+'/api/Equipment',requestBody);
  }
  deleteEquipment(id: any): Observable<any>{
    return this.http.delete(this.configUrl+`/api/Equipment/${id}`);
  }
  editEquipment(id: any, chemicals:any): Observable<any>{
    return this.http.put(this.configUrl+`/api/Equipment/${id}`,chemicals);
  }
}

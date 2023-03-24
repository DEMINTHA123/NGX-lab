import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChemicalsService {
  getData() {
    throw new Error("Method not implemented.");
  }

  configUrl: string = 'https://localhost:44347';

  constructor(private http: HttpClient) { }

  getChemicals(): Observable<any>{
    return this.http.get(this.configUrl+'/api/Chemicals');
  }
  postChemicals(requestBody: any): Observable<any>{
    return this.http.post(this.configUrl+'/api/Chemicals',requestBody);
  }
  deleteChemicals(id: any): Observable<any>{
    return this.http.delete(this.configUrl+`/api/Chemicals/${id}`);
  }
  editChemicals(id: any, chemicals:any): Observable<any>{
    return this.http.put(this.configUrl+`/api/Chemicals/${id}`,chemicals);
  }
}

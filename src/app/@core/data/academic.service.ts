import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AcademicService {
  
  getData() {
    throw new Error("Method not implemented.");
  }

  configUrl: string = 'https://localhost:44347';

  constructor(private http: HttpClient) { }

  getAcademic(): Observable<any>{
    return this.http.get(this.configUrl+'/api/Academic');
  }
  postAcademic(requestBody: any): Observable<any>{
    return this.http.post(this.configUrl+'/api/Academic',requestBody);
  }
  deleteAcademic(id: any): Observable<any>{
    return this.http.delete(this.configUrl+`/api/Academic/${id}`);
  }
  editAcademic(id: any, academic:any): Observable<any>{
    return this.http.put(this.configUrl+`/api/Academic/${id}`,academic);
  }

  getNonAcademic(): Observable<any>{
    return this.http.get(this.configUrl+'/api/NonAcademics');
  }
  postNonAcademic(requestBody: any): Observable<any>{
    return this.http.post(this.configUrl+'/api/NonAcademics',requestBody);
  }
  deleteNonAcademic(id: any): Observable<any>{
    return this.http.delete(this.configUrl+`/api/NonAcademics/${id}`);
  }
  editNonAcademic(id: any, NonAcademic:any): Observable<any>{
    return this.http.put(this.configUrl+`/api/NonAcademics/${id}`,NonAcademic);
  }
}



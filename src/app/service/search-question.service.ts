import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchQuestionService {

  constructor(
    private _http: HttpClient
  ) { }


  searchQuestion(body) { 
    const url = 'https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow';
    let para = {};
    para['q'] = "data of routing";
    para['sort'] = "votes";
    para['order'] = "desc";
    return this._http.get(url, {params: body});
  }
}

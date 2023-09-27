import { Injectable } from "@angular/core";
import { Title } from "./models/title";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class MoviesAwardsService {

  readonly movieAwardsAPIUrl = "https://localhost:44395/api";

  constructor(private http:HttpClient) { }

  getAllTitles():Observable<Title[]> {
    return this.http.get<any>(this.movieAwardsAPIUrl + "/titles");
  }

  getTitleById(id: number):Observable<Title> {
    return this.http.get<any>(this.movieAwardsAPIUrl + `/titles/${id}`);
  }

  addTitle(data:Title) {
    return this.http.post(this.movieAwardsAPIUrl + "/titles", data);
  }

  updateTitle(id:number, data:Title) {
    return this.http.put(this.movieAwardsAPIUrl + `/titles/${id}`, data);
  }

  deleteTitle(id:number) {
    return this.http.delete(this.movieAwardsAPIUrl + `/titles/${id}`);
  }
}

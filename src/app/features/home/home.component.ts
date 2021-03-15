import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get year(): string {
    return (new Date(Date.now())).getFullYear().toString()
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://dunkelheit-draper-medium-rss-parser.vercel.app/api').subscribe((res) => {
      console.log(res)
    })
  }

}

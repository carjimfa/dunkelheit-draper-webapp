import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {RssResponse} from './rss-response';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  rss = new RssResponse();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://dunkelheit-draper-medium-rss-parser.vercel.app/api').subscribe((res) => {
      this.rss = plainToClass(RssResponse, res);
    });
  }

  get year(): string {
    return (new Date(Date.now())).getFullYear().toString();
  }
}

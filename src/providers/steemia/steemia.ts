import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_API = 'https://steepshot.org/api/steemia/v1_1/';
const POSTS_BASE = BASE_API + 'posts/'
const HOT_POSTS = BASE_API + 'posts/hot?';
const NEW_POSTS = BASE_API + 'posts/new?';
const TOP_POSTS = BASE_API + 'posts/top?';


@Injectable()
export class SteemiaProvider {

  constructor(public http: HttpClient) {
   
  }

}

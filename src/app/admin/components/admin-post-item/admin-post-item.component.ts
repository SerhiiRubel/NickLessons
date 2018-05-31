import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../core/models/post';

@Component({
  selector: 'app-admin-post-item',
  templateUrl: './admin-post-item.component.html',
  styleUrls: ['./admin-post-item.component.css']
})
export class AdminPostItemComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}

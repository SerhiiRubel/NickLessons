import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-comments',
  templateUrl: './admin-comments.component.html',
  styleUrls: ['./admin-comments.component.css']
})
export class AdminCommentsComponent implements OnInit {
  @Input() comments: Comment[] = [];
  constructor() { }

  ngOnInit() {
  }

}

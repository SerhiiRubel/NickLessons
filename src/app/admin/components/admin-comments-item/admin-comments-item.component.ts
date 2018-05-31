import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-comments-item',
  templateUrl: './admin-comments-item.component.html',
  styleUrls: ['./admin-comments-item.component.css']
})
export class AdminCommentsItemComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit() {
  }

}

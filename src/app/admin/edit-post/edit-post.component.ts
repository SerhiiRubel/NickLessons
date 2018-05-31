import { Component, OnInit } from '@angular/core';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../core/posts.service';
import { Post } from '../../core/models/post';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  private post: Post;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        tap(() => {
          this.loading$.next(true);
        }),
        takeUntil(this.destroy),
        switchMap(params => this.loadPost(+params['id']))
      )
      .subscribe(
        post => {
          this.post = post;
          this.loading$.next(false);
        },
        err => {
          this.loading$.next(false);
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }

  private loadPost(id) {
    return this.postsService.detail(id);
  }
}

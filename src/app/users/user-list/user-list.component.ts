import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { BehaviorSubject, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../core/users.service';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  public page$ = new BehaviorSubject(1);
  public loading$ = new BehaviorSubject(true);
  public total: number = 0;
  private destroy = new Subject();
  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { console.log(this.usersService.list(1)); }

  ngOnInit() {
    this.page$.next(this.route.snapshot.params.page || 1);
    this.page$
      .asObservable()
      .pipe(
        tap(
          page => {
            page = parseInt(page.toString(), 10);
            if (!isNaN(page)) {
              this.router.navigate([{ page }]);
            }
          }),
        takeUntil(this.destroy),
        switchMap( page => {
          this.loading$.next(true);
          return this.usersService.list(page);
        })
      )
      .subscribe(
        res => {
          this.loading$.next(false);
          this.users = res.data;
          this.total = res.total;
        },
        () => {
          this.loading$.next(false);
        }
      );
  }
  public changePage(page: number) {
    this.page$.next(page);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }
}

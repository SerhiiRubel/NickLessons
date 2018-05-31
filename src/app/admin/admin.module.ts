import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPostListComponent } from './admin-post-list/admin-post-list.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminCommentsComponent } from './components/admin-comments/admin-comments.component';
import { AdminUserItemComponent } from './components/admin-user-item/admin-user-item.component';
import { AdminPostItemComponent } from './components/admin-post-item/admin-post-item.component';
import { AdminCommentsItemComponent } from './components/admin-comments-item/admin-comments-item.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbPaginationModule
  ],
  declarations: [
    AdminPostListComponent,
    AdminUserListComponent,
    EditPostComponent,
    EditUserComponent,
    AdminCommentsComponent,
    AdminUserItemComponent,
    AdminPostItemComponent,
    AdminCommentsItemComponent,
    AdminHeaderComponent,
    AdminComponent]
})
export class AdminModule { }

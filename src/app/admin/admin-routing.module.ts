import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminPostListComponent } from './admin-post-list/admin-post-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {
        path: 'users', children: [
          { path: '', component: AdminUserListComponent },
          { path: ':id', component: EditUserComponent }
        ]
      },
      {
        path: 'posts', children: [
          { path: '', component: AdminPostListComponent },
          { path: ':id', component: EditPostComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

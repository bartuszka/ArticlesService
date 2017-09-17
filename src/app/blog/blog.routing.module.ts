import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogMessageComponent } from "./blog-message/blog-message.component";
import { BlogComponent } from "./blog.component";
import { AuthGuardService } from "../shared/auth-guard.service";

const routes: Routes = [
    { path: '', component: BlogComponent, canActivateChild: [AuthGuardService],
        children: [
            { path: 'write-message', component: BlogMessageComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule {}
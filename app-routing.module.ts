import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { HomeComponent } from "src/app/home/home.component";
import { SearchComponent } from "src/app/search/search.component";

const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path:'search', component: SearchComponent }
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)] ,
    exports:[RouterModule]
})
export class AppRoutingModule{

}
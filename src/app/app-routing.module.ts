import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NotFoundComponent } from "./pages/notFound/notFound.component";
import { CreateComponent } from "./pages/create/create.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "create", component: CreateComponent },
  { path: "profile", component: ProfileComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

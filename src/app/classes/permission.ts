import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Auth } from "./auth";

export class Permission implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return Auth.canAccess(route.data);
    }


}

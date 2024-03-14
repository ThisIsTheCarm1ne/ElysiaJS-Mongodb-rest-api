import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static';
import { getListOfCities } from "./apiEndpoints/listOfCities/getListOfCities";
import { postListOfCities } from "./apiEndpoints/listOfCities/postListOfCities";
import { deleteCity } from "./apiEndpoints/listOfCities/deleteCity";
import { updateCity } from "./apiEndpoints/listOfCities/updateCity";
import { getUserListOfCities } from "./apiEndpoints/userListOfCities/getUsersListOfCities";
import { postUserListOfCities } from "./apiEndpoints/userListOfCities/postUsersListOfCities";

const app = new Elysia()
.use(staticPlugin({ 
  prefix: '/',
  alwaysStatic: true,
}))
.get("/", () => Bun.file("public/index.html"))
.get("/css/style", () => Bun.file("public/css/style.css"))
.use(getListOfCities)
.use(postListOfCities)
.use(deleteCity)
.use(updateCity)
.use(getUserListOfCities)
.use(postUserListOfCities)
.listen(3000);

/// make a request to an endpoint 
//app.handle(new Request('http://localhost/')).then(console.log)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

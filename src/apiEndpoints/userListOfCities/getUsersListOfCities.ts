import {
  Elysia,
} from "elysia";
import '../../database/db.setup';
import userListOfCities from '../../database/schemes/userListOfCities.scheme'

export const getUserListOfCities = new Elysia()
.get("/usersListOfCities", async ({ set }: Elysia.Set) => {
  try {
    const userListOfCitiesConst = await userListOfCities.find({});
    return userListOfCitiesConst;
  } catch (e: unknown) {
    set.status = 500;
    return {
      message: 'DB not worky :(',
      status: 500,
    };
  }
});

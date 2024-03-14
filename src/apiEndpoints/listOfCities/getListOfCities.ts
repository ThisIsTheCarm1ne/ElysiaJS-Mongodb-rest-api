import {
  Elysia,
} from "elysia";
import '../../database/db.setup';
import listOfCities from '../../database/schemes/listOfCities.schema'

export const getListOfCities = new Elysia()
.get("/cities", async ({ set }: Elysia.Set) => {
  try {
    const listOfCitiesConst = await listOfCities.find({});
    return listOfCitiesConst;
  } catch (e: unknown) {
    set.status = 500;
    return {
      message: 'DB not worky :(',
      status: 500,
    };
  }
});

import {
  Elysia,
} from "elysia";
import '../../database/db.setup';
import listOfCities from '../../database/schemes/listOfCities.schema'

export const postListOfCities = new Elysia()
.post("/cities", async (handler: Elysia.Handler) => {
  try {
    const newCity = new listOfCities();

    newCity.title = handler.body.title;
    newCity.firstMentioned = handler.body.firstMentioned;

    //console.log(newCity);
    const savedCity = await newCity.save();

  } catch (e: any) {
    handler.set.status = 500;
    return {
      message: 'DB not saving :(',
      status: 500,
    };
  }
});

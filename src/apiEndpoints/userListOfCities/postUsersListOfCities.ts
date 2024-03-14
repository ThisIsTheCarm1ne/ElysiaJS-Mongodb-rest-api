import {
  Elysia,
} from "elysia";
import '../../database/db.setup';
import userListOfCities from '../../database/schemes/userListOfCities.scheme'

export const postUserListOfCities = new Elysia()
.post("/usersListOfCities", async (handler: Elysia.Handler) => {
  try {
    const newList = new userListOfCities();

    newList.longTitle = handler.body.longTitle;
    newList.shortTitle = handler.body.shortTitle;
    newList.color = handler.body.color;
    newList.listOfCities = handler.body.listOfCities;

    //console.log(newList);
    const savedList = await newList.save();

  } catch (e: any) {
    handler.set.status = 500;
    return {
      message: 'DB not saving :(',
      status: 500,
    };
  }
});

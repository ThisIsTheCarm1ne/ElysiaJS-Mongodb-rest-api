import {
  Elysia,
} from "elysia";
import '../../database/db.setup';
import listOfCities from '../../database/schemes/listOfCities.schema'

export const updateCity = new Elysia()
.put("/cities/:id", async (handler: Elysia.Handler) => {
  try {
    console.log(handler.body);
    const city = await listOfCities.findOneAndUpdate(
      {"_id": handler.params.id},
      { $set: {"title": handler.body.title, "fistMentioned": handler.body.firstMentioned}},
      {returnNewDocument: true}
    );

    console.log(handler.params.id);
    if (!city) {
      handler.set.status = 404;
      return {
        message: 'City not found',
        status: 404,
      };
    }

    return {
      message: 'City updated successfully',
      status: 200,
      data: city,
    };

  } catch (e: any) {
    handler.set.status = 500;
    return {
      message: 'DB not worky :(',
      status: 500,
    };
  }
});

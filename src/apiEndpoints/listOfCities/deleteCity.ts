import {
  Elysia,
} from "elysia";
import '../../database/db.setup';
import listOfCities from '../../database/schemes/listOfCities.schema'

export const deleteCity = new Elysia()
.delete("/cities/:id", async (handler: Elysia.Handler) => {
  try {
    const city = await listOfCities.findOneAndDelete({"_id": handler.params.id});

    if (!city) {
      handler.set.status = 404;
      return {
        message: 'City not found',
        status: 404,
      };
    }

    return {
      message: 'City deleted',
      status: 200,
    };

  } catch (e: any) {
    handler.set.status = 500;
    return {
      message: 'DB not worky :(',
      status: 500,
    };
  }
});

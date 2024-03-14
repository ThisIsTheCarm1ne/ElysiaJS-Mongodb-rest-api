import {
  Document,
  Schema,
  model
} from 'mongoose';
import {
  listOfCitiesInterface,
  listOfCitiesSchema
} from './listOfCities.schema'

export interface userListOfCitiesInterface extends Document {
  shortTitle: string,
  longTitle: string,
  color: string,
  listOfCities: listOfCitiesInterface[],
}

const schema = new Schema<userListOfCitiesInterface>(
  {
    shortTitle: {
      type: String,
      required: true,
      unique: false,
    },
    longTitle: {
      type: String,
      required: true,
      unique: false,
    },
    color: {
      type: String,
      required: true,
      unique: false,
    },
    listOfCities: [
      listOfCitiesSchema
    ],
  }
) 
export default model<userListOfCitiesInterface>('userListOfCities', schema);

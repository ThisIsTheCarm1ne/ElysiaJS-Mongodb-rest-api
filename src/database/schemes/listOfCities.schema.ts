import {
  Document,
  Schema,
  model
} from 'mongoose';

export interface listOfCitiesInterface extends Document {
  title: string,
  firstMentioned: string,
}

export const listOfCitiesSchema = new Schema<listOfCitiesInterface>(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    firstMentioned: {
      type: String,
      required: true,
      unique: false,
    },
  }
) 
export default model<listOfCitiesInterface>('listOfCities', listOfCitiesSchema);

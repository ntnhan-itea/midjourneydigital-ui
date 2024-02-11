import { ImageModel } from "../image/image.model";

export interface InspirationInfo {
    imageModel: ImageModel,
    description: string,
    creationDate: Date,
}

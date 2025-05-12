import Event from "../../domain/entities/Event";
import ApiEventRepository from "../repositories/Event.repository";
import {
  getSliceOfEvents,
  getItemsByType,
} from "../../application/useCases/EventUseCase";

const api = new ApiEventRepository();

export default class SliceEventController {
  static async getSliceEventsFromPrismic(
    referenceId: string,
    lang: string
  ): Promise<Event> {
    return getSliceOfEvents(api, referenceId, lang);
  }

  static async getListFromPrismicByType(
    referenceId: string,
    lang: string
  ): Promise<any[]> {
    return getItemsByType(api, referenceId, lang);
  }
}

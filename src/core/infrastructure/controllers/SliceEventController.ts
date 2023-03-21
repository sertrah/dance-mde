import Event from "../../domain/entities/Event";
import ApiEventRepository from "../repositories/Event.repository";
import {
  getSliceEvents,
  getSliceOfEvents,
} from "../../application/useCases/EventUseCase";

const api = new ApiEventRepository();

export default class SliceEventController {
  static async getSliceEvents(): Promise<Event> {
    return getSliceEvents(api);
  }
  static async getSliceEventsFromPrismic(referenceId: string, lang: string): Promise<Event> {
    return getSliceOfEvents(api, referenceId, lang);
  }
}

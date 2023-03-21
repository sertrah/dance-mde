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
  static async getSliceEventsFromPrismic(referenceId: string, lang: string) {
    return getSliceOfEvents(api, referenceId, lang);
  }

/*   static async getEventByName(EventName: string): Promise<Event> {
    return getEventByName(api, EventName);
  }

  static async getEventImage(EventName: string): Promise<string> {
    return getEventImage(api, EventName);
  } */
}
import Event from "../../domain/entities/Event";
import { EventRepository } from "../../domain/interfaces/Event.repository";
import { EventDTO } from "../http/dto/Event.dto";
import { http } from "../http/http";
import { createClient } from "@/prismicio";

export default class ApiEventRepository implements EventRepository {
  async getList(): Promise<Event> {
    const response = await http.get<EventDTO>(
      "https://dog.ceo/api/breeds/list/all"
    );

    const { slices, title, eventPageTitle } = response.results[0].data;
    return new Event(title, eventPageTitle, slices);
  }

  async getSliceOfEvents(referenceId: string, lang: string): Promise<Event> {
    const response = await createClient().getByID(referenceId, { lang });
    const { slices, title, eventPageTitle } = response.data;
    return new Event(title, eventPageTitle, slices);
  }
}

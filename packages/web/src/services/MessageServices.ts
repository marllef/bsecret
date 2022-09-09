import { MessagesWithReplies } from "~/interfaces/IMessages";
import { api } from "./Api";

export default {
  async findAll() {
    const response = await api.get<MessagesWithReplies[]>("/message");
    return response.data;
  },
};

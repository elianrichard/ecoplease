import { event } from "nextjs-google-analytics";
import { trackingKeys } from "../types/trackingKeyTypes";

const trackEvents = (key: trackingKeys, category?: string, label?: string) => {
  event(key, { category, label });
};

export default trackEvents;

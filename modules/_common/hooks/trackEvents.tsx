import { event } from "nextjs-google-analytics";
import { trackingKeys } from "../types/trackingKeyTypes";

const trackEvents = (
  key: trackingKeys,
  category?: string,
  label?: string,
  value?: number
) => {
  event(key, { category, label, value });
};

export default trackEvents;

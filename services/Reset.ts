import { getTime } from "./GetDate";
import { handleReset } from "./Handlers";

export default function ResetDay() {
  const hour = getTime();
  if (hour === 24) {
    handleReset();
  }
}

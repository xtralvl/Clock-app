// This component is used as the orchestrator of the functions, so the logic and invoking of the functions comes here

import { getLocation } from '../components/getLocation'
import { getTime } from '../components/getTime';

async function init() {
  const ip = await getLocation();
  if (ip) {
    await getTime(ip);
  }
}

init();

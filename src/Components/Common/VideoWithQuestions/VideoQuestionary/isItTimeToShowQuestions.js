export default function isItTimeToShowQuestion({ timesToWatchFor, playedSeconds }) {
  timesToWatchFor = timesToWatchFor.sort((a, b) => a - b);
  for (let time of timesToWatchFor) {
    const timeFloat = time / 1000;
    if (playedSeconds >= timeFloat - 0.1) return time;
  }
}

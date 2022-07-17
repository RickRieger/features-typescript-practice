const addNum = (a: number, b: number): number => {
  return a + b;
};

// How to destructure with typeScript

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

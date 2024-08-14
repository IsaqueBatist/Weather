import SunnyIcon from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/sun.svg'
import Clear from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/moon.svg'
import PartlyCloudyNight from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/cloud-moon.svg'
import PartlyCloudyDay from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/cloud-sun.svg'
import { IWeatherIcons } from './type';
import Cloud from "../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/cloud.svg";
import Mist from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/fog.svg'
import PatchyRainDay from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/rain-alt-sun.svg'
import PatchyRainNight from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/rain-alt-moon.svg'
import PatchySnowDay from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/snow-sun.svg'
import PatchySnowNight from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/snow-moon.svg'
import PatchySleetDay from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/drizzle-sun.svg'
import PatchySleetNight from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/drizzle-moon.svg'
import ThunderyOutbreaksDay from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/lightning-sun.svg'
import ThunderyOutbreaksNight from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/lightning-moon.svg'
import Thunder from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/lightning.svg'
import Snow from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/snow.svg'
import Blizzard from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/snow-alt.svg'
import LightDrizzleDay from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/drizzle-sun.svg'
import LightDrizzleNight from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/drizzle-moon.svg'
import PatchyLightRainDay from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/rain-alt-sun.svg'
import PatchyLightRainNight from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/rain-alt-moon.svg'
import LightRainDay from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/rain-sun.svg'
import LightRainNight from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/rain-moon.svg'
import Rain from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/rain.svg'
import HeavyFreezingRainDay from "../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/snow-alt-sun.svg";
import LightSleetNight from "../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/snow-alt-moon.svg";
export const icons: IWeatherIcons = {
  "Sunny": {
    day: SunnyIcon,
  },
  "Clear": {
    night: Clear,
  },
  "Partly cloudy": {
    day: PartlyCloudyDay,
    night: PartlyCloudyNight,
  },
  "Cloudy": {
    day: PartlyCloudyDay,
    night: PartlyCloudyNight,
  },
  "Overcast": {
    day: Cloud,
    night: Cloud,
  },
  "Mist": {
    day: Mist,
    night: Mist,
  },
  "Patchy rain possible": {
    day: PatchyRainDay,
    night: PatchyRainNight,
  },
  "Patchy snow possible": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Patchy sleet possible": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "Patchy freezing drizzle possible": {
    day: Cloud,
    night: Cloud,
  },
  "Thundery outbreaks possible": {
    day: ThunderyOutbreaksDay,
    night: ThunderyOutbreaksNight,
  },
  "Blowing snow": {
    day: Snow,
    night: Snow,
  },
  "Blizzard": {
    day: Blizzard,
    night: Blizzard,
  },
  "Fog": {
    day: Mist,
    night: Mist,
  },
  "Freezing fog": {
    day: Mist,
    night: Mist,
  },
  "Patchy light drizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "Light drizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "Freezing drizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "Heavy freezing drizzle": {
    day: Blizzard,
    night: Blizzard,
  },
  "Patchy light rain": {
    day: PatchyLightRainDay,
    night: PatchyLightRainNight,
  },
  "Light rain": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "Moderate rain at times": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "Moderate rain": {
    day: Rain,
    night: Rain,
  },
  "Heavy rain at times": {
    day: PatchyLightRainDay,
    night: PatchyLightRainNight,
  },
  "Heavy rain": {
    day: Rain,
    night: Rain,
  },
  "Light freezing rain": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Moderate or heavy freezing rain": {
    day: HeavyFreezingRainDay,
    night: LightSleetNight,
  },
  "Light sleet": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "Moderate or heavy sleet": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "Patchy light snow": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Light snow": {
    day: Snow,
    night: Snow,
  },
  "Patchy moderate snow": {
    day: Blizzard,
    night: Blizzard,
  },
  "Moderate snow": {
    day: Snow,
    night: Snow,
  },
  "Patchy heavy snow": {
    day: Snow,
    night: Snow,
  },
  "Heavy snow": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Ice pellets": {
    day: Snow,
    night: Snow,
  },
  "Light rain shower": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "Moderate or heavy rain shower": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "Torrential rain shower": {
    day: Rain,
    night: Rain,
  },
  "Light sleet showers": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Moderate or heavy sleet showers": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Light snow showers": {
    day: Snow,
    night: Snow,
  },
  "Moderate or heavy snow showers": {
    day: Snow,
    night: Snow,
  },
  "Light showers of ice pellets": {
    day: Snow,
    night: Snow,
  },
  "Moderate or heavy showers of ice pellets": {
    day: Snow,
    night: Snow,
  },
  "Patchy light rain with thunder": {
    day: ThunderyOutbreaksDay,
    night: ThunderyOutbreaksNight,
  },
  "Moderate or heavy rain with thunder": {
    day: Thunder,
    night: Thunder,
  },
  "Patchy light snow with thunder": {
    day: Snow,
    night: Snow,
  },
  "Moderate or heavy snow with thunder": {
    day: Snow,
    night: Snow,
  }
};

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
  "PartlyCloudy": {
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
  "PatchyRainPossible": {
    day: PatchyRainDay,
    night: PatchyRainNight,
  },
  "PatchySnowPossible": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "PatchySleetPossible": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "PatchyFreezingDrizzlePossible": {
    day: Cloud,
    night: Cloud,
  },
  "ThunderyOutbreaksPossible": {
    day: ThunderyOutbreaksDay,
    night: ThunderyOutbreaksNight,
  },
  "BlowingSnow": {
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
  "FreezingFog": {
    day: Mist,
    night: Mist,
  },
  "PatchyLightDrizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "LightDrizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "FreezingDrizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "HeavyFreezingDrizzle": {
    day: Blizzard,
    night: Blizzard,
  },
  "PatchyLightRain": {
    day: PatchyLightRainDay,
    night: PatchyLightRainNight,
  },
  "PatchyRainNearby": {
    day: PatchyRainDay,
    night: PatchyRainNight,
  },
  "LightRain": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "ModerateRainAtTimes": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "ModerateRain": {
    day: Rain,
    night: Rain,
  },
  "HeavyRainAtTimes": {
    day: PatchyLightRainDay,
    night: PatchyLightRainNight,
  },
  "HeavyRain": {
    day: Rain,
    night: Rain,
  },
  "LightFreezingRain": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "ModerateOrHeavyFreezingRain": {
    day: HeavyFreezingRainDay,
    night: LightSleetNight,
  },
  "LightSleet": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "ModerateOrHeavySleet": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "PatchyLightSnow": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "LightSnow": {
    day: Snow,
    night: Snow,
  },
  "PatchyModerateSnow": {
    day: Blizzard,
    night: Blizzard,
  },
  "ModerateSnow": {
    day: Snow,
    night: Snow,
  },
  "PatchyHeavySnow": {
    day: Snow,
    night: Snow,
  },
  "HeavySnow": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "IcePellets": {
    day: Snow,
    night: Snow,
  },
  "LightRainShower": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "ModerateOrHeavyRainShower": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "TorrentialRainShower": {
    day: Rain,
    night: Rain,
  },
  "LightSleetShowers": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "ModerateOrHeavySleetShowers": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "LightSnowShowers": {
    day: Snow,
    night: Snow,
  },
  "ModerateOrHeavySnowShowers": {
    day: Snow,
    night: Snow,
  },
  "LightShowersOfIcePellets": {
    day: Snow,
    night: Snow,
  },
  "ModerateOrHeavyShowersOfIcePellets": {
    day: Snow,
    night: Snow,
  },
  "PatchyLightRainWithThunder": {
    day: ThunderyOutbreaksDay,
    night: ThunderyOutbreaksNight,
  },
  "ModerateOrHeavyRainWithThunder": {
    day: Thunder,
    night: Thunder,
  },
  "PatchyLightSnowWithThunder": {
    day: Snow,
    night: Snow,
  },
  "ModerateOrHeavySnowWithThunder": {
    day: Snow,
    night: Snow,
  }
};

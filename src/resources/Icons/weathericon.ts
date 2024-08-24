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
import ThunderIcon from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/lightning.svg'
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
  "Partlycloudy": {
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
  "Patchyrainpossible": {
    day: PatchyRainDay,
    night: PatchyRainNight,
  },
  "Patchysnowpossible": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Patchysleetpossible": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "Patchyfreezingdrizzlepossible": {
    day: Cloud,
    night: Cloud,
  },
  "Thunderyoutbreakspossible": {
    day: ThunderyOutbreaksDay,
    night: ThunderyOutbreaksNight,
  },
  "Blowingsnow": {
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
  "Freezingfog": {
    day: Mist,
    night: Mist,
  },
  "Patchylightdrizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "Lightdrizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "Freezingdrizzle": {
    day: LightDrizzleDay,
    night: LightDrizzleNight,
  },
  "Heavyfreezingdrizzle": {
    day: Blizzard,
    night: Blizzard,
  },
  "Patchylightrain": {
    day: PatchyLightRainDay,
    night: PatchyLightRainNight,
  },
  "Patchyrainnearby": {
    day: PatchyRainDay,
    night: PatchyRainNight,
  },
  "Lightrain": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "Moderaterainattimes": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "Moderaterain": {
    day: Rain,
    night: Rain,
  },
  "Heavyrainattimes": {
    day: PatchyLightRainDay,
    night: PatchyLightRainNight,
  },
  "Heavyrain": {
    day: Rain,
    night: Rain,
  },
  "Lightfreezingrain": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Moderateorheavyfreezingrain": {
    day: HeavyFreezingRainDay,
    night: LightSleetNight,
  },
  "Lightsleet": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "Moderateorheavysleet": {
    day: PatchySleetDay,
    night: PatchySleetNight,
  },
  "Patchylightsnow": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Lightsnow": {
    day: Snow,
    night: Snow,
  },
  "Patchymoderatesnow": {
    day: Blizzard,
    night: Blizzard,
  },
  "Moderatesnow": {
    day: Snow,
    night: Snow,
  },
  "Patchyheavysnow": {
    day: Snow,
    night: Snow,
  },
  "Heavysnow": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Icepellets": {
    day: Snow,
    night: Snow,
  },
  "Lightrainshower": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "Moderateorheavyrainshower": {
    day: LightRainDay,
    night: LightRainNight,
  },
  "Torrentialrainshower": {
    day: Rain,
    night: Rain,
  },
  "Lightsleetshowers": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Moderateorheavysleetshowers": {
    day: PatchySnowDay,
    night: PatchySnowNight,
  },
  "Lightsnowshowers": {
    day: Snow,
    night: Snow,
  },
  "Moderateorheavysnowshowers": {
    day: Snow,
    night: Snow,
  },
  "Lightshowersoficepellets": {
    day: Snow,
    night: Snow,
  },
  "Moderateorheavyshowersoficepellets": {
    day: Snow,
    night: Snow,
  },
  "Patchylightrainwiththunder": {
    day: ThunderyOutbreaksDay,
    night: ThunderyOutbreaksNight,
  },
  "Moderateorheavyrainwiththunder": {
    day: ThunderIcon,
    night: ThunderIcon,
  },
  "Patchylightsnowwiththunder": {
    day: Snow,
    night: Snow,
  },
  "Moderateorheavysnowwiththunder": {
    day: Snow,
    night: Snow,
  },
};

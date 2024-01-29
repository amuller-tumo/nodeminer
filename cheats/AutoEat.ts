import mineflayer from "mineflayer";
import Cheat from "./Cheat.ts";
import { AutoEatConfig } from "./CheatConfigs.ts";

class AutoEat extends Cheat {
    config: AutoEatConfig = this.config;
    constructor() {
        super("AutoEat", "Automatically eats.");
    }
    
    main(bot: mineflayer.Bot): void {
        bot.once('spawn', ()=>{
            if (this.config.minFood) bot.autoEat.options.startAt = this.config.minFood;
            if (this.config.priority) bot.autoEat.options.priority = this.config.priority;
            if (this.config.bannedFood) bot.autoEat.options.bannedFood = this.config.bannedFood;
            if (this.config.offhand) bot.autoEat.options.offhand = this.config.offhand;
        });
        console.log('Loaded AutoEat');
    }
}

export default new AutoEat();
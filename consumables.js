/**
 * Consumables Configuration
 */

export const CONSUMABLES = {
    food: {
        name: "Raw Food",
        icon: "🍖",
        effect: "+30 Hunger",
        resourceKey: "food",
        onConsume: (gameState) => {
            gameState.hunger = Math.min(100, gameState.hunger + 30);
            return { hunger: 30 };
        }
    },
    
    cooked_meat: {
        name: "Cooked Meat",
        icon: "🍗",
        effect: "+50 Hunger, +10 Health",
        resourceKey: "cooked_meat",
        onConsume: (gameState) => {
            gameState.hunger = Math.min(100, gameState.hunger + 50);
            gameState.health = Math.min(100, gameState.health + 10);
            return { hunger: 50, health: 10 };
        }
    },
    
    berries: {
        name: "Berries",
        icon: "🫐",
        effect: "+20 Hunger",
        resourceKey: "berries",
        onConsume: (gameState) => {
            gameState.hunger = Math.min(100, gameState.hunger + 20);
            return { hunger: 20 };
        }
    }
};

/**
 * Crafting Recipes Configuration
 */

export const RECIPES = {
    // Tools - Stone Age
    axe: {
        name: "Stone Axe",
        icon: "🪓",
        category: "tools",
        requires: { wood: 5, stone: 2 },
        produces: { axe: 1 },
        age: 0,
        description: "Chop wood faster"
    },
    
    pickaxe: {
        name: "Stone Pickaxe",
        icon: "⛏️",
        category: "tools",
        requires: { wood: 3, stone: 4 },
        produces: { pickaxe: 1 },
        age: 0,
        description: "Mine stone faster"
    },
    
    sword: {
        name: "Stone Sword",
        icon: "⚔️",
        category: "weapons",
        requires: { wood: 2, stone: 5 },
        produces: { sword: 1 },
        age: 0,
        description: "Defend yourself"
    },
    
    torch: {
        name: "Torch",
        icon: "🔦",
        category: "tools",
        requires: { wood: 3, coal: 1 },
        produces: { torch: 1 },
        age: 0,
        description: "Light up dark caves"
    },
    
    // Buildings - Stone Age
    hut: {
        name: "Simple Hut",
        icon: "🛖",
        category: "buildings",
        requires: { wood: 10, stone: 5 },
        produces: { structure: 1 },
        age: 0,
        description: "Your first shelter"
    },
    
    campfire: {
        name: "Campfire",
        icon: "🔥",
        category: "buildings",
        requires: { wood: 5, stone: 3 },
        produces: { structure: 1 },
        age: 0,
        description: "Cook food and stay warm"
    },
    
    // Tools - Bronze Age
    bronze_axe: {
        name: "Bronze Axe",
        icon: "🪓",
        category: "tools",
        requires: { wood: 3, bronze: 5 },
        produces: { axe: 1 },
        age: 1,
        description: "Much better than stone"
    },
    
    bronze_pickaxe: {
        name: "Bronze Pickaxe",
        icon: "⛏️",
        category: "tools",
        requires: { wood: 2, bronze: 6 },
        produces: { pickaxe: 1 },
        age: 1,
        description: "Mine faster and find rare ores"
    },
};

export const RECIPE_CATEGORIES = {
    all: 'All',
    tools: 'Tools',
    weapons: 'Weapons',
    buildings: 'Buildings',
};

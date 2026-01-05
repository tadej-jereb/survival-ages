/**
 * Game Configuration Constants
 */

export const GAME_CONFIG = {
    WORLD_SIZE: 2000,
    TILE_SIZE: 40,
    VISION_RADIUS: 200,
    GATHER_TIME: 4000, // milliseconds
    SAVE_INTERVAL: 3000,
    SYNC_INTERVAL: 5000,
    PLAYER_TIMEOUT: 300000, // 5 minutes
};

export const AGES = [
    'STONE AGE',
    'BRONZE AGE',
    'IRON AGE',
    'MEDIEVAL',
    'MODERN AGE'
];

export const RESOURCE_TYPES = {
    // Surface resources
    TREE: 'tree',
    STONE: 'stone',
    BERRY: 'berry',
    
    // Cave resources
    COAL: 'coal',
    IRON: 'iron',
    GEMS: 'gems',
};

export const ICONS = {
    // Resources
    wood: '🪵',
    stone: '🪨',
    food: '🍖',
    berries: '🫐',
    cooked_meat: '🍗',
    coal: '⚫',
    iron: '⚙️',
    gems: '💎',
    bronze: '🥉',
    
    // Tools
    axe: '🪓',
    pickaxe: '⛏️',
    sword: '⚔️',
    torch: '🔦',
    
    // Structures
    hut: '🛖',
    campfire: '🔥',
    
    // Map
    cave_entrance: '🕳️',
    cave_exit: '🚪',
    player: '🧑',
};

export const RESOURCE_NAMES = {
    tree: 'Tree',
    stone: 'Stone',
    berry: 'Berries',
    coal: 'Coal',
    iron: 'Iron',
    gems: 'Gems',
};

export const TOOL_BONUSES = {
    axe: { resource: 'wood', multiplier: 2 },
    pickaxe: { resources: ['stone', 'iron', 'coal'], multiplier: 2 },
};

export const RESOURCE_AMOUNTS = {
    tree: 5,
    stone: 3,
    berry: 2,
    coal: 5,
    iron: 3,
    gems: 1,
};

export const INITIAL_RESOURCES = {
    wood: 0,
    stone: 0,
    food: 0,
    berries: 0,
    cooked_meat: 0,
    coal: 0,
    iron: 0,
    gems: 0,
    bronze: 0,
};

export const INITIAL_TOOLS = {
    axe: 0,
    pickaxe: 0,
    sword: 0,
    torch: 0,
};

export const INITIAL_STATS = {
    health: 100,
    hunger: 100,
    stamina: 100,
};

export const DECAY_RATES = {
    hunger: 0.5,    // per second
    stamina_regen: 0.3, // per second
    health_starvation: 0.2, // per second when hungry
};

export const MOVEMENT = {
    speed: 2.5,
    stamina_cost: 0.12, // per frame
    arrival_distance: 3,
};

export const GATHERING = {
    stamina_cost: 10,
    max_distance: 60,
    progress_update_interval: 50, // ms
};

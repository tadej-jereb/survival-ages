# 🎮 Survival Ages

A browser-based multiplayer survival game with age progression, from Stone Age to Modern Age.

## ✨ Features

- **Resource Gathering**: Trees, stones, berries, cave resources (coal, iron, gems)
- **Timed Gathering System**: 4-second progress bars for immersive gameplay
- **Crafting System**: Tools, weapons, and structures with age-based unlocking
- **Cave Exploration**: Procedurally generated caves with unique resources
- **Age Progression**: Advance through 5 historical ages
- **Character System**: Health, hunger, stamina management with eating/resting
- **Fog of War**: Explore and reveal the world as you travel
- **Multiplayer**: See other players in real-time (localStorage-based)
- **Mobile Support**: Responsive design with touch controls

## 🚀 Quick Start

### Play Now
1. Open `index.html` in a modern web browser
2. Enter your character name
3. Click "BEGIN JOURNEY"
4. Right-click to interact with the world

### Development Setup

```bash
# No build system required - pure HTML/CSS/JS
# Just open index.html in your browser!

# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

## 📁 Project Structure

```
survival-ages/
├── index.html              # Main entry point
├── README.md               # This file
├── css/                    # Stylesheets
│   ├── main.css           # Variables & base styles
│   ├── ui.css             # UI components
│   └── modals.css         # Modal windows
├── js/                     # JavaScript modules
│   ├── main.js            # Entry point
│   ├── config/            # Game configuration
│   │   ├── constants.js   # Game constants
│   │   ├── recipes.js     # Crafting recipes
│   │   └── consumables.js # Food items
│   ├── core/              # Core game systems
│   ├── world/             # World & resources
│   ├── player/            # Player systems
│   ├── ui/                # UI components
│   ├── rendering/         # Graphics rendering
│   └── utils/             # Utilities
├── data/                   # Game data files
└── docs/                   # Documentation
```

## 🎮 How to Play

### Controls
- **Right-click**: Open context menu (walk, gather, enter cave)
- **Long-press** (mobile): Same as right-click
- **ESC**: Close menus/modals, cancel gathering

### Gameplay Loop
1. **Gather Resources**: Right-click trees (🌲), stones (🪨), berries (🫐)
2. **Craft Tools**: Open crafting menu → Craft axe, pickaxe, torch
3. **Build Structures**: Craft huts and campfires
4. **Explore Caves**: Find cave entrances (🕳️), gather coal, iron, gems
5. **Progress Ages**: Build structures and gather resources to advance
6. **Survive**: Eat food, rest, manage health/hunger/stamina

### Resources
| Resource | Icon | Location | Uses |
|----------|------|----------|------|
| Wood | 🪵 | Trees | Crafting, building |
| Stone | 🪨 | Rocks | Crafting, building |
| Food | 🍖 | Berries | Eating (restores hunger) |
| Coal | ⚫ | Caves Level 1+ | Torch crafting |
| Iron | ⚙️ | Caves Level 1+ | Advanced crafting |
| Gems | 💎 | Caves Level 3 | Rare/valuable |

### Crafting

**Stone Age Tools:**
- **Axe** (🪓): 5 wood + 2 stone → Chop wood 2x faster
- **Pickaxe** (⛏️): 3 wood + 4 stone → Mine stone 2x faster
- **Torch** (🔦): 3 wood + 1 coal → Explore deep caves
- **Sword** (⚔️): 2 wood + 5 stone → Defense

**Structures:**
- **Hut** (🛖): 10 wood + 5 stone → Shelter
- **Campfire** (🔥): 5 wood + 3 stone → Cook & warmth

### Cave System
- **Level 1 Caves**: No torch needed, contains coal/iron
- **Level 2-3 Caves**: Requires torch, more resources
- **Level 3 Caves**: Contains rare gems

## 🛠️ Technical Details

### Architecture
- **Modular ES6**: Clean separation of concerns
- **No Framework**: Pure JavaScript for performance
- **Canvas Rendering**: Custom 2D graphics engine
- **localStorage**: Persistent saves & multiplayer sync

### Performance
- 60 FPS rendering loop
- 10 Hz game logic updates
- Optimized tile-based rendering
- Efficient fog of war system

### Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## 📚 Documentation

- [Project Structure Guide](docs/PROJECT_STRUCTURE_GUIDE.md)
- [API Reference](docs/API.md) *(coming soon)*
- [Contributing Guide](docs/CONTRIBUTING.md) *(coming soon)*

## 🎯 Roadmap

### Implemented ✅
- [x] Resource gathering with progress bars
- [x] Crafting system
- [x] Cave exploration
- [x] Character management (eating, resting)
- [x] Fog of war
- [x] Multiplayer (localStorage)
- [x] Mobile support

### Planned 🚧
- [ ] Combat system
- [ ] Day/night cycle
- [ ] Weather effects
- [ ] Farming system
- [ ] Trading system
- [ ] WebSocket multiplayer
- [ ] Sound effects
- [ ] Achievements

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Created with ❤️ by the Survival Ages Team

**Technologies:**
- Pure HTML5 Canvas
- ES6 JavaScript Modules
- CSS3 with Variables
- localStorage API

---

**Enjoy surviving and building your legacy!** 🏕️⚔️🏰

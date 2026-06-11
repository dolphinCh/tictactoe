# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/tictactoe/
npm test           # run tests with Vitest
```

## Architecture

Standalone Angular 21 app using Signals for reactive state. No NgModules.

```
src/app/
  app.ts                      # root component — just mounts <app-board>
  game/
    game.models.ts            # shared types: Player, Cell, GameState
    game.service.ts           # all game logic + signal-based state (providedIn: 'root')
    board/board.component.*   # layout, scoreboard, status message, new-game button
    cell/cell.component.*     # single cell button — dumb, emits cellClick
```

**State lives entirely in `GameService`** via a single `signal<GameState>`. `BoardComponent` and `CellComponent` read computed signals from the service — they hold no local state. `GameService.makeMove(index)` and `GameService.newGame()` are the only mutators.

Scores persist across games for the session (reset only on page reload).

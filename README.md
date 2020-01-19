# Minos

Minos is a shape-stacking game in the spirit of Tetris®. You can choose from a set of tetrominoes (four-block shapes), pentominoes (five-block shapes), or both. You also can choose your starting level, which affects how quickly blocks drop at the beginning of the game.

Shapes begin at the top of the well. Use the left, right, and down buttons to move the shapes within the well. Up will rotate the shape. Pressing the A button will activate auto-drop, which causes the shape to fall rapidly to the bottom of the well. Filled lines will clear, and shapes drop more quickly as you clear lines and level-up. The game continues until a shape cannot be dropped from the top of the well.

Tetris® is a registered trademark of The Tetris Company.

## TODO

- [X] BUG: Namespace conflict with `settings` object. (Fixed - version 1.2.)
- [X] BUG: Game ends if a player attempts to move a shape off-screen before piece is fully visible. (Fixed - version 1.1.)
- [X] BUG: Player can move a shape into a column outside of well when shape  is in negative-row space. (Fixed; version 1.1.)
- [X] BUG: Game is only using pentominoes if player selects "Both" for game shapes. (FIXED; version 1.1.)

## License

### MIT License

Copyright 2019 Robo Technical Group LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software
and associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

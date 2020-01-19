/**
 * Enumerations
 */
// Standard palette
enum Color {
    Transparent, // 0
    White, // 1 = RGB(255, 255, 255)
    Red, // 2 = RGB(255, 33, 33)
    Pink, // 3 = RGB(255, 147, 196)
    Orange, // 4 = RGB(255, 129, 53)
    Yellow, // 5 = RGB(255, 246, 9)
    Aqua, // 6 = RGB(36, 156, 163)
    BrightGreen, // 7 = RGB(120, 220, 82)
    Blue, // 8 = RGB(0, 63, 173)
    LightBlue, // 9 = RGB(135, 242, 255)
    Purple, // 10 = RGB(142, 46, 196)
    RoseBouquet, // 11 = RGB(164, 131, 159)
    Wine, // 12 = RGB(92, 64, 108)
    Bone, // 13 = RGB(229, 205, 196)
    Brown, // 14 = RGB(145, 70, 61)
    Black // 15 = RGB(0, 0, 0)
}   // enum Color


/**
 * Interfaces
 */
interface ActivePolyomino {
    change: Coordinate
    index: number
    location: Coordinate
    nextDrop: number
    orientation: number
}   // interface ActivePolyomino

interface Coordinate {
    column: number
    row: number
}   // interface Coordinate

interface PolyominoColors {
    borderColor: number
    fillColor: number
}   // interface PolyominoColors

interface Polyomino {
    blocks: string[][]
    colors: PolyominoColors
}   // interface Polyomino

/**
 * Constants
 */
const BLOCK_SIZE: number = 5
const COLUMNS: number = 10
const ROWS: number = 20

/**
 * Polyomino shapes.
 */
const TETROMINOES: Polyomino[] = [
    // I
    {
        blocks: [
            [
                'XXXX'
            ], [
                'X',
                'X',
                'X',
                'X'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.LightBlue
        }
    },
    // O
    {
        blocks: [
            [
                'XX',
                'XX'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Yellow
        }
    },
    // T
    {
        blocks: [
            [
                'XXX',
                '.X.'
            ], [
                '.X',
                'XX',
                '.X'
            ], [
                '.X.',
                'XXX'
            ], [
                'X.',
                'XX',
                'X.'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Purple
        }
    },
    // J
    {
        blocks: [
            [
                '.X',
                '.X',
                'XX'
            ], [
                'X..',
                'XXX'
            ], [
                'XX',
                'X.',
                'X.'
            ], [
                'XXX',
                '..X'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Aqua
        }
    },
    // L
    {
        blocks: [
            [
                'X.',
                'X.',
                'XX'
            ], [
                'XXX',
                'X..'
            ], [
                'XX',
                '.X',
                '.X'
            ], [
                '..X',
                'XXX'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Orange
        }
    },
    // S
    {
        blocks: [
            [
                '.XX',
                'XX.'
            ], [
                'X.',
                'XX',
                '.X'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.BrightGreen
        }
    },
    // Z
    {
        blocks: [
            [
                'XX.',
                '.XX'
            ], [
                '.X',
                'XX',
                'X.'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Red
        }
    }
]

const PENTOMINOES: Polyomino[] = [
    // I
    {
        blocks: [
            [
                'XXXXX'
            ], [
                'X',
                'X',
                'X',
                'X',
                'X'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Pink
        }
    },
    // F
    {
        blocks: [
            [
                '.XX',
                'XX.',
                '.X.'
            ], [
                '.X.',
                'XXX',
                '..X'
            ], [
                '.X.',
                '.XX',
                'XX.'
            ], [
                'X..',
                'XXX',
                '.X.'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Brown
        }
    },
    // 7
    {
        blocks: [
            [
                'XX.',
                '.XX',
                '.X.'
            ], [
                '..X',
                'XXX',
                '.X.'
            ], [
                '.X.',
                'XX.',
                '.XX'
            ], [
                '.X.',
                'XXX',
                'X..'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Brown
        }
    },
    // J
    {
        blocks: [
            [
                '.X',
                '.X',
                '.X',
                'XX'
            ], [
                'X...',
                'XXXX'
            ], [
                'XX',
                'X.',
                'X.',
                'X.'
            ], [
                'XXXX',
                '...X'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Yellow
        }
    },
    // L
    {
        blocks: [
            [
                'X.',
                'X.',
                'X.',
                'XX'
            ], [
                'XXXX',
                'X...'
            ], [
                'XX',
                '.X',
                '.X',
                '.X'
            ], [
                '...X',
                'XXXX'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Yellow
        }
    },
    // Q
    {
        blocks: [
            [
                'XX',
                'XX',
                '.X'
            ], [
                '.XX',
                'XXX'
            ], [
                'X.',
                'XX',
                'XX'
            ], [
                'XXX',
                'XX.'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Bone
        }
    },
    // P
    {
        blocks: [
            [
                'XX',
                'XX',
                'X.'
            ], [
                'XXX',
                '.XX'
            ], [
                '.X',
                'XX',
                'XX'
            ], [
                'XX.',
                'XXX'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Bone
        }
    },
    // N
    {
        blocks: [
            [
                '.X',
                '.X',
                'XX',
                'X.'
            ], [
                'XX..',
                '.XXX'
            ], [
                '.X',
                'XX',
                'X.',
                'X.'
            ], [
                'XXX.',
                '..XX'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.BrightGreen
        }
    },
    // Reversed N
    {
        blocks: [
            [
                'X.',
                'X.',
                'XX',
                '.X'
            ], [
                '.XXX',
                'XX..'
            ], [
                'X.',
                'XX',
                '.X',
                '.X'
            ], [
                '..XX',
                'XXX.'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.BrightGreen
        }
    },
    // T
    {
        blocks: [
            [
                'XXX',
                '.X.',
                '.X.'
            ], [
                '..X',
                'XXX',
                '..X'
            ], [
                '.X.',
                '.X.',
                'XXX'
            ], [
                'X..',
                'XXX',
                'X..'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Orange
        }
    },
    // U
    {
        blocks: [
            [
                'X.X',
                'XXX'
            ], [
                'XX',
                'X.',
                'XX'
            ], [
                'XXX',
                'X.X'
            ], [
                'XX',
                '.X',
                'XX'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Aqua
        }
    },
    // V
    {
        blocks: [
            [
                '..X',
                '..X',
                'XXX'
            ], [
                'X..',
                'X..',
                'XXX'
            ], [
                'XXX',
                'X..',
                'X..'
            ], [
                'XXX',
                '..X',
                '..X'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.White
        }
    },
    // W
    {
        blocks: [
            [
                '..X',
                '.XX',
                'XX.'
            ], [
                'X..',
                'XX.',
                '.XX'
            ], [
                '.XX',
                'XX.',
                'X..'
            ], [
                'XX.',
                '.XX',
                '..X'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.LightBlue
        }
    },
    // X
    {
        blocks: [
            [
                '.X.',
                'XXX',
                '.X.'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Red
        }
    },
    // Y
    {
        blocks: [
            [
                '.X',
                'XX',
                '.X',
                '.X'
            ], [
                '..X.',
                'XXXX'
            ], [
                'X.',
                'X.',
                'XX',
                'X.'
            ], [
                'XXXX',
                '.X..'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Purple
        }
    },
    // h
    {
        blocks: [
            [
                'X.',
                'XX',
                'X.',
                'X.'
            ], [
                'XXXX',
                '..X.'
            ], [
                '.X',
                '.X',
                'XX',
                '.X'
            ], [
                '.X..',
                'XXXX'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.Purple
        }
    },
    // S
    {
        blocks: [
            [
                '.XX',
                '.X.',
                'XX.'
            ], [
                'X..',
                'XXX',
                '..X'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.RoseBouquet
        }
    },
    // Z
    {
        blocks: [
            [
                'XX.',
                '.X.',
                '.XX'
            ], [
                '..X',
                'XXX',
                'X..'
            ]
        ],
        colors: {
            borderColor: Color.Wine,
            fillColor: Color.RoseBouquet
        }
    }
]

/**
 * Global variables
 */
let gameShapes: Polyomino[] = null
let gameState: number[][] = null

/**
 * Copies a line in the game state.
 * @param {number} source - Row to copy.
 * @param {number} destination - Row to place the copied line.
 */
function copyLine(source: number, destination: number): void {
    for (let index: number = 0; index < COLUMNS; index++) {
        setBlock(destination, index, gameState[source][index])
    }   // for (index)
}   // copyLine()

/**
 * @param {number} rows - Number of rows intended for canvas.
 * @param {number} columns - Number of columns intended for canvas.
 * @return {Image} Drawing canvas of appropriate size.
 */
function createCanvas(rows: number, columns: number): Image {
    return image.create(
        columns * BLOCK_SIZE + 1,
        rows * BLOCK_SIZE + 1
    )
}   // createCanvas()

/**
 * @param {Image} img - Drawing canvas.
 * @param {number} row - Row of block to draw.
 * @param {number} column - Column of block to draw.
 * @param {number} fillColor - Color for interior of block.
 * @param {number} borderColor - Color for highlight / shadow.
 */
function drawBlock(img: Image, row: number, column: number, fillColor: number, borderColor: number): void {
    let x1: number = column * BLOCK_SIZE
    let x2: number = (column + 1) * BLOCK_SIZE
    let y1: number = row * BLOCK_SIZE
    let y2: number = (row + 1) * BLOCK_SIZE

    // Simple block - For debugging
    // img.drawRect(x1, y1, BLOCK_SIZE, BLOCK_SIZE, fillColor)

    // Filled block
    img.fillRect(x1, y1, BLOCK_SIZE, BLOCK_SIZE, fillColor)
    // img.drawRect(x1, y1, BLOCK_SIZE, BLOCK_SIZE, borderColor)
    img.drawLine(x1, y1, x1, y2 - 1, borderColor)
    img.drawLine(x1, y1, x2 - 1, y1, borderColor)
}   // drawBlock()

/**
 * @param {Image} img - Canvas for drawing the current game state.
 */
function drawGameState(img: Image): void {
    img.fill(COLOR_BG)
    // Draw grid when debugging.
    // drawGrid(img, ROWS, COLUMNS, Color.Wine)
    for (let row: number = 0; row < ROWS; row++) {
        for (let column: number = 0; column < COLUMNS; column++) {
            let state: number = gameState[row][column]
            if (state > -1) {
                drawBlock(img, row, column,
                    gameShapes[state].colors.fillColor,
                    gameShapes[state].colors.borderColor)
            }   // if (state > 0)
        }   // for (column)
    }   // for (row)
}   // drawGameState()

/**
 * Used for debugging.
 * @param {Image} img - Drawing canvas of appropriate size.
 * @param {number} rows - Rows in grid.
 * @param {number} columns - Columns in grid.
 * @param {number} color - Color of grid.
 * @return {Image} - Image with grid drawn.
 */
function drawGrid(img: Image, rows: number, columns: number, color: number): Image {
    let x: number = 0
    let y: number = 0
    for (let h: number = 0; h <= columns; h++) {
        img.drawLine(x + h * BLOCK_SIZE, y, x + h * BLOCK_SIZE, y + rows * BLOCK_SIZE, color)
    }   // for (h)

    for (let v: number = 0; v <= rows; v++) {
        img.drawLine(x, y + v * BLOCK_SIZE, x + columns * BLOCK_SIZE, y + v * BLOCK_SIZE, color)
    }   // for (v)
    return img
}   // drawGrid()

/**
 * @param {Image} img - Drawing canvas.
 * @param {Polyomino} poly - Polyomino to draw.
 * @param {number} row - Row of location to draw polyomino.
 * @param {number} column - Column of location to draw polyomino.
 */
function drawPoly(img: Image, poly: Polyomino, row: number, column: number): void {
    let blocks: string[] = poly.blocks[0]
    let r: number = row
    let c: number
    for (let s of blocks) {
        c = column
        for (let char of s) {
            if (char !== '.') {
                drawBlock(img, r, c, poly.colors.fillColor, poly.colors.borderColor)
            }   // if (c)
            c++
        }   // for (c)
        r++
    }   // for (s)
}   // drawPoly()

/**
 * Initializes the global game state variable.
 */
function initGameState(): void {
    gameState = []
    for (let row: number = 0; row < ROWS; row++) {
        let gameStateRow: number[] = []
        for (let column: number = 0; column < COLUMNS; column++) {
            gameStateRow.push(-1)
        }   // for (column)
        gameState.push(gameStateRow)
    }   // for (row)
}   // initGameState()

/**
 * Place a block into the game state.
 * @param {number} row - Row of cell to update.
 * @param {number} column - Column of cell to update.
 * @param {number} state - Index of polyomino related to this cell; -1 to clear the state.
 */
function setBlock(row: number, column: number, state: number): void {
    if (row >= 0 && row < ROWS && column >= 0 && column < COLUMNS) {
        gameState[row][column] = state
    }   // if (row > 0 ...)
}   // setBlock()

/**
 * Place a polyomino into the game state.
 * @param {ActivePolyomino} polyState - Polyomino to place into the game state.
 * @param {boolean} erase - True to remove the polyomino; false to place to polyomino.
 * @param {boolean} testOnly - True to test if polyomino can be placed; false to place polyomino.
 * @return {boolean} - True if polyomino can be placed; false if not
 */
function setPoly(polyState: ActivePolyomino, erase: boolean = false, testOnly: boolean = false): boolean {
    let poly: Polyomino = gameShapes[polyState.index]
    let blocks: string[] = poly.blocks[polyState.orientation]
    let r: number = polyState.location.row
    let c: number
    let toReturn = true
    for (let s of blocks) {
        c = polyState.location.column
        for (let char of s) {
            if (char !== '.') {
                if (!testBlock(r, c)) {
                    toReturn = false
                }   // if (r >0 0 && ! testBlock(r, c))
                if (!testOnly) {
                    setBlock(r, c, erase ? -1 : polyState.index)
                }   // if (! testOnly)
            }   // if (c)
            c++
        }   // for (c)
        r++
    }   // for (s)
    return toReturn
}   // setPoly()

/**
 * Determines if a block can be placed in the game state.
 * @param {number} row - Row of cell to test.
 * @param {number} column - Column of cell to test.
 * @return {boolean} Cell is empty and within the bounds of the game state
 */
function testBlock(row: number, column: number): boolean {
    if (row < 0) {
        // Only verify that column is in-bounds if row is negative.
        if (column >= 0 && column <= COLUMNS) {
            return true
        } else {
            return false
        }   // if (column >= 0 && column <= COLUMN)
    } else {
        if (row >= 0 && row < ROWS && column >= 0 && column < COLUMNS) {
            return gameState[row][column] === -1
        } else {
            return false
        }   // if (row >= 0 ...)
    }   // if (! row)
}   // testBlock()

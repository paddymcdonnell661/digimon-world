namespace SpriteKind {
    export const Leader = SpriteKind.create()
    export const Attack = SpriteKind.create()
    export const guard = SpriteKind.create()
    export const Recovery = SpriteKind.create()
    export const Critical = SpriteKind.create()
    export const Guts = SpriteKind.create()
    export const Avoid = SpriteKind.create()
    export const LeftAndRight = SpriteKind.create()
    export const Laze = SpriteKind.create()
    export const Refrain = SpriteKind.create()
    export const vaccine = SpriteKind.create()
    export const virus = SpriteKind.create()
    export const data = SpriteKind.create()
    export const coin = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 . . . . 9 . . . . . . 9 . 7 . 
. f . f . . . . f f f . . 7 7 . 
. . f f f f f f f f 1 f . . 7 . 
. f f 1 f 2 2 2 f f f f f 7 7 7 
. . f f f 2 f 2 f f f f f . . . 
. . . f f 2 f 2 f 1 f f 1 . f . 
9 . f f f 2 2 2 f f f 7 f . . . 
. . . f 1 f f f f f 7 7 f . . 9 
f . . f f f f f f f f 7 f . . . 
. . f f f 2 2 2 f f 7 7 7 . f . 
. . . f f 2 f 2 f f f f f f . . 
. 7 . f f 2 1 2 f 1 f f f . . . 
7 7 . . f 2 2 2 f f 2 2 2 . . f 
. 7 . . f f f f f f 2 . 2 . . . 
7 7 7 . . f . . 1 f 2 . 2 . 9 . 
f . . 9 . . 9 . . . 2 2 2 . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (agumon.vy == 0) {
        agumon.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(false, effects.bubbles)
})
let bits: Sprite = null
let agumon: Sprite = null
agumon = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . 
. . . . . . . f 5 5 f 5 5 5 5 5 f . . . . . . . . . . . . . . . 
. . . . . . f 5 5 f 5 5 f f 5 5 5 f . . . . . . . . . . . . . . 
. . . f f f 5 5 5 5 5 f 7 f f 5 5 5 f . . . . . . . . . . . . . 
. . f 5 5 5 5 5 5 5 5 f f f f 5 5 5 f . . . . . . . . . . . . . 
. f f 5 5 f 5 5 5 5 5 5 f f 5 5 5 5 f . . . . . . . . . . . . . 
. f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . 
. f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . 
. f f 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 f . . . . . . . . . . . . . 
. . f 5 5 5 5 f f f 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . f f f f f 5 5 5 5 5 5 5 5 5 5 f . . . . . . . . . . . . . . 
. . . f 5 5 5 5 5 5 5 5 5 5 5 5 f f . . . . . . . . . . . . . . 
. . . . f f f f f 5 5 5 5 5 5 5 5 f f . . . . . . . . . . . . . 
. . . . . . . . . f f f 5 5 5 5 5 5 5 f . . . . . . . . . . . . 
. . . . . . . . f 5 5 5 5 5 5 5 f 5 5 f . . . . . . . . . . . . 
. . . . . . f f f 5 5 5 5 5 5 f 5 5 5 f f f . . . . . . . . . . 
. . . . f f 5 5 f 5 5 5 5 5 f 5 5 5 5 f 5 f . . . . . . . . . . 
. . . f 1 f 5 5 5 f 5 5 5 f 5 5 5 5 f 5 5 f . . . . . . . . . . 
. . . f f 1 f 5 f f f 5 f f 5 f 5 f 5 5 f . . . . . . . . . . . 
. . . . f f f f 5 f 5 f f 1 f 1 f 5 f f . . . . . . . . . . . . 
. . . . . . . . f 5 5 5 f f f f f 5 f . . . . . . . . . . . . . 
. . . . . . . f f f 5 5 5 f 5 5 5 5 5 f . . . . . . . . . . . . 
. . . . f f f f f 5 5 5 f f f f f 5 5 5 f . . . . . . . . . . . 
. . . f 1 f 1 f 1 f 5 f 1 f 1 f 1 f 5 5 f . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f f f . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(agumon, 100, 0)
scene.setBackgroundColor(9)
agumon.ay = 350
scene.cameraFollowSprite(agumon)
for (let value of tiles.getTilesByType(myTiles.tile2)) {
    bits = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 5 . . 5 5 . . 5 . . . . 
. . . . . 5 . 5 5 . 5 . . . . . 
. . . . . . . . . . . . . . . . 
. 5 . . 5 5 . 5 . . 5 5 . . 5 . 
. . 5 . 5 5 . . 5 . 5 5 . 5 . . 
. . . . . . . . . . . . . . . . 
. 5 5 . . 5 . 5 5 . . 5 . 5 5 . 
. 5 5 . 5 . . 5 5 . 5 . . 5 5 . 
. . . . . . . . . . . . . . . . 
. . 5 . 5 5 . 5 . . 5 5 . 5 . . 
. 5 . . 5 5 . . 5 . 5 5 . . 5 . 
. . . . . . . . . . . . . . . . 
. . . . . 5 . 5 5 . 5 . . . . . 
. . . . 5 . . 5 5 . . 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.coin)
    tiles.placeOnTile(bits, value)
    tiles.setTileAt(value, myTiles.tile0)
}

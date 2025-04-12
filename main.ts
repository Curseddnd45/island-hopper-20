let Glitch1: tiles.Location = null
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . 9 9 8 9 8 9 . . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . . 9 9 8 9 8 9 . . . . . . 
    9 9 9 9 9 9 9 8 9 9 9 9 9 9 . . 
    9 9 9 9 9 9 b b b 9 9 9 9 9 . . 
    9 9 9 9 9 9 9 b 9 9 9 9 9 9 . . 
    . . 9 9 9 9 b b b 9 9 . . . . . 
    . . . 9 9 9 9 9 9 9 9 . . . . . 
    . . 9 9 9 9 . . 9 9 9 9 . . . . 
    . . 9 9 9 9 . . 9 9 9 9 . . . . 
    . . 9 9 9 . . . 9 9 9 9 . . . . 
    . . 9 9 9 . . . . 9 9 9 . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
forever(function () {
    Glitch1 = tiles.getTilesByType(assets.tile`myTile0`)._pickRandom()
    pause(randint(1, 20) * 100)
    tiles.setTileAt(Glitch1, assets.tile`myTile2`)
    pause(randint(1, 20) * 100)
    tiles.setTileAt(Glitch1, assets.tile`myTile0`)
})
forever(function () {
    Glitch1 = tiles.getTilesByType(assets.tile`myTile0`)._pickRandom()
    pause((randint(1, 20) - 1) * 100)
    tiles.setTileAt(Glitch1, assets.tile`myTile2`)
    pause((randint(1, 20) - 1) * 100)
    tiles.setTileAt(Glitch1, assets.tile`myTile0`)
})
forever(function () {
    Glitch1 = tiles.getTilesByType(assets.tile`myTile0`)._pickRandom()
    pause((randint(1, 20) - 3) * 100)
    tiles.setTileAt(Glitch1, assets.tile`myTile2`)
    pause((randint(1, 20) - 3) * 100)
    tiles.setTileAt(Glitch1, assets.tile`myTile0`)
})
forever(function () {
    Glitch1 = tiles.getTilesByType(assets.tile`myTile0`)._pickRandom()
    pause((randint(1, 20) - 2) * 100)
    tiles.setTileAt(Glitch1, assets.tile`myTile2`)
    pause((randint(1, 20) - 2) * 100)
    tiles.setTileAt(Glitch1, assets.tile`myTile0`)
})

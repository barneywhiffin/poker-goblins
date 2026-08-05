# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.7](https://github.com/barneywhiffin/poker-goblins/compare/v0.0.6...v0.0.7) (2026-08-05)


### Features

* add colour changing of cards, stored in state ([fdf86eb](https://github.com/barneywhiffin/poker-goblins/commit/fdf86ebf6bc70d275e8671be6250c17165fa913d))
* create initial grid values ([44115ca](https://github.com/barneywhiffin/poker-goblins/commit/44115ca7088dac038c467a145e7027078a9ecba8))
* fill all grid values correctly ([0056525](https://github.com/barneywhiffin/poker-goblins/commit/00565257263e2fda827644dd26a472728570c840))
* initialise vpip calc grid ([5739689](https://github.com/barneywhiffin/poker-goblins/commit/57396894d03528d58b930897da4a610f92d08954))

### [0.0.6](https://github.com/barneywhiffin/poker-goblins/compare/v0.0.5...v0.0.6) (2026-08-03)


### Features

* initialise menu drawer ([32cae7f](https://github.com/barneywhiffin/poker-goblins/commit/32cae7f468d8f095dc949e44504c647324fe16aa))
* initialise state driven main content from drawer navlinks ([2d588c5](https://github.com/barneywhiffin/poker-goblins/commit/2d588c58fb755ded5f51f085acc179aa3a368424))


### Bug Fixes

* bug where cross/esc would not close drawer ([95b4bc0](https://github.com/barneywhiffin/poker-goblins/commit/95b4bc0fed279d2cc5589f40648f7dfb3624f1ab))

### [0.0.5](https://github.com/barneywhiffin/poker-goblins/compare/v0.0.4...v0.0.5) (2026-07-30)


### Features

* add calc for royal flush and straight flush ([aca4d98](https://github.com/barneywhiffin/poker-goblins/commit/aca4d98ef3a6e8e011a5a85bf82f30a162592a88))
* add chec for number of ties ([e4e6792](https://github.com/barneywhiffin/poker-goblins/commit/e4e6792853c8b5161bc698523c89d4da6611b042))
* add check for flush and onscreen text at showdown ([7a85556](https://github.com/barneywhiffin/poker-goblins/commit/7a85556e40d9969cae47725ee2137d74affc836f))
* add check for straight ([091be1c](https://github.com/barneywhiffin/poker-goblins/commit/091be1cd0d346920519b9a712626c9c28723026a))
* add checks for pair type hands ([0de07ba](https://github.com/barneywhiffin/poker-goblins/commit/0de07ba4ccc6f859ad408c2fe6eb6246d7bf1642))
* add display of winning hand type ([6639bb7](https://github.com/barneywhiffin/poker-goblins/commit/6639bb7fe1cae475396bb1009617e090540e3dd8))
* show different win message if split pot ([cea0b6f](https://github.com/barneywhiffin/poker-goblins/commit/cea0b6f89b63555954895e5af5a4bd3400d94d9a))


### Bug Fixes

* add kickers to best hand calc when hand type equal ([cd3d975](https://github.com/barneywhiffin/poker-goblins/commit/cd3d975c46d6af481d360e5bc5bda387135e2c9b))
* bugs in flush calc ([224a392](https://github.com/barneywhiffin/poker-goblins/commit/224a392d72f4f6122a1210e03468cd52b3645495))
* fix bug a 3 pair hand would return 3rd pair value as 2 pair kicker, rather than highest remaining ([556ffa4](https://github.com/barneywhiffin/poker-goblins/commit/556ffa425079a1cfc6519b174efc3eeb12dba93a))
* fix bug where any unrelated straight and flush counted as straight flush ([933cb2e](https://github.com/barneywhiffin/poker-goblins/commit/933cb2e77bc21815c1834d8f660ece072832a9c5))
* fix bug where more than 5 in a row would only count the weakest straight ([a04b843](https://github.com/barneywhiffin/poker-goblins/commit/a04b84339e527288daa156af0f804b9b6d30308c))

### [0.0.4](https://github.com/barneywhiffin/poker-goblins/compare/v0.0.3...v0.0.4) (2026-07-25)


### Features

* add 6 player slots ([c941ca6](https://github.com/barneywhiffin/poker-goblins/commit/c941ca6042763f7cc08b5f20c71b1df7cf3d524f))
* add buttons to control round ([8110a2c](https://github.com/barneywhiffin/poker-goblins/commit/8110a2cb3b8d155b025626a6ae274f7e0907d0e4))
* add cards to each slot ([e50a79b](https://github.com/barneywhiffin/poker-goblins/commit/e50a79b6e4e7f6f2376608e0bf1e02d54ef5d64e))
* hide other players cards by default ([4cab194](https://github.com/barneywhiffin/poker-goblins/commit/4cab1941794ad6e6235f736dbb3881cd4d650ced))


### Bug Fixes

* allow shuffle to reset all cards to face up ([68fc755](https://github.com/barneywhiffin/poker-goblins/commit/68fc75561d42bbc264ebc98ebc110af086393ca8))
* limit cards to dealt to number of players ([064bac5](https://github.com/barneywhiffin/poker-goblins/commit/064bac564a35ce149fe16a45a93f2301d745530c))

### [0.0.3](https://github.com/barneywhiffin/poker-goblins/compare/v0.0.2...v0.0.3) (2026-07-22)


### Bug Fixes

* type error in getCardValues ([58eac73](https://github.com/barneywhiffin/poker-goblins/commit/58eac732d1e0b140f79d165a91ab3c63a3e8d93f))

### [0.0.2](https://github.com/barneywhiffin/poker-goblins/compare/v0.0.1...v0.0.2) (2026-07-21)


### Features

* add card shuffling ([f70709f](https://github.com/barneywhiffin/poker-goblins/commit/f70709fd1569c26add2e51abc23419e62c78046b))
* add central card slots of table ([ee124dd](https://github.com/barneywhiffin/poker-goblins/commit/ee124dd8eecd8ebef5815903153a721b5b7ea37f))
* add dark mode ([7acb692](https://github.com/barneywhiffin/poker-goblins/commit/7acb692873bb2e5bb93b99ef72d4e28635ae330a))
* add deck ([1c17207](https://github.com/barneywhiffin/poker-goblins/commit/1c1720758a413e32c0a35b5dbd11ea6624def3fe))
* add shuffling stored in state ([311662e](https://github.com/barneywhiffin/poker-goblins/commit/311662e96ed13f726946131d23938df3bdb1afe1))
* add some styling and card slot ([4122f8a](https://github.com/barneywhiffin/poker-goblins/commit/4122f8ae60f3589d373e0753c7da187119ed117f))
* add turn and river cards and initial logic ([b721768](https://github.com/barneywhiffin/poker-goblins/commit/b721768a5a859ccea3cbbfd45c01d42ec5dc9794))
* initial table ([6b68218](https://github.com/barneywhiffin/poker-goblins/commit/6b6821850466fc9f691daa4bd3e6a14d27a5e1ee))
* switch deck to element array to allow shared state for toggle card shown and shuffle deck ([49c8118](https://github.com/barneywhiffin/poker-goblins/commit/49c81184f873061fd0c47d58ac2a2caacd89ee0b))

### 0.0.1 (2026-07-19)


### Features

* add ability to hide card details on click ([f2f3bb1](https://github.com/barneywhiffin/poker-goblins/commit/f2f3bb107c63da04fa6c857071f86620d4615b73))
* add initial card component with suit and value props ([1623e60](https://github.com/barneywhiffin/poker-goblins/commit/1623e608ef7ffdf6489912ce045247670b032f65))
* add suit icons depending on suit prop passed to card ([1f9159a](https://github.com/barneywhiffin/poker-goblins/commit/1f9159a14a99d58cfbbdebeeb2aac52f94e53d59))
* improve card styling ([eefb111](https://github.com/barneywhiffin/poker-goblins/commit/eefb11102b5d429399c5d114b9b72737a57eafb1))
* initial commit ([bcebaf2](https://github.com/barneywhiffin/poker-goblins/commit/bcebaf2b193f5b95934741af566878a1680b09db))

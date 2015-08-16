This package provides definitions for devices that are lights. It is used
together with [Tinkerhub](https://github.com/tinkerhub/tinkerhub). Any devices
that register devices of type `light` should depend on and require this package.

# Type: `light`

## Required

### `state()`

Returns the state of the light. Should return an object containing at least the
property `power`.

The following properties can be set:

* `power` - boolean, `true` if the light is powered on, `false` otherwise.
* `brightness`, number, the brightness between 0 and 100%. Available when a light is dimmable.

### `setPower(power)`

Sets the power of the light. The `power` argument is a boolean, `true` if the
light should be powered on, `false` otherwise. This action should return the
new state as it would now be returned by `state()`.

### `turnOn()`

Turn the light on, works the same as calling `setPower(true)`.

### `turnOff()`

Turn the light on, works the same as calling `setPower(false)`.

## Capability: `dimmable`

### `setBrightness(percentage)`

Set the brightness of the light between 0 and 100%. This action should return
the new state as it would now be returned by `state()`.

### `increaseBrightness(percentage)`

Increase the brightness of the light with a certain percentage. This action
should return the new state as it would now be returned by `state()`.

### `decreaseBrightness(percentage)`

Decrease the brightness of the light with a certain percentage. This action
should return the new state as it would now be returned by `state()`.

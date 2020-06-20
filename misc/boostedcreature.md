# Boosted Creature

Display today's boosted creature.

`https://api.tibialabs.com/v1/boostedcreature/{name}`

If **name** is passed, it's going to return only creature's name.

#### Example URL:

`https://api.tibialabs.com/v1/boostedcreature/name`

#### Output example

```
Wolf
```

## Integration

### NightBot

```
!addcom !boostedcreature $(urlfetch https://api.tibialabs.com/v1/boostedcreature)
```

### StreamElements

```
$(customapi.https://api.tibialabs.com/v1/boostedcreature)
```

#### Testing case

```
Wedzy_: !boostedcreature
Nightbot: Today's boosted creature: Wolf.
```

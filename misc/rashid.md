# Rashid

Display today's Rashid location.

`https://api.tibialabs.com/v1/rashid/{city}`

If **city** is passed, it's going to return only city's name.

#### Example URL:

`https://api.tibialabs.com/v1/rashid/city`

#### Output example

```
Carlin
```

## Integration

### NightBot

```
!addcom !rashid $(urlfetch https://api.tibialabs.com/v1/rashid)
```

### StreamElements

```
$(customapi.https://api.tibialabs.com/v1/rashid)
```

#### Testing case

```
Wedzy_: !rashid
Nightbot: Today Rashid is located on Carlin.
```

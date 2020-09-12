# Level to Share Exp

Display which levels can a character share experience.

`https://api.tibialabs.com/v1/sharelevel/LEVEL`

#### Example URL

``https://api.tibialabs.com/v1/sharelevel/200``

#### Output example

```
A level 200 can share experience with levels 133 to 300.
```

## Integration

### NightBot

```
!addcom !sharelevel $(urlfetch https://api.tibialabs.com/v1/sharelevel/$(querystring))
```

### StreamElements

```
$(customapi.https://api.tibialabs.com/v1/sharelevel/${queryescape ${1:}})
```

#### Testing case

```
Wedzy_: !sharelevel 700
Nightbot: A level 700 can share experience with levels 466 to 1050.
```

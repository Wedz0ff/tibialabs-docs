# Top Experience

Display which character gained most experience yesterday.

`https://api.tibialabs.com/v1/topxp`

#### Output example

```
Demon Lance was top powergamer yesterday, he gained 373.928.454 experience points. Info by: TibiaFrags.com
```

## Integration

### NightBot

```
!addcom !topxp $(urlfetch https://api.tibialabs.com/v1/topxp)
```

### StreamElements

```
$(customapi.https://api.tibialabs.com/v1/topxp)
```

#### Testing case

```
Wedzy_: !topxp
Nightbot: Squllix was top powergamer yesterday, he gained 129.939.869 experience points. Info by: TibiaFrags.com
```

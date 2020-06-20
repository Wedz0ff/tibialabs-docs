# Informations

Display some informations about tibian worlds.

`https://api.tibialabs.com/v1/worldinfo/WORLD_NAME`

`https://api.tibialabs.com/v1/worldinfo/online/WORLD_NAME`

`https://api.tibialabs.com/v1/worldinfo/online/all`

#### Example URLs

`https://api.tibialabs.com/v1/worldinfo/Belobra`

`https://api.tibialabs.com/v1/worldinfo/online/Belobra`

`https://api.tibialabs.com/v1/worldinfo/online/all`

#### Output example

```
Belobra (Optional PvP) was created on 12/16. Online record: 1050 on May 04 2020, 02:14:31 CEST. There are currently 949 players online.
There are currently 934 players online on Belobra.
There are currently 33080 players online on Tibia.
```

## Integration

### NightBot

```
!addcom !worldinfo $(urlfetch https://api.tibialabs.com/v1/worldinfo/$(querystring))
```

```
$(customapi.https://api.tibialabs.com/v1/worldinfo/${queryescape ${1:}})
```

#### Testing case

```
Wedzy_: !worldinfo Gladera
Nightbot: Gladera (Optional PvP) was created on 04/18. Online record: 961 on May 02 2020, 03:27:31 CEST. There are currently 853 players online.
```

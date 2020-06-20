# Party Tracker

Display a summary information about a group of characters.

`https://api.tibialabs.com/v1/partytracker/CHAR_NAME/CHAR_NAME/...`

#### Example URL

`https://api.tibialabs.com/v1/partytracker/Punbel/Minutz/Fury Dodeek/Wedzy`

#### Output example

```
Elite Knight: Punbel (Level: 1339) - Elder Druid: Minutz (Level: 1400) - Royal Paladin: Fury Dodeek (Level: 1292) - Master Sorcerer: Wedzy (Level: 1378)
```

## Integration

### NightBot

```
!addcom !myparty $(urlfetch https://api.tibialabs.com/v1/partytracker/Punbel/Minutz/Fury Dodeek/Wedzy)
```

### StreamElements

```
$(customapi.https://api.tibialabs.com/v1/partytracker/Punbel/Minutz/Fury Dodeek/Wedzy)
```

#### Testing case

```
Wedzy_: !myparty
Nightbot: Elite Knight: Punbel (Level: 1339) - Elder Druid: Minutz (Level: 1400) - Royal Paladin: Fury Dodeek (Level: 1292) - Master Sorcerer: Wedzy (Level: 1378)
```

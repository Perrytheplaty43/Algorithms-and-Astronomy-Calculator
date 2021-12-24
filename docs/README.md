
# Algorithums and Astronomy Calculator

A webserver running of Node.js and Golang for backend calculations. The site has 3 main 
pages: Algorithums, Astronomy Calculator, and Minesweeper. The algorithums page includes 
a few sorting and text transforming algorithums. The astronomy calculator page that is an
algorithm that takes the entire NGC catalogue ([using this source](https://heasarc.gsfc.nasa.gov/W3Browse/all/ngc2000.html)) 
and parses it based on supplied long and lat and then finds the best 5 targets based on the
objects ALT (degrees above the horizon) for that night and its integrated (total) magnitude 
as listed in the NGC catalog. The Minesweeper page is a Bolero applitction writen in F# from
this [repository](https://github.com/albert-du/BoleroMinesweeper). There are 2 servers running
from this repo, a rasberry pi and a GCP vm instance. The pi is auto deploying from the dev branch:
[athesto-dev.ddns.net](https://athesto-dev.ddns.net/) and the master branch on the GCP VM instance:
[athesto.ddns.net](https://athesto.ddns.net/).

# Astronomy Calculator API
The algorithm used is also being run as a JSON api. `GET` requests should be made with the following
parameters:

`https://athesto.ddns.net/api/astroTarget?lat=[LATITUDE]&long=[LONGITUDE]&tol=[TOLERANCE]&tolMag=[MAGNITUDE_TOLERANCE]&type=[TYPES]&date=[DATE]`

<br></br>
**`LATITUDE` & `LONGITUDE`:** Can  be any valid lat long in degrees.

**`TOLERANCE`:** Values between `42`-`88`

**`MAGNITUDE_TOLERANCE`:** Tolerance interms of magnitude (brightness)

**`TYPES`:** Use the bellow key to select preferd types and use the following format `Gx,OC,Gb`
 - `Gx`: Galaxy
 - `OC`: Open star cluster
 - `Gb`: Globular star cluster
 - `Nb`: Bright emission or reflection nebula
 - `Pl`: Planetary nebula
 - `CpN`: Cluster associated with nebulosity
 - `Ast`: Asterism
 - `Kt`: Knot or nebulous region in an external galaxy
 - `TS`: Triple star
 - `DS`: Double star
 - `SS`: Single star
 - `Q`: Uncertain type or may not exist
 - `U`: Unidentified at the place given, or type unknown
 - `D`: Object called nonexistent in the RNGC
 - `PD`: Photographic plate defect

**`DATE`:** Optional, should be provided in the following format: `YEAR-MONTH-DATE`. Example: `2021-12-22`

# Weather API
The algorithm used to classidiy the weather in that night into either "Perfect", "Fair", or "Bad" is also being run as a JSON api. 
`GET` requests should be made with the following parameters:

`https://athesto.ddns.net/api/weather?lat=[LATITUDE]&lon=[LONGITUDE]&date=[DATE]`

<br></br>
**`LATITUDE` & `LONGITUDE`:** Can be any valid lat long in degrees.

**`DATE`:** Optional, should be provided in the following format: `YEAR-MONTH-DATE`. Example: `2021-12-22` (must be in the future)

# Scrambler/Unscrambler API
The algorithm used to scramble/unscramble text is also being run as a JSON api. 
`GET` requests should be made with the following JSON request body to this usl: `https://athesto.ddns.net/api/scrambler`:

```
'{
    "text":"[INPUT]"
}'
```

<br></br>
**`INPUT`:** Should be the text you want to be scramble/unscrambled. Exmaple: `The quick brown fox jumps over the lazy dog`

# Image Search API
The algorithm used to get images based of the objects NGC or IC number is also being run as a JSON api. 
`GET` requests should be made with the following parameters:

`https://athesto.ddns.net/api/Images?id=[ID]`

<br></br>
**`ID`:** An objects NGC or IC number. Example: `NGC3031` or `IC1369`

## Acknowledgements

 - [Minesweeper](https://github.com/albert-du/BoleroMinesweeper)
 - [NGC Cataloge](https://heasarc.gsfc.nasa.gov/W3Browse/all/ngc2000.html)
 - [General Solar Position Calculations](https://gml.noaa.gov/grad/solcalc/solareqns.PDF)
 - [Stargazing.net](http://www.stargazing.net/kepler/altaz.html)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Authors

- [@Perrytheplaty43](https://github.com/Perrytheplaty43)
- [@albert-du](https://github.com/albert-du)


## Website

Site is currently being ran at:
[athesto.ddns.net](https://athesto.ddns.net/)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Screenshots

![App Screenshot](https://imgur.com/TjqTr1x.png)

![App Screenshot](https://imgur.com/1n5Bv7B.png)

![App Screenshot](https://imgur.com/yvrLuYI.png)

![App Screenshot](https://imgur.com/VMzCiRC.png)

![App Screenshot](https://imgur.com/z2qRHF4.png)

![App Screenshot](https://imgur.com/YfqrsoZ.png)


## Support

For support, join our [discord](https://discord.gg/xVDEdX6ys9).

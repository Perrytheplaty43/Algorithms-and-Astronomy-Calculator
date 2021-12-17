
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

# GraffDrone

Automate graffiti creation by attaching a paint supply to a preprogrammed drone.

## History

This project was born from the desire to make graffiti more accessible. The dream is to one day be able to attach several cans of paint to a UAV and program it to create art on inaccessible places. During the summer of 2015, I was lucky to work on this project as part of the Computational Poetics course at [SIAT](http://www.sfu.ca/siat.html). I started with the Parrot AR.Drone 2.0 because it is lightweight and cost-effective, and also it has a very active hacking community ([The NodeCopter](http://www.nodecopter.com/)). After some investigation, I decided that the logo language was a good candidate to make the definition of fly patterns more accessible to the general public. However, it needed a friendly interface for the end user to create their own designs. I came across the work of <a href="mailto:max@maxogden.com">Max Ogden</a> but the logo interpreter needed to be modified so the drone would create the patterns vertically, not horizontally.

## Description

The project was divided in 3 stages:

1. Get the drone to fly in a preprogrammed pattern horizontally (will paint on the floor)
2. Attach the paint supply to the drone and test the patterns produced
3. Rewrite the controller so the drone flies vertically (to make it paint on a wall instead of the floor)

The project has 2 main components:

* A view layer (HTML page), provided by [jslogo](https://github.com/inexorabletash/jslogo)
* A controller layer (Node.js logo-to-drone translator), provided by [logo-drone](https://github.com/maxogden/logo-drone)

Sadly, I no longer have access to the AR.Drone which makes any support of this project impossible for me.

## Credits

The current state of the project is a mash-up of [jslogo](https://github.com/inexorabletash/jslogo) by <a href="mailto:inexorabletash@gmail.com">Joshua Bell</a>, [logo-drone](https://github.com/maxogden/logo-drone) by <a href="mailto:max@maxogden.com">Max Ogden</a> and [ardrone-nodejs-browser-control](https://github.com/rohitghatol/ardrone-nodejs-browser-control) by [Rohit Ghatol](http://www.rohitghatol.com).

Big thanks for their amazing efforts.

Special thanks to [Dr. Diane Gromala](http://www.sfu.ca/~dgromala/VR/) for providing not only financial but moral support for this project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisities

This is what you will need:

* A computer running Node.js
* A Parrot AR.Drone 2.0

### Installing

Clone or fork the repository, open your terminal and once in the project folder run

```
npm install
```

Connect to the drone's WiFi and start the application using

```
node app.js
```

Finally, open your web browser and type

```
localhost:5000
```

## Built With

* Node.js
* Atom
* Bower

## Contributing

In the state it is right now, the project has not been fully tested so it is prone to bugs and very unstable. You are welcome to make changes but unfortunately, since I no longer have access to the drone, I'm unable to further test or support the project. Sorry, I won't be able to fix any issues you most certainly will find :(

## License

This project is licensed under the Apache License - see the [LICENSE.md](LICENSE.md) file for details

## Disclaimer

The development on this process is in its very early stages. It has not been fully tested and it is prone to error and bugs. I am not responsible for any damages, direct or indirect, caused by experimentation with this piece of software.

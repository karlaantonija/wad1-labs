'use strict';


import logger from "../utils/logger.js";

const playlist = [
        {
            id: 1,
            title: "Abracadabra",
            artist: "Lady Gaga"
        },
        {
            id: 2,
            title: "Paper Bag",
            artist: "Fiona Apple"
        },
        {
            id: 3,
            title: "The Promise",
            artist: "When in Rome"
        }
    ];

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!")
    logger.debug("Loading the playlist", playlist);
    response.json(playlist);   
  },
};

export default dashboard;
'use strict';

import logger from "../utils/logger.js";
import exercises from "../models/exercises.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    const viewData = {
      title: "About the playlist app",
      employee: exercises.getAppInfo()
    };
    
    logger.debug(viewData.info);
    response.render('about', viewData);   
  },
};

export default about;
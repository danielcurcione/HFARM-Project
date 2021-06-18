<template>
<div class="infopage">

  <div class="content">
    <article class="message is-info">
      <div class="message-body">
        This project was done for a company application, based on a specific brief. <br>
        Therefore, it will not receive updates and will not be developed further.
      </div>
    </article>

    <h3><span>#</span>  Technical choices</h3>

    <p>
      This application is a demo of an existing HR management application. <br>
      The whole project is developed with a VueJS framework (<a href="https://nuxtjs.org/">Nuxt</a>) and the graphical elements are based on the <a href="https://bulma.io/">Bulma</a> library to which some components have been added, customized and sometimes recreated. <br><br>
      The data is read, modified and/or deleted through <a href="https://sheety.co/">Sheety</a>'s API, which works with an intuitive integration of a google spreadsheets file. <br>
      This <a href="https://docs.google.com/spreadsheets/d/1SpXE2sQsiYNWtDl7DOilz-QuqjGXSb-70cDESItfkt8/edit?usp=sharing">file</a> contains all of the app's data, thus acting as a Database. <br>
      Here the data is arranged in sheets (replacing DB tables) and each column represents a property. <br>
      The first row (table header) is used to identify the columns, from the second row onwards are inserted the data that the API will retrieve, always returning JSON objects. <br><br>
      In this case there is not a real Backend system, nor a Database integration. <br>
      The choice has been made primarily for the short time available, but also because in the initial design we evaluated the option to use the app directly from the browser, without the need to make local installations or build or deploy processes. <br>
      The app is ready to use, evaluating the integration with a database the data would have been exposed in a cloud, with several problems of integration of various systems, licenses (sometimes paid) in addition to the personal lack of specific skills for development.
    </p>

    <h3><span>#</span> The app works</h3>

    <p>
      The application manages a human resources portal. <br>
      From the dashboard, we have direct links to the app's two most important pages: applications and open positions. <br>
      The same pages can be reached via side menu, always visible and well organized. <br><br>
      In the applications page there is the possibility to view all the profiles, to search for specific ones through the search bar, or to filter them according to the availability of the profile (available, declined). <br>
      Each application immediately presents the possibility to understand the status of availability based on the color next to the name, as well as knowing what position you are applying for and with what role. Each profile can be deleted from the list by clicking on the trash button, or a related note can be viewed. <br><br>
      Respectively to the application position, there is a direct link to the application page, so you can view the status and other related applications.
      In the application page (Calls) you can see some identification cards, with some general information: if the application is internal or for an external customer (with name related to the customer) or if it is marked as preferred. <br>
      There is the possibility to delete, through <button class="button is-light is-small"> <img src="../assets/trash.svg" width="15px"> </button>, the application, or to insert it among the favorites, clicking on <button class="button is-light is-small"> <img src="../assets/fav.svg" width="15px"> </button>. <br>
      Cards can be filtered by customer category (internal, external) or searched by assigned name. <br><br>
      In order to create a new application, just select the first card used for the creation and a data entry page (form) will open where the name, the customer and the preference (if any) of the application will be entered. <br>
      Upon confirmation this will appear in the list together with the others.
    </p>

    <h3><span>#</span> Next steps (hypothesis)</h3>
    <p>
      Data, session and authorization management, as well as secure operation and privacy, can be managed via the Google authorization system (OAuth 2.0). <br>
      Each user could register with their google account and log in to the app. This way Google API could be used to access the file that contains the data. <br><br>
      The application could have new parameters such as: the start and end date (currently only simulated in a random way), so as to filter the application according to a specific month of expiration, or organizing them by priority. <br><br>
      Other possible implementations could concern candidates' profiles, with a dedicated page with much more personal information and/or scores assigned by recruiters.
    </p>

    <h3><span>#</span> Note</h3>
    <p>
      Given the initial brief, some graphics were rethought and new sections added, while integrating and maintaining the proposed components and user flow. <br>
      The application layout has been entirely thought and designed, using some good web design guidelines. <br><br>
      The project has been created and maintained in a personal <a href="https://github.com/danielcurcione/">GitHub</a> repository, public and available. <br>
      To this repository has been implemented the automatic build & deploy system of <a href="https://www.netlify.com/">Netlify</a>, hosting system where the project is hosted. <br>
      This platform automatically updates the app based on the last change uploaded to the git repository. <br><br>
      The API used was purchased on a monthly, personal plan and allows for up to 200 requests (read, write, edit, delete) per month. <br>
      The app is then functional until the limit is reached. (For the entire development and testing, about 2,000 were used, using the paid plan).  <br><br>
    </p>


  </div>

</div>
</template>
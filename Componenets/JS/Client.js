function client(id){
    let client = "<div class='client' id='travler"+id+"'>\n" +
        "                            <div class='clientInfo'>\n" +
        "                             <p>\n" +
        "                              <select name='cars' style='width: 100%; margin-bottom: 10px;'>\n" +
        "                              <option value='volvo'>Mr.</option>\n" +
        "                              <option value='saab'>Mrs</option>\n" +
        "                              <option value='fiat'>Ms.</option>\n" +
        "                            </select>\n" +
        "                            </p>\n" +
        "                            <p><input class='clientInput'  type='text' id='firstname' name='firstName' placeholder='First Name (same as passport)'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='firstname' name='lastName' placeholder='Last Name (same as passport)'></p>\n" +
        "                            <p><input class='clientInput'  type='date' id='firstname' name='birthDate' placeholder='Birth Ddate'></p>\n" +
        "                            <p><input class='clientInput'  type='email' id='firstname' name='mail' placeholder='E-Mail'></p>\n" +
        "                            <p><input class='clientInput'  type='phone' id='firstname' name='phone' placeholder='Home Phone'></p>\n" +
        "                            <p><input class='clientInput'  type='phone' id='firstname' name='cellPhone' placeholder='Cell Phone'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='firstname' name='address' placeholder='Adress'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='firstname' name='city' placeholder='City'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='firstname' name='stat' placeholder='Stat'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='firstname' name='zip' placeholder='Poste code / ZIP'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='firstname' name='nameTag' placeholder='Name Tag'></p>\n" +
        "                        </div>\n" +
        "                            <div class='passportInfo'>\n" +
        "                            <p>Passport information: (if you don’t have a valid passport at the time of the booking, leave the spaces empty, you can send us your passport information later).</p>\n" +
        "                            <br>\n" +
        "                            <p><input class='clientInput'  style='width: 100%; margin-bottom: 10px;' type='text' id='firstname' name='passportNumber' placeholder='Passport number'></p>\n" +
        "                            <p><input class='clientInput'  style='width: 100%; margin-bottom: 10px;' type='text' id='firstname' name='passportCountry' placeholder='country of issue'></p> \n" +
        "                            <p><input class='clientInput'  style='width: 100%; margin-bottom: 10px;' type='text' id='firstname' name='passportDate' placeholder='issue date'></p> \n" +
        "                            <p><input class='clientInput'  style='width: 100%; margin-bottom: 10px;' type='text' id='firstname' name='passportExdate' placeholder='expiration date'></p> \n" +
        "                        </div>\n" +
        "                            <div class='accomodation'>\n" +
        "                            <p>Accommodation:</p>\n" +
        "                            <input type='radio' id='male' name='gender' value='male'> -- Please check here if you would like to stay in a double room (shared with another tour participant) <br>\n" +
        "                            <input type='radio' id='male' name='gender' value='male'> -- Please check here if you want a single room for the tour - additional payment of $ 2985 USD.\n" +
        "                        </div>\n" +
        "                        </div>";
    return client;
}
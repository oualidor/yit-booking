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
        "                            <p><input class='clientInput'  type='text' id='firstname' name='fname"+id+"' placeholder='First Name (same as passport)'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='lastName' name='lname"+id+"' placeholder='Last Name (same as passport)'></p>\n" +
        "                            <p><input class='clientInput'  type='date' id='birthDate' name='dob"+id+"' placeholder='Birth Ddate'></p>\n" +
        "                            <p><input class='clientInput'  type='email' id='mail' name='email"+id+"' placeholder='E-Mail'></p>\n" +
        "                            <p><input class='clientInput'  type='phone' id='HomePhone' name='HomePhone"+id+"' placeholder='Home Phone'></p>\n" +
        "                            <p><input class='clientInput'  type='phone' id='cellPhone' name='phone"+id+"' placeholder='Cell Phone'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='address' name='address"+id+"' placeholder='Adress'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='city' name='city"+id+"' placeholder='City'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='stat' name='country"+id+"' placeholder='Stat'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='zip' name='postcode"+id+"' placeholder='Poste code / ZIP'></p>\n" +
        "                            <p><input class='clientInput'  type='text' id='nameTag' name='nameTag"+id+"' placeholder='Name Tag'></p>\n" +
        "                        </div>\n" +
        "                            <div class='passportInfo'>\n" +
        "                            <p>Passport information: (if you don’t have a valid passport at the time of the booking, leave the spaces empty, you can send us your passport information later).</p>\n" +
        "                            <br>\n" +
        "                            <p><input class='clientInput'   type='text' id='passportNumber' name='passport"+id+"' placeholder='Passport number'></p>\n" +
        "                            <p><input class='clientInput'   type='text' id='passportCountry' name='passportCountry"+id+"' placeholder='country of issue'></p> \n" +
        "                            <p><input class='clientInput'   type='text' id='passportDate' name='passportDate"+id+"' placeholder='issue date'></p> \n" +
        "                            <p><input class='clientInput'   type='text' id='passportExdate' name='passportExdate"+id+"' placeholder='expiration date'></p> \n" +
        "                        </div>\n" +
        "                            <div class='accomodation'>\n" +
        "                            <p>Accommodation:</p>\n" +
        "                            <input type='radio' id='radio1"+id+"' name='choice1"+id+"' value='male'> -- Please check here if you would like to stay in a double room (shared with another tour participant) <br>\n" +
        "                            <input type='radio' id='radio2"+id+"' name='choice2"+id+"' value='male'> -- Please check here if you want a single room for the tour - additional payment of $ 2985 USD.\n" +
        "                        </div>\n" +
        "                        </div>";
    return client;
}